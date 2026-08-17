/**
 * Single source of truth for all portfolio content.
 * Update copy here — never in layout components.
 */

export const profile = {
  name: "Asghar Khan",
  tagline: "Master of Medical Sciences Candidate, Western University",
  location: "London, Ontario",
  shortBio:
    "Clinical ethics, patient support, and health services research — at Western's Schulich School of Medicine & Dentistry.",
  bio: "Asghar Khan is a Master of Medical Sciences candidate at Western University's Schulich School of Medicine & Dentistry, following an Honours Specialization in Health Sciences (final two-year GPA of 3.97/4.0) and the 2026 recipient of the BHSc Award of Recognition. His work sits at the intersection of clinical ethics, patient support, and health services research — spanning a clinical ethics practicum at the Western Centre for Bioethics and London Health Sciences Centre, a research assistantship in the Down Syndrome Clinic at The Hospital for Sick Children, and applied AI research in geriatric medicine. He is also the founder and president of the Western Undergraduate Research Students' Association (URSA), which he grew into a 2,000+ member research community in its first year.",
  email: "akha228@uwo.ca",
  linkedin: "https://www.linkedin.com/in/asghark/",
  headshot: "/images/profile/headshot.jpg",
};

export const education = [
  {
    degree: "MSc, Master of Medical Sciences (Candidate)",
    school: "Western University, Schulich School of Medicine & Dentistry",
    dates: "May 2026 – May 2027",
    note: "",
  },
  {
    degree: "BHSc, Honours Specialization in Health Sciences",
    school: "University of Western Ontario",
    dates: "Sep 2022 – Apr 2026",
    note: "Final two-year GPA: 3.97/4.0 · 2026 BHSc Award of Recognition",
  },
];

export type Role = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  year: string;
  description: string;
};

export const employment: Role[] = [
  {
    title: "Patient Support — Clinical Ethics Practicum",
    org: "London Health Sciences Centre & Western Centre for Bioethics",
    location: "London, ON",
    dates: "Dec 2025 – Apr 2026",
    year: "2025–26",
    description:
      "Coordinated hospital-based ethics consultations across multiple units, managing case discussions and supporting real-time clinical decision-making involving patient care, discharge planning, and LTC/Rehab decision-making.",
  },
  {
    title: "Founder & President",
    org: "Western Undergraduate Research Students' Association",
    location: "London, ON",
    dates: "Oct 2025 – Apr 2026",
    year: "2025–26",
    description:
      "Coordinated operations, planning, scheduling, and communications across a 30+ member team, managing event logistics and ensuring efficient program delivery for a student community of over 2,000 students.",
  },
  {
    title: "Summer Research Student (SSuRe), Division of Paediatric Medicine",
    org: "The Hospital for Sick Children (SickKids)",
    location: "Toronto, ON",
    dates: "May 2025 – Aug 2025",
    year: "2025",
    description:
      "Worked within the Down Syndrome Clinic to support families following a new diagnosis through patient support initiatives, and evaluated and improved patient education and resource materials, increasing understandability by 55% and actionability by 40%. Participated in outpatient clinics and collaborated with physicians and staff.",
  },
  {
    title: "Patient/Customer Support Clerk",
    org: "Macomb Pain Management Clinic",
    location: "Shelby Township, MI",
    dates: "May 2024 – Aug 2024",
    year: "2024",
    description:
      "Managed patient intake workflows in a high-volume clinic. Supported consultations and procedural preparation, and facilitated patient communication, including with high-profile patients and professional athletes.",
  },
  {
    title: "Research Trainee",
    org: "Temerty Centre for AI Research and Education in Medicine (T-CAIREM), University of Toronto",
    location: "Toronto, ON",
    dates: "May 2023 – Nov 2025",
    year: "2023–25",
    description:
      "Contributed to a scoping review on applied AI in geriatric medicine, engaging with researchers, clinicians, and industry across the T-CAIREM community at the University of Toronto.",
  },
  {
    title: "Research Assistant",
    org: "North York General Hospital",
    location: "Toronto, ON",
    dates: "May 2023 – Aug 2025",
    year: "2023–25",
    description:
      "Conducted a comprehensive scoping review on the application and risks of artificial intelligence in the care of older adults. Collaborated with the Provincial Geriatrics Leadership of Ontario, and with NYGH and University of Toronto librarians, on the review, and engaged with healthcare startups to inform their strategic decisions using insights from the review.",
  },
  {
    title: "Marketing Specialist",
    org: "KDIT Solutions Inc.",
    location: "Alberta, Canada (Remote)",
    dates: "Jun 2023 – Sep 2023",
    year: "2023",
    description:
      "Spearheaded digital marketing initiatives, including website optimization and landing page creation for IBM Maximo software, enhancing online visibility, user engagement, and client acquisition.",
  },
  {
    title: "Retail Sales Representative",
    org: "uBreakiFix",
    location: "Ontario, Canada",
    dates: "Sep 2022 – Jan 2023",
    year: "2022–23",
    description: "Customer-facing sales and service role in a device repair retail environment.",
  },
  {
    title: "Junior Developer Assistant",
    org: "FAHM Technology Partners",
    location: "Richmond Hill, ON (Hybrid)",
    dates: "Jun 2022 – Aug 2022",
    year: "2022",
    description: "Supported development work as an early technical role prior to university.",
  },
];

export const practicum = {
  title: "Undergraduate Practicum, Western Centre for Bioethics",
  dates: "Winter 2026",
  badge: "First Undergraduate Practicum Student at the Centre",
  body: "Hospital-based ethics work in partnership with London Health Sciences Centre: clinical ethics discussions on patient autonomy, capacity, consent, and institutional decision-making across long-term care, adult mental health, and child/adolescent mental health units — alongside a research component exploring the ethics of healthcare delivery in space environments, informed by Western's Institute for Earth & Space Exploration and the Canadian Space Agency.",
  link: "https://bioethics.uwo.ca/initiatives/practicum.html",
  linkLabel: "Official practicum profile — bioethics.uwo.ca",
  reflection:
    "One of my biggest takeaways is that ethics in healthcare is not merely abstract or theoretical. It is constant, dynamic, and embedded in everyday clinical decisions.",
};

export const ursa = {
  title: "Founder & President",
  org: "Western Undergraduate Research Students' Association (URSA)",
  website: "https://www.westernursa.ca/",
  instagram: "https://www.instagram.com/westernursa/",
  narrative: [
    "I founded the Western Undergraduate Research Students' Association because I saw a gap. A lot of students were interested in research, but didn't know where to start, who to reach out to, or how to actually get involved.",
    "We built a team of 30+ executives, received 90+ applications in our first recruitment cycle, and grew a community of over 2,000 students across disciplines and faculties.",
    "Our Discovering Research & Networking Symposium was a big moment. We also hosted an Indigenous Health & Research Talking Circle, which was one of the most meaningful experiences for me personally.",
  ],
  thanks:
    "Special shoutout to my Vice Presidents — Anita Severin, Sofia Tomassini, Fiona Zhou, Lily Carson, Jenna Pavlovic, Porousha Shokoofeh, Jibraan Dhirani, and Ali Ajwani — and all the directors.",
  stats: [
    { value: "2,000+", label: "student community" },
    { value: "30+", label: "executive team" },
    { value: "90+", label: "first-cycle applications" },
  ],
  images: [
    {
      src: "/images/leadership/ursa-symposium-banner.jpg",
      alt: "Asghar Khan next to the URSA banner at the Research & Innovation Symposium",
    },
    {
      src: "/images/leadership/ursa-symposium-audience.jpg",
      alt: "Audience at the URSA Research & Innovation Symposium",
    },
  ],
};

export const leadershipRoles = [
  { title: "Executive Director", org: "Western Student Research Conference" },
  { title: "Executive Director", org: "Health Occupations Students of America (HOSA)" },
  { title: "Director, Events", org: "Dan Management Students' Association" },
  { title: "Vice President", org: "Thaqalayn Muslim Association (TMA) at Western" },
  { title: "Vice President", org: "Butterfly Effect UWO" },
  {
    title: "Team Captain",
    org: "Intramural Ball Hockey & Basketball — 4+ seasons, multiple championships",
  },
];

export const volunteering = [
  {
    title: "Client Support Volunteer",
    org: "Southwest Ontario Aboriginal Health Access Centre (SOAHAC)",
    location: "London, ON",
    dates: "Sep 2025 – Present",
    year: "2025–",
    description:
      "Direct client support: check-in, resource preparation and distribution, and coordinating weekly nutritious food boxes for 100+ families. This is also the site of the community immersion behind my Independent Study thesis.",
    crossLink: { label: "See the Independent Study thesis", to: "/research" },
  },
  {
    title: "Ortho Inpatient Clinic Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "Aug 2025 – Present",
    year: "2025–",
    description: "Patient navigation and clinic flow support in the orthopaedic inpatient unit.",
  },
  {
    title: "Palliative Care Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "Jul 2025 – Aug 2025",
    year: "2025",
    description: "Patient support in palliative care through regular visits.",
  },
  {
    title: "Lab Test Student Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "Jun 2025 – Jul 2025",
    year: "2025",
    description: "Supported lab testing unit workflow and patient flow.",
  },
  {
    title: "Ortho Outpatient Student Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "May 2025 – Jun 2025",
    year: "2025",
    description: "Patient navigation and clinic flow support in orthopaedic outpatient units.",
  },
];

export const otherVolunteering = [
  "Volunteer Notetaker — Accessibility Services, Western University (Feb–Apr 2025): took notes for students with accommodations in Dr. Jacob Shelley's Health Law 3101A course",
  "Fundraising Volunteer — Vaughan Food Bank (Sep 2018–Present, 8+ yrs): biweekly food package delivery and distribution for low-income families",
  "Fundraising Volunteer — The Corsage Project, in partnership with Children's Aid Foundation of Canada (Feb–Mar 2020): spoke to YRDSB students and staff and helped raise funds and scholarships for young women in financial difficulty",
  "Youth Volunteer — Jaffari Community Centre",
  "Volunteer — Babul Hawaij Relief Foundation",
];

export type Project = {
  title: string;
  org: string;
  year: string;
  summary: string;
  details?: string[];
  links?: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
};

export const research: Project[] = [
  {
    title:
      "Applying a QI Framework to Improve Developmental Service Navigation in Down Syndrome Care",
    org: "The Hospital for Sick Children (SickKids)",
    year: "2025",
    summary:
      "Quality-improvement study within the Down Syndrome Clinic, evaluating and redesigning patient education and navigation resources for families after a new diagnosis.",
    details: [
      "Conference abstract and poster presented at the SSuRe Summer Research Symposium.",
      "Improved resource understandability by 55% and actionability by 40%.",
    ],
    images: [
      {
        src: "/images/research/sickkids-poster-photo.jpg",
        alt: "Asghar Khan presenting the SickKids Down Syndrome QI poster at the SSuRe Summer Research Symposium",
      },
      {
        src: "/images/research/sickkids-poster-detail.jpg",
        alt: "Full detail of the SickKids Down Syndrome QI research poster",
      },
    ],
  },
  {
    title:
      "Practical Applications of Artificial Intelligence in Geriatric Medicine: A Scoping Review",
    org: "North York General Hospital",
    year: "2025",
    summary:
      "Scoping review of applied AI in geriatric care, completed alongside the AI research assistantship at North York General Hospital.",
    details: [
      "Presented at WUHRC 2025, and as an oral talk plus poster at T-CAIREM (Temerty Centre for AI Research and Education in Medicine, University of Toronto) 2025.",
      "Co-presented with Sai-Amrit Maharaj, MHSc, CSPHP, B.Sc(hon).",
      "Supervised and mentored by Dr. Nihal Haque, MD FRCPC (Geriatrician, North York General Hospital) and Dr. Kelly Kay (Executive Director, Provincial Geriatrics Leadership Ontario).",
    ],
    images: [
      {
        src: "/images/research/wuhrc-poster-photo.jpg",
        alt: "Asghar Khan at his AI in Geriatric Medicine poster at WUHRC 2025",
      },
      {
        src: "/images/research/wuhrc-presenting.jpg",
        alt: "Asghar Khan discussing his poster with attendees at WUHRC 2025",
      },
      {
        src: "/images/research/tcairem-poster-photo.jpg",
        alt: "Asghar Khan at his poster at the T-CAIREM 2025 conference",
      },
      {
        src: "/images/research/tcairem-badge.jpg",
        alt: "T-CAIREM 2025 conference badge and program",
      },
      {
        src: "/images/research/ai-geriatrics-poster-detail.jpg",
        alt: "Full detail of the AI in Geriatric Medicine scoping review poster",
      },
    ],
  },
  {
    title: "AI-Powered Wearable Sensors for Fall Detection in Older Adults",
    org: "STEM Fellowship — National Inter-University Health Data and AI Inquiry Program, University of Toronto",
    year: "2025",
    summary:
      "A systematic review examining the reliability of AI-enabled wearable technologies for detecting falls in older adults — sensor types, algorithms, and validation methods across the literature, identifying strengths, limitations, and opportunities for innovation.",
    details: [
      "Presented as an oral talk at the 2025 National Inter-University Health Data and AI Inquiry Program (Hart House, University of Toronto), hosted by STEM Fellowship.",
      "Team: Jenna Pavlovic, Ameera Khwaja, Maria Tassopoulos, Emma Massaro, and Asghar Khan.",
    ],
    images: [
      {
        src: "/images/research/stem-fellowship-presenting.jpg",
        alt: "Asghar Khan presenting the AI fall-detection wearables review at Hart House, University of Toronto",
      },
      {
        src: "/images/research/stem-fellowship-venue.jpg",
        alt: "Asghar Khan presenting at the podium at Hart House for the STEM Fellowship program",
      },
      {
        src: "/images/research/stem-fellowship-team.jpg",
        alt: "The AI fall-detection wearables review team at the University of Toronto",
      },
    ],
  },
  {
    title: "Space Medicine Scoping Review",
    org: "Western Centre for Bioethics",
    year: "2026",
    summary:
      "Healthcare delivery and ethical responsibility in space environments, informed by Western's Institute for Earth & Space Exploration and the Canadian Space Agency. Completed as the research component of the bioethics practicum.",
    links: [
      { label: "Practicum profile", href: "https://bioethics.uwo.ca/initiatives/practicum.html" },
    ],
  },
];

export const thesis = {
  title:
    "Informed Consent & Decision-Making for Indigenous Peoples Living with Disabilities in Canada — A Scoping Review",
  subtitle: "Independent Study / 4th-year thesis",
  supervisor: "Supervised by Dr. Jacob Shelley, Faculty of Health Sciences, Western University",
  presented: "Presented December 2025",
  landAcknowledgement:
    "Presented on the traditional lands of the Anishinaabe, Haudenosaunee, and Lūnaapéewak peoples — including the Chippewas of the Thames First Nation, the Oneida Nation of the Thames, and the Munsee-Delaware Nation — with respectful acknowledgement of Walpole Island First Nation (Bkejwanong Territory) for welcoming participation in traditional food and hunting practices.",
  overview:
    "A scoping review examining consent as a structural barrier at the intersection of disability and Indigeneity in Canada. It maps existing literature, identifies legal, ethical, and policy frameworks, examines Indigenous perspectives on health, healing, and relational care, and highlights systemic gaps — including family burden in navigating services and transition gaps between childhood and adult care systems.",
  objectives: [
    "Map the existing literature.",
    "Identify legal, ethical, and policy frameworks.",
    "Examine Indigenous perspectives on health, healing, and relational care.",
    "Highlight systemic gaps, including service navigation and childhood-to-adult transitions.",
  ],
  community:
    "Rooted in ongoing volunteering with SOAHAC's Indigenous Food Sovereignty Program, informed by conversations with SOAHAC's team, plus insight from SickKids' ABILITY Program and Developmental Services Ontario.",
  acknowledgements: [
    "Dr. Jacob Shelley (supervisor)",
    "SOAHAC's Indigenous Food Sovereignty Program Coordinator, Indigenous Dietitian, Indigenous Chef, Developmental Services Worker, and Social Worker",
    "Liz Wemigwans, Traditional Healer",
    "Western Libraries (search strategy support)",
  ],
  whyICare:
    "This research started from personal experience, not just academic interest. Watching a family member navigate the healthcare system while in hospital made it clear that barriers to care are rarely just medical — they're rooted in language, culture, power, and assumptions about whose needs are treated as straightforward and whose aren't. Being present for that, and seeing how much depended on who happened to be advocating in the room, became the foundation for my interest in disability, consent, and advocacy-focused research.",
};

export const awards = [
  {
    title: "BHSc Award of Recognition",
    year: "2026",
    note: "Awarded annually to one BHSc student for academic achievement, leadership, character, and community commitment.",
    image: "/images/awards/bhsc-award-diploma.jpg",
  },
  { title: "Western Scholarship of Distinction", year: "2022", note: "$3,500" },
  { title: "Health Innovation Award", year: "", note: "" },
  { title: "Dean's Honour List", year: "", note: "" },
  {
    title: "Top Student Recognition — Physics I & II",
    year: "",
    note: "99% (Physics I) and 103% (Physics II)",
  },
  { title: "Department of Physics/Astronomy In-Course Distinction", year: "", note: "" },
  { title: "Youth Excellence Award", year: "", note: "" },
];

export const hobbies = [
  {
    title: "Ball hockey & basketball",
    body: "Team captain across 4+ intramural seasons, with multiple championships.",
  },
  {
    title: "Hunting",
    body: "Time outdoors and traditional food and hunting practices, including with Walpole Island First Nation (Bkejwanong Territory).",
    image: "/images/hobbies/hunting.jpg",
  },
];

export const ventures = {
  garden: [
    {
      title: "Investing",
      status: "Active",
      body: "An ongoing interest in markets and early-stage healthcare ideas. Details kept intentionally brief.",
    },
  ],
  graveyard: [
    {
      title: "Luxe Detailing",
      logo: "/images/ventures/luxe-logo.jpg",
      dates: "Grade 12 – 2nd year of university",
      epitaph: "Rest in soap suds. A few hundred cars later, homework won.",
      body: "A mobile auto detailing business — interior, exterior, and ceramic coating. Detailed a couple hundred cars over the run before shutting it down once it became too time-consuming to keep up with alongside school.",
    },
    {
      title: "Safety Stuff Plus",
      logo: "/images/ventures/safety-stuff-plus-logo.jpg",
      dates: "Spring 2020 (high school)",
      epitaph: "Flattened the curve, then flattened itself.",
      body: "Launched at the very start of COVID-19 to supply businesses with PPE in wholesale quantities — face shields, masks, gloves, sneeze guards, point-of-sale safety guards, and social distancing floor stickers. Generated roughly $20,000 in sales.",
      images: [
        {
          src: "/images/ventures/safety-stuff-plus-stickers.jpg",
          alt: "Safety Stuff Plus social distancing floor stickers",
        },
        {
          src: "/images/ventures/safety-stuff-plus-flyer.jpg",
          alt: "Safety Stuff Plus point-of-sale safety guard product flyer",
        },
      ],
      links: [
        { label: "Product flyer (PDF)", href: "/images/ventures/safety-stuff-plus-flyer.pdf" },
      ],
    },
    {
      title: "Drip Apparel",
      logo: "/images/ventures/drip-apparel-logo.jpg",
      dates: "High school – end of 1st year of university",
      epitaph: "Retired the throwback shorts, kept the receipts.",
      body: "A throwback sports apparel brand — retro jerseys and shorts sourced through a manufacturer in China. Generated roughly $8,000 in sales before winding down.",
      images: [
        {
          src: "/images/ventures/drip-apparel-inventory-1.jpg",
          alt: "Drip Apparel inventory — retro jerseys",
        },
        {
          src: "/images/ventures/drip-apparel-inventory-2.jpg",
          alt: "Drip Apparel inventory — throwback shorts",
        },
        {
          src: "/images/ventures/drip-apparel-inventory-3.jpg",
          alt: "Drip Apparel inventory — throwback shorts",
        },
      ],
    },
    {
      title: "Mustang Tutors",
      logo: "/images/ventures/mustang-tutors-logo.png",
      dates: "2nd year of university",
      epitaph: "Taught a lesson in trust — the hard way.",
      body: "A peer-tutoring venture at Western. Shut down after tutors started booking private sessions directly with students, bypassing the platform, and the overhead of managing the team became too much to sustain.",
    },
  ],
};

export const posts = [
  {
    title: "Accepting my MMS offer",
    date: "June 2026",
    body: "I'm excited to share that I have accepted my offer to Western University's Master of Medical Sciences (MSc) program through the Schulich School of Medicine & Dentistry. I'm grateful for the opportunity to continue my education at Western and to build on the foundation that my undergraduate experience has given me.",
  },
  {
    title: "BHSc Award of Recognition",
    date: "July 2026",
    body: "As I reflect on convocation and the completion of my BHSc at Western University, I'm grateful to have been selected as the 2026 recipient of the BHSc Award of Recognition — presented annually to a single BHSc student who demonstrates academic achievement, leadership, character, and a commitment to the School of Health Studies.",
  },
];

export const mmsCourses = [
  {
    slug: "communicating-science",
    title: "Communicating Science in the 21st Century",
    description: "Translating research for public, clinical, and policy audiences.",
  },
  {
    slug: "designing-analyzing-research",
    title: "Designing, Analyzing & Interpreting Medical Science Research",
    description: "Study design, analysis, and critical interpretation of medical science research.",
  },
  {
    slug: "science-policy",
    title: "Science Policy",
    description: "How evidence moves into policy and practice.",
  },
  {
    slug: "ethical-research-practices",
    title: "Ethical Research Practices",
    description: "Research ethics frameworks and their application in practice.",
  },
  {
    slug: "academic-integrity-professionalism",
    title: "Academic Integrity and Professionalism",
    description: "Professional conduct and integrity across research settings.",
  },
  {
    slug: "data-science",
    title: "Data Science",
    description: "Applied data handling and analysis for health research.",
  },
  {
    slug: "research-excellence-diversity",
    title: "Research Excellence Through Diversity",
    description: "Equity, diversity, and inclusion as drivers of research quality.",
  },
  {
    slug: "ip-implementation-commercialization",
    title: "Intellectual Property, Implementation & Commercialization",
    description: "From discovery to implementation and commercialization pathways.",
  },
];

export type SelectedWorkItem = {
  title: string;
  task: string;
  actions: string;
  results: string;
};

export type CourseDetail = {
  intro: string;
  selectedWork: SelectedWorkItem[];
  alsoInThisCourse: string;
  reflection: string[];
};

export const courseDetails: Record<string, CourseDetail> = {
  "communicating-science": {
    intro:
      "A discussion-based communication course spanning microteach presentations, a group lay summary, a SciComm grant proposal with peer review and response letters, predatory publishing and preprints, storytelling with visiting author Dr. Adrian Owen, and a closing debate on open science, alongside nine weekly LinkedIn posts translating each class into a public reflection for a professional audience.",
    selectedWork: [
      {
        title: 'SciComm Outreach Proposal, "From Research to Reality"',
        task: "Write a science communication outreach proposal, building on a topic that grew out of the earlier Layman Summary assignment (an early-course exercise where we read a published research paper and rewrote it for a general audience). Our group's paper was on detecting awareness in unresponsive patients by having them imagine playing tennis, from Dr. Adrian Owen's own consciousness research, which is what first connected me to his work.",
        actions:
          "Designed the initiative, Western Research in Action (hosted by URSA, the undergraduate research organization I founded and lead), around storytelling and accessibility rather than technical findings, drawing directly on the approach Dr. Owen described in Into the Gray Zone. Structured each speaker's presentation around four plain-language questions: what problem they were solving, how they investigated it, what they found, and how it created change. Grounded the proposal in URSA's own real programming data (prior events had already drawn 100+ attendees and 18 speakers, with interest exceeding venue capacity and a community of 2,000+ students to reach) and built out the audience/need, rationale, implementation plan, and evaluation plan a full grant proposal requires.",
        results:
          "A complete, evidence-backed proposal ready for peer review, and not just a class exercise. Because it's built directly on URSA's real infrastructure and track record, Western Research in Action is an event I actually want to bring to life through the organization.",
      },
      {
        title: "Peer Review & Response Letter",
        task: "Complete the course's full peer-review cycle from both sides: write a formal peer review of a classmate's proposal, then write a response letter addressing the feedback I received on my own.",
        actions:
          "As reviewer, I evaluated a classmate's proposal for \"MedTok Mythbusters,\" a TikTok-based initiative aimed at countering health misinformation among teens and young adults, highlighting its practicality and use of TikTok's duet feature while pushing for a clearer primary objective and a more realistic plan for measuring impact within an eight-week pilot. As author, I responded in writing to the feedback I received on my own proposal, agreeing to add a risk-mitigation section, cite URSA's real attendance data for credibility, clarify that the speakers listed were illustrative rather than final, and tighten the proposal's framing and closing statement.",
        results:
          "Practiced both halves of scientific peer review in the same week: giving specific, actionable feedback as a reviewer, and engaging thoughtfully with feedback rather than just accepting it as an author.",
      },
    ],
    alsoInThisCourse:
      "Beyond the proposal and peer-review cycle, 9501 also included microteach presentations, a group Layman Summary, a session on predatory publishing and preprints, a storytelling class with visiting author Dr. Adrian Owen, a closing debate on whether open science strengthens public trust, and nine weekly LinkedIn posts reflecting on each class for a professional audience.",
    reflection: [
      "This course built my ability to communicate science to different audiences, starting with the Microteach presentations (which had nothing to do with science but got everyone comfortable speaking to an unfamiliar audience), through the Layman Summary, and the SciComm Proposal, Peer Review, and Response Letter sequence, which walked through grant writing and publication as if it were a real project. My weekly LinkedIn posts extended that practice by translating each class for a professional network every week.",
      "The part that pushed me the most was our closing debate, where I was assigned to argue a position I didn't initially agree with. I'd avoided debate-style classes since elementary school, so choosing to represent my team as one of the speakers, and having our own research change my mind on the issue, ended up being the most valuable part of the course for me.",
      "9501 gave me the confidence to communicate my ideas, and I want to carry that into more difficult conversations around ethics and professionalism in the next course: getting better at analyzing situations from multiple perspectives and connecting my clinical ethics experience at LHSC to our case discussions.",
    ],
  },
};

export const mmsRotations = [
  { title: "Basic Science Rotation", description: "Laboratory placement." },
  { title: "Clinical Science Rotation", description: "Clinical setting placement." },
  { title: "Community Engaged Learning Rotation", description: "Community partner placement." },
];

export const mmsCapstone = {
  workingTitle: "Improving Resource & Support Access for Marginalized Populations",
  body: "A team-based capstone addressing a wicked problem, delivered across an environmental scan, a systematic literature review, and a final report and presentation.",
  fields: ["Task", "Action", "Result", "Reflection"],
};

export const mmsSeminars = [
  {
    title: "Weekly Seminar Series",
    description: "A Friday seminar series running through the program.",
  },
];

export const labBootcamp = {
  title: "Lab Bootcamp",
  dates: "Weekly, early in the program",
  overview:
    "A nine-week, hands-on lab bootcamp early in the program. We ran two full experiments start to finish on lab-grown cells, one testing whether vitamin C changes how much collagen a cell makes, and one testing the best way to measure protein levels accurately.",
  researchQuestions: [
    {
      label: "Experiment 1",
      body: "Does vitamin C change how much collagen a cell produces?",
    },
    {
      label: "Experiment 2",
      body: "What's the more accurate way to measure protein levels: comparing to one common reference protein, or to the total protein in the sample?",
    },
  ],
  headerImages: [
    { src: "/images/mms-lab/team-group.jpg", alt: "Asghar Khan with his lab bench group" },
    { src: "/images/mms-lab/pipetting-1.jpg", alt: "Asghar Khan pipetting at the lab bench" },
  ],
  weeks: [
    {
      week: "Week 1",
      title: "Lab Safety & Equipment Basics",
      body: "Learned lab safety and waste handling, and practiced using a micropipette (the tool for measuring out tiny, precise amounts of liquid). Also got first reps loading gel plates and building a simple measurement curve to see how accurately we could pipette.",
      images: [
        {
          src: "/images/mms-lab/pipetting-2.jpg",
          alt: "Asghar Khan practicing with a micropipette",
        },
        {
          src: "/images/mms-lab/pipetting-3.jpg",
          alt: "Asghar Khan practicing with a micropipette",
        },
      ],
    },
    {
      week: "Weeks 2–4",
      title: "Growing Cells and Extracting Genetic Material",
      body: "Practiced growing and handling living cells in a sterile environment, then extracted their genetic material (RNA) from vitamin-C-derivative-treated and untreated samples and converted it into a stable, workable form (cDNA). Ran tests to find the ideal conditions for accurately measuring our genes of interest before using them in a real experiment.",
    },
    {
      week: "Weeks 5–6",
      title: "Fine-Tuning and Running the Real Experiment",
      body: "Fine-tuned our measurement methods to make sure they were accurate, then ran the actual experiment to see whether vitamin C changed collagen production in treated cells compared to untreated ones.",
    },
    {
      week: "Week 7",
      title: "Extracting and Measuring Protein",
      body: "Broke open cells to extract their protein, then measured how much protein was in each sample using a colour-based test compared against a known standard.",
    },
    {
      week: "Week 8",
      title: "Separating Proteins by Size",
      body: "Loaded equal amounts of protein into a gel to separate them by size, then transferred them onto a membrane.",
      images: [
        { src: "/images/mms-lab/sds-page-1.jpg", alt: "SDS-PAGE gel electrophoresis setup" },
        { src: "/images/mms-lab/sds-page-2.jpg", alt: "SDS-PAGE gel electrophoresis equipment" },
        { src: "/images/mms-lab/transfer-station.jpg", alt: "Protein transfer station setup" },
      ],
    },
    {
      week: "Week 9",
      title: "Detecting the Protein of Interest",
      body: "Used antibodies to detect and measure our specific protein of interest, then compared the two measurement approaches from Week 8.",
    },
  ],
  reflection:
    "I did labs throughout undergrad, but honestly, I often felt like I was just going through the motions. I would follow the protocol, do the calculations, and try to get the right answer for a participation mark without always understanding the bigger picture. The classes were large, it was difficult to hear the TA, and there was rarely enough time to ask questions. This teaching lab felt completely different. The smaller groups gave me the chance to actually ask questions and understand why we were doing each experiment. Working with state-of-the-art equipment also made the science feel much more real, instead of something I had only learned about in lectures. I found myself genuinely enjoying the experiments because I understood what I was doing and why it mattered. I came out of the experience with a much better understanding of research in a lab setting and a greater appreciation for hands-on science.",
};

export const journalClub = {
  title: "Journal Club",
  description: "A recurring session breaking down current research papers as a group.",
};

export const mmsReflections = [
  {
    date: "May 2026",
    title: "Starting the program",
    body: "Beginning the Master of Medical Sciences felt like stepping from asking questions about care into being asked to answer them. The first weeks have been about learning how this program wants me to think: less about collecting experiences, more about examining them carefully and writing them down for someone who wasn't in the room.",
  },
];

export const placeholderNote = "Content for this section is in progress and will be added shortly.";
