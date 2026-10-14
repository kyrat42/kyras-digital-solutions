/* =========================================================
   Site-wide settings: edit these two values before launch
   ========================================================= */
const SITE_CONFIG = {
  // Where contact links and the mailto fallback point.
  email: "kyra@kyrasdigitalsolutions.com",
  // Contact form submissions go to Netlify Forms when the site is live.
  // Locally (localhost) the form falls back to the visitor's email app.
  useNetlifyForms: true,
};

(() => {
  const root = document.documentElement;

  // ---- Theme toggle ----
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("kds-theme", next); } catch (e) {}
    });
  });

  // ---- Mobile menu ----
  const nav = document.querySelector(".nav");
  const menuBtn = document.querySelector("[data-menu-toggle]");
  menuBtn?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (e) => {
    if (nav?.classList.contains("open") && !nav.contains(e.target)) {
      nav.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });

  // ---- Nav shadow on scroll ----
  const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Reveal on scroll (exposed so dynamic content can opt in) ----
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;
  window.kdsReveal = (scope = document) => {
    scope.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      io ? io.observe(el) : el.classList.add("in");
    });
  };
  window.kdsReveal();

  // ---- Cursor spotlight on cards ----
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest?.(".spot");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  // ---- Footer year + email links ----
  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-email]").forEach((a) => {
    a.href = `mailto:${SITE_CONFIG.email}`;
    if (!a.textContent.trim()) a.textContent = SITE_CONFIG.email;
  });

  // ---- Resume: print to PDF ----
  document.querySelectorAll("[data-print]").forEach((b) => b.addEventListener("click", () => window.print()));

  // ---- Contact form ----
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const card = form.closest(".form-card");

  const validate = () => {
    let ok = true;
    form.querySelectorAll("[required]").forEach((input) => {
      const field = input.closest(".field");
      const valid = input.type === "email"
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
        : input.value.trim().length > 0;
      field?.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    return ok;
  };
  form.addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("invalid"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) {
      form.querySelector(".invalid .input")?.focus();
      return;
    }
    const data = new FormData(form);
    const btn = form.querySelector("button[type=submit]");
    const successTitle = card.querySelector(".form-success h3");
    const successText = card.querySelector(".form-success p");
    const isLocal = ["localhost", "127.0.0.1", ""].includes(location.hostname) || location.protocol === "file:";

    if (SITE_CONFIG.useNetlifyForms && !isLocal) {
      btn.disabled = true;
      btn.firstChild.textContent = "Sending… ";
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        card.classList.add("sent");
      } catch (err) {
        btn.disabled = false;
        btn.firstChild.textContent = "Send message ";
        alert(`Sorry, the message didn't go through. Please email ${SITE_CONFIG.email} directly.`);
      }
      return;
    }

    // Local preview: open the visitor's mail app, pre-filled.
    if (successTitle) successTitle.textContent = "Almost there!";
    if (successText) successText.textContent = "Your email app should open with your message ready. Just hit send.";
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      `Project type: ${data.get("type") || "Not sure yet"}`,
      `Budget: ${data.get("budget") || "Not specified"}`,
      `Timeline: ${data.get("timeline") || "Not specified"}`,
      "",
      data.get("message"),
    ].filter((l) => l !== null);
    const subject = `New project inquiry from ${data.get("name")}`;
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    card.classList.add("sent");
  });
})();

// ---- Testimonial photos: swap initials for a photo once it loads ----
document.querySelectorAll(".avatar[data-photo]").forEach((el) => {
  const img = new Image();
  img.alt = "";
  img.onload = () => { el.textContent = ""; el.appendChild(img); };
  img.src = el.dataset.photo;
});
