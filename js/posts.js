/* =========================================================
   Portfolio posts: one object per case study / article.
   To add a post: copy an object, give it a unique `slug`,
   and write the body as HTML. Posts show in the order
   they are listed here, so put the newest at the top.
   `featured: true` posts appear on the home page.
   `pinned: 1`, `pinned: 2`... keep a post at the top, in that order.
   ========================================================= */
const POSTS = [
  {
    slug: "tier-tech",
    pinned: 2,
    title: "Tier Tech: rebuilding a behavioral health platform from no-code to custom code",
    excerpt: "Moving a clinical services platform off Bubble, which can't support HIPAA compliance, and onto a custom Node.js and PostgreSQL stack with security and privacy designed in from the first line of code.",
    readTime: "7 min",
    category: "Case Study",
    tags: ["Web App", "Healthcare", "Node.js", "AI"],
    glyph: "Tier Tech",
    colors: ["#0e7490", "#4f46e5"],
    image: "assets/tiertech/dashboard.webp",
    featured: true,
    stack: ["Node.js", "Express", "PostgreSQL (Neon)", "EJS", "OpenAI API", "SendGrid", "PDFKit", "Helmet"],
    note: "Tier Tech is in active development and not available to the public.",
    body: `
      <p><strong>Tier Tech</strong> is the platform behind a behavioral health organization's school and community services. It started life as a Bubble app, and the organization outgrew it: they needed more complex clinical workflows, more control over their data, and a foundation that could be held to the standards expected of software that handles sensitive health information. I'm rebuilding it from scratch as a custom Node.js and PostgreSQL application.</p>

      <h2>Why it had to leave Bubble</h2>
      <p>Bubble is a great tool for getting an app off the ground quickly, but it isn't built for protected health information. Under HIPAA, every vendor that stores or handles patient data must sign a <strong>Business Associate Agreement (BAA)</strong>, a contract that makes them legally responsible for protecting that data. Bubble does not offer a HIPAA-compliant platform and won't sign a BAA, so no app built on it can hold real client records compliantly, no matter how carefully it's designed.</p>
      <p>Bubble also manages the whole stack behind the scenes, which means the organization couldn't control where data, logs and backups live, or prove how that data is protected. For a platform built around clinical assessments, risk screenings and treatment records, those were dealbreakers.</p>
      <p>Moving to custom code changes that. The organization now owns the entire application and its database, and can host it with providers that will sign a BAA. Every safeguard HIPAA expects, from access controls to audit trails, can be built in and verified rather than hoped for.</p>
      <blockquote>No-code got the idea off the ground. Custom code is what lets it safely hold real client data.</blockquote>

      <h2>One platform for the whole care journey</h2>
      <p>Tier Tech follows a client from the first referral to ongoing care, with every step in one place:</p>
      <ul>
        <li><strong>Referrals:</strong> intake of new referrals, clinician matching and invitations, with clinicians accepting or declining right in the app.</li>
        <li><strong>Consent:</strong> secure links that let clients and guardians review and sign informed consent forms online.</li>
        <li><strong>Assessments:</strong> biopsychosocial intakes clients can complete from a link, mental status exams, case conceptualizations, and risk tools like the C-SSRS and SAFE-T, plus safety plans.</li>
        <li><strong>Treatment:</strong> a step-by-step course of treatment (or course of assessment for assessment-only clients), behavior intervention plans with progress updates, and supervisor reviews.</li>
        <li><strong>Scheduling:</strong> appointments, recurring weekly sessions, follow-ups and attendance tracking.</li>
        <li><strong>Districts and schools:</strong> district and school management, plus a district needs assessment.</li>
        <li><strong>Analytics:</strong> district and school administrators see analytics scoped to their own district or school, broken down by year, gender, school and grade level.</li>
      </ul>
      <figure class="shot">
        <img src="assets/tiertech/clients.webp" alt="Clients list with search, filters by district, school and clinician, and each client's school, clinicians, latest contact and status" width="2000" height="1066" loading="lazy">
        <figcaption>The client list, searchable and filterable by district, school and clinician.</figcaption>
      </figure>

      <h2>A dashboard that tells you what to do next</h2>
      <p>Admins start every day with a dashboard that surfaces what needs attention: open referrals waiting for a clinician, clients with no clinician assigned, and expired invitations, each with a one-click action. A live clinician workload view shows how full every caseload is at a glance.</p>

      <h2>Smarter case assignment</h2>
      <p>Assigning a new referral used to mean guesswork. Now clinicians are listed lightest caseload first, with each person's current case count, how long they've been in session, their stated preferences and the languages they speak, so the right clinician is easy to spot. One click sends the invitation, and the clinician accepts or declines in the app.</p>
      <figure class="shot">
        <img src="assets/tiertech/referral-assign.webp" alt="Assign case screen listing clinicians by caseload with weeks in session, stated preferences, languages spoken and an Invite clinician button" width="2000" height="1065" loading="lazy">
        <figcaption>Matching a referral to a clinician by caseload, preferences and languages.</figcaption>
      </figure>

      <h2>Built for everyone involved in care</h2>
      <p>Clinicians, assessment supervisors, program managers, referral coordinators, directors, district and school administrators, and parents each get access to what their role needs, and one person can hold several roles at once. Some workflows reach people outside the app entirely: teachers and caregivers can rate a student's behavior plan from a secure link, with automatic reminders when a rating is due.</p>
      <figure class="shot">
        <img src="assets/tiertech/user-roles.jpg" alt="User account roles, with checkboxes for each role and plain-language descriptions of what each role can see and do" width="2000" height="590" loading="lazy">
        <figcaption>Roles are combined per user, with plain-language descriptions of what each one can access.</figcaption>
      </figure>

      <h2>Security and privacy, designed in</h2>
      <p>Software that handles health information can't treat security as an add-on. Tier Tech is being built toward HIPAA's technical safeguards from the start:</p>
      <ul>
        <li><strong>Role-based access control</strong> on every route, with unique logins and no shared accounts.</li>
        <li><strong>Tamper-resistant audit logs</strong> that record sign-ins and access to sensitive records, and that the application itself cannot edit or delete.</li>
        <li><strong>Automatic sign-out</strong> after 15 minutes of inactivity, enforced on the server.</li>
        <li><strong>Hardened account flows:</strong> invite-only account creation, verified email changes, single-use reset links, login rate limiting, and every session ended when a password is reset or a user is deactivated.</li>
        <li><strong>Separate development and live environments</strong>, each with its own database and secrets, so pointing at live data is always a deliberate choice.</li>
      </ul>
      <blockquote>Good security design is knowing exactly which doors need the heavy locks, and building them in before anyone moves in.</blockquote>
      <p>Compliance is more than code, so the project also keeps a living record of what's done and what still needs a decision, like hosting with a signed BAA, encryption at rest and backups, before real client data moves in.</p>

      <h2>AI that saves clinicians time</h2>
      <p>Clinical documentation takes hours. Tier Tech uses the OpenAI API to draft biopsychosocial and mental status exam summaries and case conceptualizations from completed assessments, which clinicians review and edit before anything is finalized.</p>
      <figure class="shot">
        <img src="assets/tiertech/mse-summary.webp" alt="Mental status exam with structured findings on the left and an AI-drafted narrative summary on the right" width="2000" height="1058" loading="lazy">
        <figcaption>A mental status exam with its AI-drafted narrative summary, shown with test data.</figcaption>
      </figure>

      <h2>Connected to the tools around it</h2>
      <p>Completed assessments can be sent to a partner's report-generation service with one click. The request is made server-side, so credentials never reach the browser, and the clinician lands directly on the finished report. Live testing against the partner's service caught two subtle bugs before launch: a security policy that silently blocked the cross-site redirect, and a relative redirect path that would have sent clinicians to the wrong page. Both were fixed before they could reach a single user. Consent forms, safety plans, MTSS summaries and score charts can be exported as PDFs, and the app sends account and reminder emails through SendGrid.</p>

      <h2>Part of a bigger partnership</h2>
      <p>Tier Tech is part of my ongoing work with CalCPI, alongside the <a href="#calcpi-website">CalCPI website</a>, the <a href="#calcpi-supervision-tool">CalCPI Supervision Tool</a> and the <a href="#calcpi-clinical-companion">CalCPI Clinical Companion</a>.</p>
    `,
  },
  {
    slug: "calcpi-website",
    title: "CalCPI website: a pixel-perfect WordPress rebuild in two days",
    excerpt: "Rebuilding a mental health nonprofit's existing WordPress site in Bubble, matching the original design pixel for pixel, in just two days.",
    readTime: "2 min",
    category: "Client Project",
    tags: ["Website", "Healthcare", "No-code"],
    glyph: "CalCPI",
    colors: ["#1e3a8a", "#facc15"],
    image: "assets/calcpi/website-home.jpg",
    featured: true,
    stack: ["Bubble", "WordPress migration"],
    links: [{ label: "Visit calcpi.org", url: "https://www.calcpi.org" }],
    body: `
      <p>The <strong>California Consortium for Prevention and Intervention (CalCPI)</strong> trains social-emotional support staff and mental health clinicians to deliver evidence-based interventions for children, adolescents, adults and older adults. Their public website ran on WordPress, and they needed it rebuilt in Bubble without losing any of the look their visitors already knew.</p>

      <h2>Pixel perfect, in two days</h2>
      <p>I rebuilt the entire site from scratch, matching the original design pixel for pixel: the layout, typography, colors, imagery and navigation. The whole rebuild was done in <strong>two days</strong>, so the organization could switch over without a long, disruptive transition, and visitors would never notice anything had changed.</p>
      <blockquote>The best migration is one your visitors never notice.</blockquote>

      <h2>What carried over</h2>
      <ul>
        <li><strong>A welcoming homepage</strong> with the organization's mission front and center.</li>
        <li><strong>Services and training opportunities</strong>, organized in clear drop-down navigation.</li>
        <li><strong>Testimonials</strong> from the families and clients CalCPI serves.</li>
        <li><strong>Easy ways to reach out:</strong> consultation and service requests, contact details for both office locations, and social links.</li>
        <li><strong>Links to CalCPI's own tools</strong>, including logins for practicum applicants and staff.</li>
      </ul>

      <h2>Part of a bigger partnership</h2>
      <p>CalCPI is a repeat client. I've also built two custom tools for their team: the <a href="#calcpi-supervision-tool">CalCPI Supervision Tool</a> for clinical psychology training, and the <a href="#calcpi-clinical-companion">CalCPI Clinical Companion</a> for group home clinicians.</p>
    `,
  },
  {
    slug: "klaatu-tattoo",
    title: "Klaatu Tattoo: a landing page designed around the artist's logo",
    excerpt: "A budget-friendly, one-page site for a Northern Colorado tattoo artist, with a look built entirely from the artist's own playful, slightly creepy logo.",
    readTime: "2 min",
    category: "Client Project",
    tags: ["Website", "Small Business", "UI/UX"],
    glyph: "Klaatu",
    colors: ["#dc2626", "#16a34a"],
    image: "assets/klaatu/home.jpg",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "Google Fonts", "Netlify"],
    links: [{ label: "Visit klaatutattoo.com", url: "https://www.klaatutattoo.com" }],
    body: `
      <p><strong>Klaatu Tattoo</strong> is the studio of <strong>Tim Bakel-Morgan</strong>, a tattoo artist in Windsor, Colorado who specializes in colorful, illustrative work inspired by new school, traditional and neo-traditional styles: playful, slightly creepy and packed with personality. Tim needed a website that felt just as fun as the art, without a big price tag.</p>

      <h2>Design that starts with the logo</h2>
      <p>Tim came with a logo, and I built the whole look around it. Splatters of red across the page, bold horror-inspired display type, and red calls to action pick up the logo's colors and energy, so the site feels like an extension of the brand instead of a generic template.</p>
      <blockquote>When a brand already has a strong personality, the website's job is to turn the volume up, not down.</blockquote>

      <h2>Everything a client needs to book</h2>
      <ul>
        <li><strong>About the artist:</strong> Tim's style, approach and focus on making every client feel heard.</li>
        <li><strong>Portfolio:</strong> flash designs marked as available or taken, since each design can only be claimed once.</li>
        <li><strong>Hours and location:</strong> weekly hours, the shop's address and a tap-to-call phone number.</li>
        <li><strong>Booking form:</strong> clients share their name, contact details, tattoo style, placement and idea in one go, so Tim has everything needed before the first conversation.</li>
        <li><strong>Policies:</strong> a clear deposit policy and details on walk-ins and after-hours on-call appointments.</li>
      </ul>

      <h2>Budget-friendly by design</h2>
      <p>The site is a single, lightweight page of HTML, CSS and JavaScript hosted on Netlify. There's no site builder subscription or heavy framework, so it loads quickly, works on any phone and costs very little to keep online.</p>
    `,
  },
  {
    slug: "bleach-bitch",
    title: "Bleach B*tch: a budget-friendly landing page for a local cleaning business",
    excerpt: "A simple, affordable one-page site that helps a Northern Colorado cleaning and organizing business get found, get quote requests and get paid.",
    readTime: "2 min",
    category: "Client Project",
    tags: ["Website", "Small Business"],
    glyph: "Bleach B*tch",
    colors: ["#6b21a8", "#facc15"],
    image: "assets/bleachbitch/home.jpg",
    featured: true,
    stack: ["Carrd"],
    links: [{ label: "Visit bleachbitchnoco.com", url: "https://www.bleachbitchnoco.com" }],
    body: `
      <p>Not every business needs a custom web app. Anna Brinegar runs <strong>Bleach B*tch</strong>, a cleaning and organizing service in Northern Colorado, and she needed a simple, professional home online: somewhere clients could find her, trust her and request a quote, without a big upfront cost or monthly bills she didn't need.</p>

      <h2>The right tool for the budget</h2>
      <p>I built the site on Carrd, a lightweight site builder with very low running costs. Anna gets a fast, mobile-friendly page that's easy to keep up, and she can put her money and time into her business instead of her website.</p>
      <blockquote>The best website is the one that fits the business. Sometimes that's a custom app. Sometimes it's one well-made page.</blockquote>

      <h2>Everything a customer needs, on one page</h2>
      <ul>
        <li><strong>Services:</strong> deep cleaning, professional organizing, move-out cleans, streak-free window washing, and fall cleanup and gardening, plus her service area across Northern Colorado and the North Denver Metro.</li>
        <li><strong>Quote requests:</strong> a short contact form for name, phone, email and a message, so booking takes less than a minute.</li>
        <li><strong>Testimonials:</strong> reviews from happy clients to build trust with new ones.</li>
        <li><strong>Payments:</strong> a one-tap button that takes clients straight to Anna's Venmo after their service.</li>
      </ul>

      <h2>A brand with personality</h2>
      <p>The name is bold, so the design is too: a rich purple and gold palette, a playful script logo, and friendly, judgment-free copy that matches how Anna works with her clients.</p>

      <h2>Ongoing care after launch</h2>
      <p>The site didn't stop at launch. I continue to maintain it for Anna, adding new testimonials as happy clients send them in and making small updates whenever she asks, so her website keeps up with her business without her ever having to touch it herself.</p>
    `,
  },
  {
    slug: "tessera",
    pinned: 1,
    title: "Tessera: a mindful daily planner for a balanced life",
    excerpt: "My own product: a cross-platform planner app and marketing site that help people build balance across every area of life. Now in beta.",
    readTime: "4 min",
    category: "Product",
    tags: ["Mobile", "Web App", "UI/UX"],
    glyph: "Tessera",
    colors: ["#7c5cf6", "#ec4899"],
    image: "assets/tessera/cover.jpg",
    featured: true,
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Zustand", "NativeWind", "Next.js", "Vercel"],
    note: "Tessera is currently in beta on iOS and Android. The app's source code is private, but available to review upon request.",
    links: [
      { label: "Visit tesseraplanner.app", url: "https://www.tesseraplanner.app" },
      { label: "Marketing site source on GitHub", url: "https://github.com/kyrat42/tessera-landing" },
    ],
    body: `
      <p>Most people plan their lives across a dozen disconnected tools: a calendar for work, sticky notes for errands, alarms for reminders, and a paper planner that never talks to any of them. <strong>Tessera</strong> replaces all of it with one mindful daily planner built around a simple idea: your life isn't a list, it's a mosaic.</p>
      <p>A <em>tessera</em> is a single tile in a mosaic. In the app, each area of your life, such as work, health or family, becomes a tile, and Tessera helps you keep every tile in view so you can stay balanced. I designed and built the product end to end: the iOS and Android app, and the marketing site at <a href="https://www.tesseraplanner.app" target="_blank" rel="noopener">tesseraplanner.app</a>.</p>

      <h2>Planning that works with you</h2>
      <p>Most planners are built for perfect days. Tessera is built for real ones.</p>
      <ul>
        <li><strong>Routine without rigidity:</strong> a weekly template gives your days a consistent rhythm without locking you into a minute-by-minute schedule.</li>
        <li><strong>One area at a time:</strong> the tile structure lets you focus on one part of life at a time, reducing the mental load of constant context switching.</li>
        <li><strong>Priorities that flex:</strong> each tile has its own task list with priority levels, so you focus on what matters most right now.</li>
        <li><strong>Forgiving on the hard days:</strong> anything left unfinished quietly resurfaces the next morning, so a rough day never turns into a lost task.</li>
        <li><strong>Reminders when they matter:</strong> add a reminder to anything you don't want to forget, and Tessera nudges you at the right moment.</li>
      </ul>

      <h2>Pick your tiles, set your rhythm</h2>
      <p>Getting started takes three steps: choose the areas of life that make up your mosaic, build a weekly template that carves out time for each one, and the planner fills in every day automatically.</p>
      <figure class="shot">
        <div class="shot-row">
          <img src="assets/tessera/areas-of-life.jpg" alt="Areas of Life screen listing Work, Health, Social, Family, Fun and Household, each with its own color" width="480" height="1081" loading="lazy">
          <img src="assets/tessera/weekly-template.jpg" alt="Weekly Template screen showing color-coded time blocks for each day of the week" width="480" height="1069" loading="lazy">
        </div>
        <figcaption>Choose your areas of life, then design an ideal week of color-coded time blocks.</figcaption>
      </figure>

      <h2>A clear plan every morning</h2>
      <p>Each day opens with a plan built from your template. Tasks live inside the tile they belong to, so you always know what to work on during each block of time. Priority levels are fully customizable, with ready-made templates like the Eisenhower Matrix, the ABC Method and Now / Next / Later.</p>
      <figure class="shot">
        <div class="shot-row">
          <img src="assets/tessera/planner-day.jpg" alt="Daily planner showing Health, Household and Family tiles with their tasks" width="480" height="1069" loading="lazy">
          <img src="assets/tessera/priority-levels.jpg" alt="Priority Levels screen with Eisenhower Matrix levels and template options" width="480" height="1069" loading="lazy">
        </div>
        <figcaption>The daily planner, and customizable priority levels within each tile.</figcaption>
      </figure>

      <h2>See where your time goes</h2>
      <p>Tessera tracks how many hours each week go to each area of life, so you can spot imbalances and adjust before burnout sets in.</p>
      <figure class="shot square">
        <img src="assets/tessera/weekly-hours.jpg" alt="Weekly hours by area chart showing time spent on work, health, social, family, fun and household" width="600" height="641" loading="lazy">
        <figcaption>Weekly hours by area of life.</figcaption>
      </figure>

      <h2>Built to production standards</h2>
      <p>Tessera is a cross-platform app built with React Native, Expo and TypeScript, with Supabase for authentication and data, Zustand for state and NativeWind for styling. Because it's a product people rely on every day, the codebase is held to a high bar:</p>
      <ul>
        <li><strong>Automated testing</strong> with Jest, covering core planning logic, schemas and data handling.</li>
        <li><strong>Continuous integration</strong> with GitHub Actions running type checks, linting, tests and Semgrep security scans on every push.</li>
        <li><strong>Strict TypeScript</strong> and form validation with Zod, so bad data never makes it into the app.</li>
      </ul>
      <p>The marketing site is built with Next.js and deployed on Vercel, with a beta sign-up flow that lets people choose their device and join.</p>

      <h2>What beta testers are saying</h2>
      <blockquote>"Instead of relying on scattered notes, calendar reminders, and to-do lists, I have a more structured way to keep track of my priorities and responsibilities."<br><small style="font-size:14px;color:var(--muted)">Tessera beta tester</small></blockquote>
    `,
  },
  {
    slug: "ashland-valley-soccer-league",
    title: "Ashland Valley Soccer League: a full-stack site built from scratch",
    excerpt: "My capstone project for a Full-Stack Web Development certification: a responsive, interactive league website with a PHP and MySQL back end.",
    readTime: "2 min",
    category: "Capstone Project",
    tags: ["Web App", "PHP", "MySQL", "UI/UX"],
    glyph: "AVSL",
    colors: ["#16a34a", "#0ea5e9"],
    featured: true,
    stack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    note: "This site is not live. Watch the demo video above, or browse the source code on GitHub.",
    links: [{ label: "View source on GitHub", url: "https://github.com/kyrat42/full_stack_dev_final" }],
    body: `
      <p>For the final project of my Full-Stack Web Development certification at Aims Community College, I built a complete website for the <strong>Ashland Valley Soccer League</strong>, a fictional community league. The goal was to bring together everything from the program: responsive layouts, interactive front-end design, and a PHP back end that reads from and writes to a MySQL database. No site builders or templates, just hand-written code.</p>

      <div class="video-embed">
        <iframe src="https://www.loom.com/embed/35df7e0846454e5185cfc3de9a55f70b" title="Ashland Valley Soccer League demo" allow="fullscreen" allowfullscreen></iframe>
      </div>

      <h2>Responsive from the start</h2>
      <p>Every page adapts from a wide desktop screen down to a phone. Navigation lives in a sidebar that collapses into a menu button on small screens, and a sticky header keeps it within reach while visitors scroll.</p>

      <h2>Interactive, modern design</h2>
      <p>A bold hero section welcomes visitors, and hover effects throughout the site, from navigation to the contact cards, make it feel responsive to every move of the mouse.</p>

      <h2>Pages built for a real league</h2>
      <ul>
        <li><strong>Home:</strong> a welcome to the league and what it offers players and families.</li>
        <li><strong>Fields:</strong> a map of the whole complex plus individual field maps, so everyone knows where to go on game day.</li>
        <li><strong>Photos:</strong> a photo gallery with a full-screen viewer and next and previous controls.</li>
        <li><strong>Contact:</strong> email, phone and location cards with interactive hover states.</li>
      </ul>

      <h2>A PHP and MySQL back end</h2>
      <p>Pages are assembled with PHP, with shared pieces like the navigation written once, included on every page, and automatically highlighting the page you're on. The site reads from and writes to a MySQL database, connecting the front end to real, persistent data.</p>
      <blockquote>Front end, back end and database, built by hand from the ground up.</blockquote>
    `,
  },
  {
    slug: "belongin",
    title: "BelongIn: making a pre-responsive Bubble app beautiful on every screen",
    excerpt: "Bringing an existing social app up to date with responsive layouts and polished Figma designs, delivered on a tight deadline.",
    readTime: "2 min",
    category: "Client Project",
    tags: ["Web App", "UI/UX", "No-code"],
    glyph: "BelongIn",
    colors: ["#f43f5e", "#8b5cf6"],
    featured: true,
    stack: ["Bubble", "Bubble responsive engine", "Figma"],
    note: "This app is not available to the public. Watch the demo video above for a walkthrough.",
    body: `
      <p><strong>BelongIn</strong> helps people find their people: discover local activities and events, join them, and connect with others who share their interests. The app had been built in Bubble before Bubble released its responsive engine, so its pages didn't adapt well to different screen sizes. I was hired to make it beautiful and fully responsive, working from the existing app and the team's Figma designs.</p>

      <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/YleTcTZ2Uzw" title="BelongIn demo" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h2>The challenge: an app built before responsive design</h2>
      <p>Apps built in Bubble's older editor used fixed layouts, so pages that looked right on one screen could overflow, squeeze or break on another. For a social app that most people will open on their phones, that was a serious problem.</p>

      <h2>Rebuilding layouts to fit any screen</h2>
      <p>I reworked the app's pages with Bubble's responsive engine so content reflows naturally from a wide desktop window down to a phone. Event pages, navigation and calls to action stay clear and easy to tap at every size.</p>
      <figure class="shot phone">
        <img src="assets/belongin/mobile-event.jpg" alt="BelongIn event page on a phone, showing the event date, location, attendee count and a Join Event button" width="512" height="1039" loading="lazy">
        <figcaption>An event page on mobile, with the date, location, attendee count and a clear Join Event button.</figcaption>
      </figure>

      <h2>Bringing the Figma designs to life</h2>
      <p>The team's Figma designs set the direction. I matched their typography, colors, spacing and components so the finished app looks the way the designers intended on every device.</p>

      <h2>Delivered on a tight deadline</h2>
      <p>The timeline was tight, so I worked within the existing app's logic and data rather than starting over. The result was a polished, responsive app, delivered on schedule.</p>

      <h2>What the client said</h2>
      <blockquote>“Kyra stepped in to seamlessly keep the project afloat. She is an excellent communicator, grasps complex issues quickly... By the end of the project, we were asking her to explain some Bubble engineering tricks to us that we were unaware of.”<br><small style="font-size:14px;color:var(--muted)">Denise S., UNC Chapel Hill</small></blockquote>
      <p><a href="testimonials.html">Read the full testimonial</a></p>
    `,
  },
  {
    slug: "mood-sprout",
    title: "Mood Sprout: a journaling app where your feelings grow a garden",
    excerpt: "A gamified mental wellness app that turns mood check-ins into a living garden, with an AI companion that gets to know you over time.",
    readTime: "3 min",
    category: "Case Study",
    tags: ["Web App", "AI", "Wellness"],
    glyph: "Mood Sprout",
    colors: ["#059669", "#84cc16"],
    image: "assets/moodsprout/garden.webp",
    featured: true,
    stack: ["Bubble", "OpenAI Assistants API"],
    note: "This app is private and not available to the public. Watch the demo video above for a walkthrough.",
    body: `
      <p>Mood tracking apps often feel clinical, which makes them easy to abandon. <strong>Mood Sprout</strong> takes a gentler approach: it combines journaling with a garden you grow over time, so checking in on your feelings feels less like homework and more like tending something you care about.</p>

      <div class="video-embed">
        <iframe src="https://www.loom.com/embed/30bba6d09f4344edbd57223a67740f5c" title="Mood Sprout demo" allow="fullscreen" allowfullscreen></iframe>
      </div>

      <h2>Your garden is your emotional journey</h2>
      <p>Every check-in plants a seed. The garden becomes a visual record of how you've been feeling, with each plant representing a past check-in. Tap any plant to see the emotion, the trigger and the journal entry behind it, which makes looking back feel meaningful instead of like scrolling through a log.</p>

      <h2>Check-ins with a personal prompt</h2>
      <p>A check-in starts simply: choose how you're feeling and, if you want, tag what triggered it. Mood Sprout then uses AI to write a <strong>personalized journaling prompt</strong> that helps you reflect more deeply, whether the feeling is burnout, sadness, or something positive like gratitude or excitement.</p>
      <figure class="shot">
        <img src="assets/moodsprout/reflection.jpg" alt="A reflection showing the mood, trigger, AI journaling prompt, the user's entry and AI-recommended activities" width="1743" height="1203" loading="lazy">
        <figcaption>A completed check-in: the AI prompt, the user's reflection, and personalized activities suggested by the assistant.</figcaption>
      </figure>

      <h2>Tending your plants builds healthy habits</h2>
      <p>Plants grow when you take care of yourself. Completing follow-up journal prompts or recommended actions, such as going outside, setting a boundary or reaching out to a friend, waters the plant and moves it through its growth stages, from sprout to leaves to full bloom.</p>
      <figure class="shot">
        <img src="assets/moodsprout/plant-care.jpg" alt="A growing plant with options to water it with a journal entry or give it sun with a recommended action" width="1801" height="515" loading="lazy">
        <figcaption>Water a plant with a follow-up journal entry, or give it sun by completing a recommended action.</figcaption>
      </figure>
      <blockquote>Mental wellness that feels less clinical and more like self-tending.</blockquote>

      <h2>An AI companion that learns your patterns</h2>
      <p>Behind the scenes, Mood Sprout uses the <strong>OpenAI Assistants API</strong>, which keeps a persistent conversation thread for each user. That lets the app get to know someone over time: it generates prompts, tracks patterns and offers insights that build on past check-ins. For example, if someone often feels tired after social events, the assistant might gently suggest ways to recharge before the next one.</p>

      <h2>Designed to feel encouraging</h2>
      <p>Everything about the experience, from the garden visuals to the tone of the prompts, is designed to be calming, supportive and rewarding, so users want to come back and keep their garden growing.</p>
    `,
  },
  {
    slug: "calcpi-clinical-companion",
    title: "CalCPI Clinical Companion: less paperwork for group home clinicians",
    excerpt: "A calm, AI-assisted workspace that helps clinicians serving California group homes complete required forms, generate compliant summaries and export everything as PDFs.",
    readTime: "3 min",
    category: "Case Study",
    tags: ["Web App", "AI", "Healthcare"],
    glyph: "Companion",
    colors: ["#0ea5e9", "#8b5cf6"],
    image: "assets/companion/service-notes.webp",
    featured: true,
    stack: ["Bubble", "OpenAI API"],
    note: "This app is private and not available to the public. Watch the demo video above for a walkthrough.",
    body: `
      <p>Clinicians who serve group homes in California spend a huge part of their week on paperwork. Every client needs a stack of state-required forms, plus summaries that pull all of that information together. The <strong>CalCPI Clinical Companion</strong> gives them one calm place to get it done, and uses AI to take on the most time-consuming writing.</p>

      <div class="video-embed">
        <iframe src="https://www.loom.com/embed/503a3e3954644ae9b39da718319ef30e" title="CalCPI Clinical Companion demo" allow="fullscreen" allowfullscreen></iframe>
      </div>

      <h2>A calmer way to do paperwork</h2>
      <p>Each client gets their own set of onboarding forms. Clinicians work through them in a clean, calming interface designed to lighten documentation-heavy days, then download any completed form as a PDF, ready to upload into their records system.</p>
      <figure class="shot">
        <img src="assets/companion/client-list.webp" alt="Client list showing each client's house, ID, diagnoses and safety plan status" width="2000" height="891" loading="lazy">
        <figcaption>The client list, with house, diagnoses and safety plan status at a glance.</figcaption>
      </figure>

      <h2>AI summaries built from every form</h2>
      <p>The biggest time sink is the <strong>CalAIM assessment</strong>, a California-required summary that explains why a client is in placement and what treatment they need, across several domains. Instead of writing it from scratch, clinicians generate it with one click. The app sends the information from the client's completed forms to the OpenAI API, which drafts the full assessment. The clinician then reviews it, edits anything that needs a human touch, and downloads the final PDF.</p>
      <blockquote>AI writes the first draft. The clinician always has the final word.</blockquote>
      <ul>
        <li><strong>Saves hours</strong> on documentation clinicians already have too much of.</li>
        <li><strong>More consistent summaries</strong> that include the required components, written appropriately.</li>
        <li><strong>Clinicians stay in control</strong>, with every AI draft fully editable before export.</li>
      </ul>

      <h2>Service notes</h2>
      <p>Beyond onboarding, clinicians can write service notes for each client, including individual and group therapy notes, daily notes, significant events, monthly reports and 90-day clinical reviews. AI-generated summaries cut down the time spent on routine documentation, and every note is filterable by type.</p>

      <h2>Privacy by design</h2>
      <p>Bubble is not a HIPAA-compliant platform, so the app was designed around that limit from day one. Clients are identified by initials only, and finished documents are exported as PDFs into the clinic's own HIPAA-compliant software. Clinicians get the speed of a modern tool without moving identifying client information somewhere it shouldn't be.</p>
      <figure class="shot">
        <img src="assets/companion/client-profile.webp" alt="Client profile that stores only first and last initials" width="2000" height="1006" loading="lazy">
        <figcaption>Client profiles are built around first and last initials instead of full names.</figcaption>
      </figure>
    `,
  },
  {
    slug: "calcpi-supervision-tool",
    title: "CalCPI Supervision Tool: AI case vignettes for clinical psychology training",
    excerpt: "A practice tool that helps clinical psychology PhD students earn their required supervision sessions with realistic, AI-generated case vignettes.",
    readTime: "3 min",
    category: "Case Study",
    tags: ["Web App", "AI", "Education", "Healthcare"],
    glyph: "CalCPI",
    colors: ["#0d9488", "#6366f1"],
    image: "assets/calcpi/vignette-generator.webp",
    featured: true,
    stack: ["Bubble", "OpenAI API"],
    note: "This app is private and not available to the public. Watch the demo video above for a walkthrough.",
    body: `
      <p>Clinical psychology PhD students have to complete a required number of supervised sessions with an experienced psychologist. The catch: there often aren't enough real clients for them to practice on, so meeting that requirement can be a struggle. I built the <strong>CalCPI Supervision Tool</strong> to close that gap.</p>

      <div class="video-embed">
        <iframe src="https://www.loom.com/embed/0513392a513d42e2ba6a21ba6d1f7c43" title="CalCPI Supervision Tool demo" allow="fullscreen" allowfullscreen></iframe>
      </div>

      <h2>How it works</h2>
      <p>A student and a supervisor sit down together. The app generates a realistic case, the student walks through their impressions and how they would approach it, and the supervisor logs the conversation as an official supervision session, completing the standard rating forms along the way.</p>

      <h2>AI-generated case vignettes</h2>
      <p>This is the heart of the app. The supervisor chooses the parameters, such as disorders, diagnoses and cultural factors, while the student looks away so the case stays a genuine test. Those choices go to the OpenAI API, which returns a complete case with background information, presenting problems and cultural context.</p>
      <blockquote>Every session gets a fresh, realistic case, so students never run out of practice material.</blockquote>

      <h2>Practicing case formulation</h2>
      <p>Once the vignette is ready, students write their own case formulation. They can then compare it with AI-generated example formulations written in different styles, which gives them a reference point for their own thinking.</p>

      <h2>Built-in clinical skill guides</h2>
      <p>Alongside the vignettes, a <strong>Core Competencies</strong> section gives students step-by-step practice guides for skills like risk assessment and ethics. The risk assessment guide walks through warning signs to watch for, the questions to ask, and what to do next based on how the client answers.</p>
      <figure class="shot">
        <img src="assets/calcpi/risk-assessment.webp" alt="Risk Assessment Practice screen with warning signs and branching next steps" width="2000" height="966" loading="lazy">
        <figcaption>The Risk Assessment Practice guide, with branching next steps based on the client's answers.</figcaption>
      </figure>

      <h2>Supervisor sign-off with a PIN</h2>
      <p>When the session is finished, the supervisor approves it by entering a personal PIN right on the student's screen. Only then is it logged as a supervision session, which keeps the record trustworthy without adding paperwork.</p>

      <h2>A dashboard that shows growth</h2>
      <ul>
        <li><strong>Progress</strong> toward the required number of supervision sessions.</li>
        <li><strong>Score breakdowns</strong> across rating categories, tracked over time.</li>
        <li><strong>Supervisor notes</strong> on what the student is doing well and where to improve.</li>
      </ul>
    `,
  },
  /* Template (copy, uncomment and fill in):
  {
    slug: "my-project",              // URL id: portfolio.html#my-project
    title: "Project title",
    excerpt: "One or two sentences shown on the card.",
    readTime: "4 min",
    category: "Case Study",          // label on the cover
    tags: ["Web App", "Node.js"],
    glyph: "Proj",                   // big text on the generated cover
    image: "assets/proj/cover.webp", // optional screenshot cover (replaces glyph)
    colors: ["#7c3aed", "#db2777"],  // cover gradient
    featured: true,                  // show on the home page
    stack: ["Node.js", "PostgreSQL"],
    links: [{ label: "View source", url: "https://github.com/..." }], // optional buttons
    note: "Optional line shown under Built with.",
    body: `<p>Write the post here as HTML.</p>`,
  },
  */
];

/* Topic filters shown on the portfolio page (must match post tags). */
const POST_FILTERS = ["All", "Web App", "Mobile", "Website", "AI", "Healthcare"];

/* ---------- Shared helpers ---------- */
// Pinned posts first (pinned: 1, 2, ...), then everything else in list order.
const sortedPosts = () => [
  ...POSTS.filter((p) => p.pinned).sort((a, b) => a.pinned - b.pinned),
  ...POSTS.filter((p) => !p.pinned),
];

const coverHTML = (p, label = true) => `
  <div class="cover" style="--c1:${p.colors[0]};--c2:${p.colors[1]}" aria-hidden="true">
    ${label ? `<span class="cover-label">${p.category}</span>` : ""}
    ${p.image ? `<img class="cover-img" src="${p.image}" alt="">` : `<span class="glyph">${p.glyph}</span>`}
  </div>`;

const postCardHTML = (p, i = 0, base = "") => `
  <a class="card spot post-card reveal" style="--d:${(i % 3) * 0.08}s" href="${base}#${p.slug}">
    ${coverHTML(p)}
    <div class="body">
      <div class="post-meta"><span>${p.category}</span><span>·</span><span>${p.readTime} read</span></div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  </a>`;
