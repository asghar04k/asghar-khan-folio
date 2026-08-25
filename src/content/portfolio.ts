/**
 * Single source of truth for all portfolio content.
 * Update copy here — never in layout components.
 */

export const profile = {
  name: "Asghar Khan",
  tagline: "Master of Medical Sciences Candidate, Western University",
  location: "London, Ontario",
  shortBio:
    "Clinical ethics, patient support, and health services research, at Western's Schulich School of Medicine & Dentistry.",
  bio: "I'm a Master of Medical Sciences candidate at Western University's Schulich School of Medicine & Dentistry, following an Honours Specialization in Health Sciences (final two-year GPA of 3.97/4.0) and the 2026 recipient of the BHSc Award of Recognition. My work sits at the intersection of clinical ethics, patient support, and health services research: spanning a clinical ethics practicum at the Western Centre for Bioethics and London Health Sciences Centre, a research assistantship in the Down Syndrome Clinic at The Hospital for Sick Children, and applied AI research in geriatric medicine. I'm also the founder and president of the Western Undergraduate Research Students' Association (URSA), which I grew into a 2,000+ member research community in its first year.",
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
    title: "Patient Support: Clinical Ethics Practicum",
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
  body: "Hospital-based ethics work in partnership with London Health Sciences Centre: clinical ethics discussions on patient autonomy, capacity, consent, and institutional decision-making across long-term care, adult mental health, and child/adolescent mental health units, alongside a research component exploring the ethics of healthcare delivery in space environments, informed by Western's Institute for Earth & Space Exploration and the Canadian Space Agency.",
  link: "https://bioethics.uwo.ca/initiatives/practicum.html",
  linkLabel: "Official practicum profile: bioethics.uwo.ca",
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
    "Special shoutout to my Vice Presidents: Anita Severin, Sofia Tomassini, Fiona Zhou, Lily Carson, Jenna Pavlovic, Porousha Shokoofeh, Jibraan Dhirani, and Ali Ajwani, and all the directors.",
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
    org: "Intramural Ball Hockey & Basketball (4+ seasons, multiple championships)",
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
    images: [
      {
        src: "/images/volunteering/soahac-ifsp-banner.jpg",
        alt: "SOAHAC's Indigenous Food Sovereignty Program banner",
        caption: "SOAHAC's Indigenous Food Sovereignty Program",
      },
      {
        src: "/images/volunteering/soahac-food-box-distribution.jpg",
        alt: "Asghar Khan among rows of crated produce ahead of weekly food box distribution",
        caption: "Prepping weekly food boxes for distribution",
      },
      {
        src: "/images/volunteering/soahac-crate-rows.jpg",
        alt: "Rows of crates full of fresh produce ready for distribution",
        caption: "Produce sorted into crates for the week's food boxes",
      },
      {
        src: "/images/volunteering/soahac-prep-room.jpg",
        alt: "The food prep and storage room ahead of a distribution day",
        caption: "The prep room ahead of a distribution day",
      },
      {
        src: "/images/volunteering/soahac-seed-sorting.jpg",
        alt: "Sorting traditional seeds by hand",
        caption: "Sorting traditional seeds",
      },
      {
        src: "/images/volunteering/soahac-community-meal.jpg",
        alt: "A community meal being served as part of the program's food gatherings",
        caption: "A community meal, part of the program's food gatherings",
      },
    ],
  },
  {
    title: "Ortho Inpatient Clinic Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "Aug 2025 – Present",
    year: "2025–",
    description:
      "Weekly patient visits on the orthopaedic inpatient unit: talking with patients and building friendships through regular visits, plus a hands-on visit to CSTAR (Canadian Surgical Technologies & Advanced Robotics): practicing realistic CPR on a high-fidelity simulation mannequin capable of simulating bleeding, learning from researchers how the automated systems work, and seeing the da Vinci surgical robot in motion.",
    images: [
      {
        src: "/images/volunteering/lhsc-volunteer-vest.jpg",
        alt: "Asghar Khan in LHSC volunteer uniform at the volunteer station",
        caption: "Volunteering in the orthopaedic inpatient unit",
      },
      {
        src: "/images/volunteering/cstar-cpr-mannequin.jpg",
        alt: "A high-fidelity CPR simulation mannequin at CSTAR",
        caption: "Practicing CPR on CSTAR's high-fidelity simulation mannequin",
      },
      {
        src: "/images/volunteering/cstar-davinci-robot.jpg",
        alt: "The da Vinci surgical robot system at CSTAR",
        caption: "The da Vinci surgical robot",
      },
      {
        src: "/images/volunteering/cstar-or-room.jpg",
        alt: "A CSTAR simulation operating room",
        caption: "A CSTAR simulation operating room",
      },
    ],
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
  "Volunteer Notetaker, Accessibility Services, Western University (Feb–Apr 2025): took notes for students with accommodations in Dr. Jacob Shelley's Health Law 3101A course",
  "Fundraising Volunteer, Vaughan Food Bank (Sep 2018–Present, 8+ yrs): biweekly food package delivery and distribution for low-income families",
  "Fundraising Volunteer, The Corsage Project, in partnership with Children's Aid Foundation of Canada (Feb–Mar 2020): spoke to YRDSB students and staff and helped raise funds and scholarships for young women in financial difficulty",
  "Youth Volunteer, Jaffari Community Centre",
  "Volunteer, Babul Hawaij Relief Foundation",
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
    org: "STEM Fellowship, National Inter-University Health Data and AI Inquiry Program, University of Toronto",
    year: "2025",
    summary:
      "A systematic review examining the reliability of AI-enabled wearable technologies for detecting falls in older adults: sensor types, algorithms, and validation methods across the literature, identifying strengths, limitations, and opportunities for innovation.",
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
    "Informed Consent & Decision-Making for Indigenous Peoples Living with Disabilities in Canada: A Scoping Review",
  subtitle: "Independent Study / 4th-year thesis",
  supervisor: "Supervised by Dr. Jacob Shelley, Faculty of Health Sciences, Western University",
  presented: "Presented December 2025",
  landAcknowledgement:
    "Presented on the traditional lands of the Anishinaabe, Haudenosaunee, and Lūnaapéewak peoples (including the Chippewas of the Thames First Nation, the Oneida Nation of the Thames, and the Munsee-Delaware Nation), with respectful acknowledgement of Walpole Island First Nation (Bkejwanong Territory) for welcoming participation in traditional food and hunting practices.",
  overview:
    "A scoping review examining consent as a structural barrier at the intersection of disability and Indigeneity in Canada. It maps existing literature, identifies legal, ethical, and policy frameworks, examines Indigenous perspectives on health, healing, and relational care, and highlights systemic gaps, including family burden in navigating services and transition gaps between childhood and adult care systems.",
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
    "This research started from personal experience, not just academic interest. Watching a family member navigate the healthcare system while in hospital made it clear that barriers to care are rarely just medical. They're rooted in language, culture, power, and assumptions about whose needs are treated as straightforward and whose aren't. Being present for that, and seeing how much depended on who happened to be advocating in the room, became the foundation for my interest in disability, consent, and advocacy-focused research.",
};

export const awards = [
  {
    title: "BHSc Award of Recognition",
    year: "2026",
    note: "Awarded annually to one BHSc student for academic achievement, leadership, character, and community commitment.",
    image: "/images/awards/bhsc-award-diploma.jpg",
  },
  {
    title: "Conference Travel Award",
    year: "2026",
    note: "Approximately $1,500 for conference registration, travel, and accommodation to attend the 2026 AGE-WELL Annual Conference in Ottawa, awarded after our research abstract was accepted for poster presentation. I was selected as the graduate student to represent Provincial Geriatrics Leadership Ontario and present our work evaluating the clinical utility of AI in older-adult care.",
  },
  { title: "Western Scholarship of Distinction", year: "2022", note: "$3,500" },
  { title: "Health Innovation Award", year: "", note: "" },
  { title: "Dean's Honour List", year: "", note: "" },
  {
    title: "Top Student Recognition: Physics I & II",
    year: "",
    note: "99% (Physics I) and 103% (Physics II)",
  },
  { title: "Department of Physics/Astronomy In-Course Distinction", year: "", note: "" },
  { title: "Youth Excellence Award", year: "", note: "" },
];

export type CliftonStrength = { rank: number; name: string; description: string };

export const cliftonStrengths: CliftonStrength[] = [
  {
    rank: 1,
    name: "Futuristic",
    description:
      "You are inspired by the future and what could be. You energize others with your visions of the future.",
  },
  {
    rank: 2,
    name: "Competition",
    description:
      "You measure your progress against others' performance. You strive to win first place and revel in contests.",
  },
  {
    rank: 3,
    name: "Ideation",
    description:
      "You are fascinated by ideas. You are able to find connections between seemingly disparate phenomena.",
  },
  {
    rank: 4,
    name: "Activator",
    description:
      "You can make things happen by turning thoughts into action. You want to do things now rather than simply talk about them.",
  },
  {
    rank: 5,
    name: "Positivity",
    description:
      "You have contagious enthusiasm. You are upbeat and can get others excited about what they are going to do.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  certNumber?: string;
  pdf: string;
  summary: string;
  reflection: string;
};

// Completed as part of MEDSCIEN 9700 (Interdisciplinary Skill Development), duplicated
// here as short entries; the full certificate and reflection live on the Seminars page.
export const certifications: Certification[] = [
  {
    title: "TCPS 2: CORE 2022",
    issuer: "Panel on Research Ethics",
    date: "May 20, 2023",
    certNumber: "0000930733",
    pdf: "/documents/tcps2-core-2022-certificate.pdf",
    summary:
      "Course on Research Ethics, based on the Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans.",
    reflection:
      "Required training before conducting any human-subjects research in Canada: consent, privacy, and participant risk.",
  },
  {
    title: "Building Inclusivity through Anti-Racism",
    issuer: "Office of Equity, Diversity & Inclusion, Western University",
    date: "",
    pdf: "/documents/anti-racism-certificate.pdf",
    summary: "Completed through Western's Office of Equity, Diversity & Inclusion.",
    reflection:
      "How racism operates structurally, not just interpersonally, and what building real inclusion actually takes.",
  },
  {
    title: "Western Required Training",
    issuer: "Western Human Resources (LMS)",
    date: "Issued May 25, 2026",
    pdf: "/documents/western-required-training-summary.pdf",
    summary:
      "Biosafety, laboratory safety, WHMIS, accessibility, and health and safety awareness training required for lab and campus roles.",
    reflection:
      "The safety and compliance training required before any hands-on lab work: biosafety, lab safety, and WHMIS.",
  },
];

export const hobbies = [
  {
    title: "Ball Hockey",
    body: "Team captain, intramural league.",
  },
  {
    title: "Basketball",
    body: "Team captain, intramural league.",
  },
  {
    title: "Golf",
    body: "Details to be added.",
  },
  {
    title: "Hunting",
    body: "Time outdoors and traditional food and hunting practices, including with Walpole Island First Nation (Bkejwanong Territory).",
    image: "/images/hobbies/hunting.jpg",
  },
];

export const friends: { src: string; alt: string; caption?: string }[] = [];

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
      body: "A mobile auto detailing business: interior, exterior, and ceramic coating. Detailed a couple hundred cars over the run before shutting it down once it became too time-consuming to keep up with alongside school.",
    },
    {
      title: "Safety Stuff Plus",
      logo: "/images/ventures/safety-stuff-plus-logo.jpg",
      dates: "Spring 2020 (high school)",
      epitaph: "Flattened the curve, then flattened itself.",
      body: "Launched at the very start of COVID-19 to supply businesses with PPE in wholesale quantities: face shields, masks, gloves, sneeze guards, point-of-sale safety guards, and social distancing floor stickers. Generated roughly $20,000 in sales.",
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
      body: "A throwback sports apparel brand: retro jerseys and shorts sourced through a manufacturer in China. Generated roughly $8,000 in sales before winding down.",
      images: [
        {
          src: "/images/ventures/drip-apparel-inventory-1.jpg",
          alt: "Drip Apparel inventory: retro jerseys",
        },
        {
          src: "/images/ventures/drip-apparel-inventory-2.jpg",
          alt: "Drip Apparel inventory: throwback shorts",
        },
        {
          src: "/images/ventures/drip-apparel-inventory-3.jpg",
          alt: "Drip Apparel inventory: throwback shorts",
        },
      ],
    },
    {
      title: "Mustang Tutors",
      logo: "/images/ventures/mustang-tutors-logo.png",
      dates: "2nd year of university",
      epitaph: "Taught a lesson in trust, the hard way.",
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
    body: "As I reflect on convocation and the completion of my BHSc at Western University, I'm grateful to have been selected as the 2026 recipient of the BHSc Award of Recognition, presented annually to a single BHSc student who demonstrates academic achievement, leadership, character, and a commitment to the School of Health Studies.",
  },
];

export const mmsCourses = [
  {
    slug: "communicating-science",
    title: "Communicating Science in the 21st Century",
    description: "Translating research for public, clinical, and policy audiences.",
    active: true,
  },
  {
    slug: "designing-analyzing-research",
    title: "Designing, Analyzing & Interpreting Medical Science Research",
    description: "Study design, analysis, and critical interpretation of medical science research.",
    active: false,
  },
  {
    slug: "academic-integrity-professionalism",
    title: "Academic Integrity and Professionalism",
    description: "Professional conduct and integrity across research settings.",
    active: true,
  },
  {
    slug: "science-policy",
    title: "Science Policy",
    description: "How evidence moves into policy and practice.",
    active: true,
  },
  {
    slug: "ethical-research-practices",
    title: "Ethical Research Practices",
    description: "Research ethics frameworks and their application in practice.",
    active: false,
  },
  {
    slug: "data-science",
    title: "Data Science",
    description: "Applied data handling and analysis for health research.",
    active: false,
  },
  {
    slug: "research-excellence-diversity",
    title: "Research Excellence Through Diversity",
    description: "Equity, diversity, and inclusion as drivers of research quality.",
    active: false,
  },
  {
    slug: "ip-implementation-commercialization",
    title: "Intellectual Property, Implementation & Commercialization",
    description: "From discovery to implementation and commercialization pathways.",
    active: false,
  },
];

export type SelectedWorkItem = {
  title: string;
  task: string;
  actions: string;
  results: string;
  documents?: { src: string; label: string }[];
  references?: { src: string; alt: string; caption: string; href?: string }[];
  heroImage?: { src: string; alt: string; caption?: string; href?: string };
  audio?: { src: string; podcastName: string; description: string };
  links?: { label: string; href: string }[];
};

export type CourseDetail = {
  intro: string;
  selectedWork: SelectedWorkItem[];
  alsoInThisCourse: { intro: string; topics: string[] };
  reflection: string[];
};

export const courseDetails: Record<string, CourseDetail> = {
  "communicating-science": {
    intro:
      "This course was about making science understandable to everyone, not just other scientists. It covered microteach presentations, a group lay summary, a SciComm grant proposal with peer review and response letters, predatory publishing and preprints, storytelling with visiting author Dr. Adrian Owen, and a closing debate on open science, alongside nine weekly LinkedIn posts translating each class into a public reflection for a professional audience.",
    selectedWork: [
      {
        title: 'SciComm Outreach Proposal, "From Research to Reality"',
        task: "Write a science communication outreach proposal, building on our earlier Layman Summary of Dr. Adrian Owen's consciousness research, which is what first connected me to his work.",
        actions:
          "Designed Western Research in Action, an event hosted by URSA (the research organization I founded and lead), built around storytelling over technical findings, drawing on Dr. Owen's approach in Into the Gray Zone. Grounded it in URSA's real numbers (100+ attendees, 18 speakers, 2,000+ student community) and wrote out the full grant proposal: need, rationale, implementation, evaluation.",
        results:
          "I can now turn a research question into a fundable, audience-first pitch instead of just a summary. A complete proposal I actually want to bring to life through URSA, not just a class exercise.",
        documents: [{ src: "/documents/scicomm-outreach-proposal.pdf", label: "Proposal" }],
        references: [
          {
            src: "/images/mms-courses/into-the-gray-zone-cover.jpg",
            alt: "Into the Gray Zone by Dr. Adrian Owen",
            caption: "Into the Gray Zone, Dr. Adrian Owen",
            href: "https://www.amazon.com/dp/150113521X",
          },
          {
            src: "/images/mms-courses/ursa-logo.png",
            alt: "Western URSA logo",
            caption: "Western URSA",
            href: "https://www.westernursa.ca/",
          },
        ],
      },
      {
        title: "Peer Review & Response Letter",
        task: "Complete the course's peer-review cycle from both sides: review a classmate's proposal, then respond to the feedback I received on my own.",
        actions:
          "As reviewer, I evaluated a classmate's \"MedTok Mythbusters\" proposal, a TikTok initiative countering health misinformation, praising its practicality while pushing for a clearer objective and a more realistic impact plan. As author, I responded to my own feedback by agreeing to add a risk-mitigation section, cite real URSA data for credibility, and tighten the proposal's framing.",
        results:
          "I can now give specific, actionable feedback as a reviewer, and respond to critique with actual changes instead of just accepting or dismissing it.",
        documents: [
          { src: "/documents/peer-review.pdf", label: "Peer Review" },
          { src: "/documents/response-letter.pdf", label: "Response Letter" },
        ],
      },
      {
        title: '"Beyond the Abstract" Podcast',
        task: 'Create a 10-minute episode for "Beyond the Abstract," a fictional science communication podcast, breaking down a recent peer-reviewed research article for a general audience: the question it asked, why it matters, what it found, and its limitations. Covered a 2025 Nature Genetics study, "Decomposition of phenotypic heterogeneity in autism reveals underlying genetic programs," examining how distinct autism profiles may correspond to different genetic patterns and developmental pathways.',
        actions:
          "Built a scripted panel-style conversation, a host plus a few expert voices, to walk a general audience through the study step by step: why the researchers set out to test whether autism represents one condition or several biologically distinct ones, how a generative mixture modeling approach on phenotype data from over 5,000 children identified four distinct autism subtypes, how those subtypes lined up with different genetic signatures and different windows of brain development, and where the study's limitations are, from parent-reported data to a lack of diversity in the sample.",
        results:
          "I can now take a dense, statistically heavy paper and find the actual narrative in it: a question, a method, a finding, a limitation, without flattening the nuance that makes the science honest. Structuring that as a conversation instead of a lecture also pushed me to translate real statistical machinery, like mixture modeling and latent classes, into something a non-scientist could follow without ever hearing that jargon out loud. That's a skill I want to keep using anywhere I have to explain research to someone outside the field, from patients to policymakers.",
        audio: {
          src: "/audio/beyond-the-abstract-episode.mp3",
          podcastName: "Beyond the Abstract",
          description: "A Nature Genetics study on the genetics behind different autism profiles.",
        },
        links: [
          {
            label: "Read the study on PubMed",
            href: "https://pubmed.ncbi.nlm.nih.gov/40634707/",
          },
        ],
      },
    ],
    alsoInThisCourse: {
      intro: "Beyond the proposal and peer-review cycle, 9501 also included:",
      topics: [
        "Microteach presentations",
        "Group Layman Summary",
        "Predatory publishing & preprints",
        "Storytelling with Dr. Adrian Owen",
        "Closing debate on open science",
        "9 weekly LinkedIn reflections",
      ],
    },
    reflection: [
      "This course built my ability to communicate science to different audiences, starting with the Microteach presentations (which had nothing to do with science but got everyone comfortable speaking to an unfamiliar audience), through the Layman Summary, and the SciComm Proposal, Peer Review, and Response Letter sequence, which walked through grant writing and publication as if it were a real project. My weekly LinkedIn posts extended that practice by translating each class for a professional network every week.",
      "The part that pushed me the most was our closing debate, where I was assigned to argue a position I didn't initially agree with. I'd avoided debate-style classes since elementary school, so choosing to represent my team as one of the speakers, and having our own research change my mind on the issue, ended up being the most valuable part of the course for me.",
      "9501 gave me the confidence to communicate my ideas, and I want to carry that into more difficult conversations around ethics and professionalism in the next course: getting better at analyzing situations from multiple perspectives and connecting my clinical ethics experience at LHSC to our case discussions.",
    ],
  },
  "academic-integrity-professionalism": {
    intro:
      "A case-based course on ethics and professionalism in research, clinical work, and industry: real cases of misconduct and retraction, plus sessions on professional values, teamwork, and AI ethics.",
    selectedWork: [
      {
        title: "Obokata Case Brief: The STAP Stem Cell Controversy",
        task: "Analyze the STAP stem cell scandal: Dr. Haruko Obokata's celebrated Nature papers on reprogramming cells into stem cells were retracted after manipulated images and irreproducible results came to light.",
        actions:
          "Broke down what made the science so exciting, then the misconduct itself and the human pressures behind it: a new lab at 30, a decade-long rival hypothesis, and a culture that rewards novelty over careful replication.",
        results:
          "The assignment itself was small, but what it taught me wasn't. Misconduct rarely comes from one bad decision; it builds from pressure, incentives, and good intentions left unchecked. I can now break down a case like this by its root causes, not just its facts, a skill that applies well beyond research, to any academic or professional setting where pressure to deliver can tempt people to cut corners.",
        heroImage: {
          src: "/images/mms-courses/obokata-guardian-lab.jpg",
          alt: "The Guardian article 'What pushes scientists to lie? The disturbing but familiar story of Haruko Obokata', showing Obokata working in her laboratory in Kobe",
          caption: "Source: The Guardian, Photograph: Jiji Press/AFP/Getty Images",
          href: "https://www.theguardian.com/science/2015/feb/18/haruko-obokata-stap-cells-controversy-scientists-lie",
        },
      },
      {
        title: "Retraction Story Assignment",
        task: "Choose a real retracted paper from Retraction Watch and dig into why it was retracted, whether misconduct was involved, and what could have prevented it.",
        actions:
          "Chose the TOGETHER trial's metformin-for-COVID-19 study, retracted after its own authors discovered a miscount in primary outcome events that had stopped the trial early on faulty grounds. Traced how the mistake happened, argued it showed no intentional misconduct since the authors caught and self-reported it, and proposed stronger data-verification procedures. Used the case as an example of a retraction handled with integrity: transparency over self-protection.",
        results:
          "I can now tell an honest, self-reported error apart from real misconduct, and I picked up a concrete data-verification habit I plan to apply to my own research, and to any professional setting where getting it right matters more than covering a mistake.",
        links: [
          {
            label: "Retraction Watch: the TOGETHER trial retraction",
            href: "https://retractionwatch.com/2025/11/20/lancet-journal-retracts-covid-19-metformin-paper-nearly-2-years-after-authors-request-correction/",
          },
        ],
        heroImage: {
          src: "/images/mms-courses/retraction-watch-metformin.jpg",
          alt: "The retracted TOGETHER trial metformin paper, stamped RETRACTED",
          caption: "Source: Retraction Watch",
          href: "https://retractionwatch.com/2025/11/20/lancet-journal-retracts-covid-19-metformin-paper-nearly-2-years-after-authors-request-correction/",
        },
      },
      {
        title: "AI Misconduct and Prevention",
        task: "Design a plausible, hard-to-detect way AI could be misused to commit research misconduct, then propose a real countermeasure, an assignment built to make the risks concrete.",
        actions:
          "Proposed an AI-assisted literature-search model that would quietly adjust search terms until it retrieved evidence supporting a predetermined conclusion, grounded in my own experience running a large scoping review where I saw how many ordinary decisions go into a search strategy. Argued this would be hard to catch since the final search would still pass a basic reproducibility check. Proposed extending the existing PRESS guideline to require researchers to justify their search decisions and declare AI wasn't used to steer the outcome.",
        results:
          "I can now spot how AI tools can quietly bias a search while it still looks methodologically sound, a risk I hadn't considered in my own scoping review until this assignment, and I can turn a risk like that into an actual policy fix. That's not just a research skill: anywhere AI supports a decision, from clinical practice to industry, someone needs to be able to catch that kind of hidden bias.",
        heroImage: {
          src: "/images/mms-courses/ai-misconduct-flowchart.jpg",
          alt: "Flowchart of a hidden, iterative AI search-manipulation strategy, showing how a reproducible search can still be biased",
        },
      },
    ],
    alsoInThisCourse: {
      intro: "Beyond these three assignments, 9505 also covered:",
      topics: [
        "Academic integrity",
        "Lab professionalism",
        "Professional values",
        "Effective teamwork",
        "Clinical professional conduct",
        "Professionalism case studies",
        "AI ethics",
        "Ethical Dilemmas assignment",
        "Final group presentations",
      ],
    },
    reflection: [
      "These three assignments pushed me to think about research misconduct less as a single bad decision and more as something that builds up through career pressure, institutional incentives, and good intentions gone unchecked. The Obokata case made that clear: none of the individual pressures she was under justified what happened, but understanding them changed how I think about prevention. It's not enough to tell people not to falsify data; the systems around researchers need to make honesty the easier path.",
      "The AI Misconduct assignment hit closest to home, since I built the scenario directly out of my own experience running a large scoping review. It was uncomfortable to realize how easily a legitimate-looking search strategy could hide bias.",
      "Going into my next course, I want to carry that same scrutiny into my own research practices: being more deliberate about documenting and justifying methodological decisions as I make them, not just when someone asks.",
    ],
  },
  "science-policy": {
    intro: `A month-long policy simulation where four of us worked as a federal "policy team" tackling a real health policy issue end to end: from literature review and stakeholder mapping through to a proposed regulatory solution, alongside sessions on how government works, risk and change management, and performance measurement. The three entries below trace that same project, our team's file on Sex- and Gender-Based Analysis Plus (SGBA+) in drug development, from research to a proposed solution.`,
    selectedWork: [
      {
        title: "Literature Review & Environmental Scan: SGBA+ in Drug Development",
        task: "As a four-person policy team, build the literature review and environmental scan that would ground a month-long federal policy simulation: identifying why Sex- and Gender-Based Analysis Plus (SGBA+) still isn't fully integrated into Canadian drug development, and what's already been tried elsewhere.",
        actions: `Individually wrote the paper's introduction and its section on underrepresentation of women in cardiovascular research, grounding the whole team's paper in the FDA's history of formally excluding women from early-phase trials from 1977 to 1993, and in concrete consequences like 8 of the 10 prescription drugs withdrawn from the U.S. market between 1997 and 2001 posing greater risk to women. Combined that with teammates' sections on biological sex mechanisms, clinical presentation differences, and intersectional gaps to produce the full team paper, then helped translate the findings into our "Overview of Challenges" presentation to open the policy simulation.`,
        results:
          "A literature base solid enough to carry the rest of the month's work: establishing that the real problem wasn't just underrepresentation in trials, but that even the sex data that is collected often isn't properly analyzed.",
        documents: [{ src: "/documents/sgba-literature-review.pdf", label: "Literature Review" }],
      },
      {
        title: "Interest-Holder Engagement Strategy",
        task: "Map the full stakeholder landscape for a proposed federal SGBA+ regulatory change, from Health Canada and Cabinet to international regulators, funders, industry, and patient advocacy groups, and build a real engagement plan for each.",
        actions:
          "Worked with the team to profile each stakeholder using a RACI framework (Responsible, Accountable, Consulted, Informed): Health Canada and the Governor in Council, international regulators like the FDA, EMA, and ICH, funders CIHR and NIH, pharmaceutical manufacturers including Apotex and Sanofi Pasteur, and patient advocacy groups like the Society for Women's Health Research and the Centre of Excellence for Women's Health, assessing each one's priority, power, likely reaction, and a concrete engagement plan.",
        results:
          "A full interest-holder engagement strategy spanning government, international regulators, funders, industry, and patient groups: the kind of document a real federal policy team would need in hand before proposing a regulatory change.",
        heroImage: {
          src: "/images/mms-courses/sgba-health-canada-raci.jpg",
          alt: "Slide from the team's Interest-Holder Engagement Strategy profiling Health Canada: importance, RACI role, engagement goals, likely reaction, and engagement plan",
        },
        documents: [
          { src: "/documents/sgba-engagement-strategy.pdf", label: "Engagement Strategy" },
        ],
        links: [
          { label: "Health Canada", href: "https://www.canada.ca/en/health-canada.html" },
          { label: "CIHR", href: "https://cihr-irsc.gc.ca/" },
          { label: "FDA", href: "https://www.fda.gov/" },
          { label: "EMA", href: "https://www.ema.europa.eu/" },
          { label: "ICH", href: "https://www.ich.org/" },
          { label: "NIH", href: "https://www.nih.gov/" },
        ],
      },
      {
        title: "Developing the Solution: Closing the Gaps",
        task: `Turn the team's research into an actual two-part policy solution, and defend it against the specific barriers that had stalled SGBA+ adoption for years. My piece: writing the "Challenges to be Addressed" section.`,
        actions: `Authored the section explaining why past SGBA+ policy hadn't worked: a "minimal-compliance culture" where researchers checked the sex-inclusion box without conducting real disaggregated analysis, and the fact that most existing mandates apply to human trials but not the earlier preclinical animal studies that shape them. Argued that our team's two-part solution closed both gaps directly: strengthening CIHR funding requirements to mandate sex-disaggregated preclinical data, feeding into a Health Canada regulatory amendment once that evidence base existed. Helped bring the full solution into our closing Mini-Strategy Presentation to the class.`,
        results:
          "A defensible two-part federal policy solution built on real regulatory levers, CIHR funding conditions and a Food and Drug Regulations amendment, rather than just a recommendation with no mechanism behind it.",
        documents: [{ src: "/documents/sgba-solutions.pdf", label: "Solution" }],
      },
    ],
    alsoInThisCourse: {
      intro: "Beyond the SGBA+ policy file itself, 9503 also covered:",
      topics: [
        "How government works",
        "Government policy levers",
        "Risk management",
        "Project & change management",
        "Performance measurement",
        "Careers in government",
        "Government cover letter",
        "Final presentations to a guest evaluator",
      ],
    },
    reflection: [
      "This course made policy work feel real in a way that's hard to get from a lecture. Carrying one file, SGBA+ in drug development, through an entire month, from the literature review all the way to a defensible regulatory solution, showed me how much groundwork sits underneath a single policy recommendation: the evidence has to hold up, the stakeholders have to be mapped honestly, and the solution has to name a real lever, not just a good idea.",
      `Writing the "Challenges to be Addressed" section pushed me to think harder about why well-intentioned policy sometimes doesn't work, not because people disagree with it, but because it isn't specific enough to close the actual gap. That's a lesson I want to carry beyond this course: a recommendation is only as strong as the mechanism behind it.`,
    ],
  },
};

export type MmsRotation = {
  title: string;
  description: string;
  partner?: string;
  note?: string;
  certifications?: { title: string; pdf: string }[];
};

export const mmsRotations: MmsRotation[] = [
  { title: "Basic Science Rotation", description: "Laboratory placement." },
  { title: "Clinical Science Rotation", description: "Clinical setting placement." },
  {
    title: "Community Engaged Learning Rotation",
    description: "Community partner placement.",
    partner: "Merrymount",
    note: "Early stage. Completed Merrymount's online orientation and training modules.",
    certifications: [
      {
        title: "Merrymount Orientation 2025",
        pdf: "/documents/merrymount-orientation-2025-certificate.pdf",
      },
      {
        title: "Workplace Violence and Harassment Training",
        pdf: "/documents/merrymount-workplace-violence-harassment-certificate.pdf",
      },
      {
        title: "Health and Safety Rights and Responsibilities",
        pdf: "/documents/merrymount-health-safety-certificate.pdf",
      },
    ],
  },
];

export const mmsCapstone = {
  workingTitle: "Improving Resource & Support Access for Marginalized Populations",
  body: "A team-based capstone addressing a wicked problem, delivered across an environmental scan, a systematic literature review, and a final report and presentation.",
  fields: ["Task", "Action", "Result", "Reflection"],
};

export const mmsSeminars = [
  {
    title: "Interdisciplinary Skill Development",
    description:
      "MEDSCIEN 9700: a weekly, ungraded seminar series running all summer on the personal and professional skills interdisciplinary research actually requires.",
  },
];

export type SeminarWeek = {
  week: number;
  date: string;
  topic: string;
  presenter: string;
  featured: boolean;
  holiday?: boolean;
};

export type FeaturedSeminar = {
  slug: string;
  title: string;
  date: string;
  presenter: string;
  setup: string;
  whatIDid: string;
  whatStuck: string;
  documents?: { src: string; label: string }[];
  images?: { src: string; alt: string }[];
  stepper?: { steps: string[]; closing: string };
  tools?: {
    name: string;
    description: string;
    database: string;
    href: string;
    logo: string;
  }[];
  toolsNote?: string;
  consensusMeter?: { label: string; yes: number; mixed: number; no: number };
  flipCards?: { front: string; back: string }[];
  skillBadges?: { name: string; logo: string }[];
};

export type LightningSeminar = {
  title: string;
  presenter: string;
  date: string;
  blurb: string;
};

export const seminarSeries = {
  intro:
    'A weekly, ungraded seminar series running all summer: 12 Friday mornings on the personal and professional skills interdisciplinary research actually requires, from digital-tool literacy and tackling "wicked problems" to critical AI use, scientific writing, and difficult conversations.',
  timeline: [
    {
      week: 1,
      date: "June 5",
      topic: "Critical Reflection",
      presenter: "",
      featured: false,
    },
    {
      week: 2,
      date: "June 12",
      topic: "Microsoft Suites / Digital Literacy",
      presenter: "",
      featured: true,
    },
    { week: 3, date: "June 19", topic: "Strengths", presenter: "", featured: false },
    {
      week: 4,
      date: "June 26",
      topic: "Wicked Problems",
      presenter: "Dr. Ali R. Khan",
      featured: true,
    },
    {
      week: 5,
      date: "July 3",
      topic: "Holiday closure, no session",
      presenter: "",
      featured: false,
      holiday: true,
    },
    {
      week: 6,
      date: "July 10",
      topic: "Citations & Synthesis",
      presenter: "",
      featured: false,
    },
    {
      week: 7,
      date: "July 17",
      topic: "Literature Reviews",
      presenter: "",
      featured: false,
    },
    { week: 8, date: "July 24", topic: "ePortfolios", presenter: "", featured: false },
    {
      week: 9,
      date: "July 31",
      topic: "AI Tools for Literature Searching",
      presenter: "Jason Dyck",
      featured: true,
    },
    {
      week: 10,
      date: "August 7",
      topic: "Difficult Conversations / Connecting with Patients",
      presenter: "Dr. Sean Caine",
      featured: true,
    },
    {
      week: 11,
      date: "August 14",
      topic: "Own Your Future",
      presenter: "",
      featured: false,
    },
    {
      week: 12,
      date: "August 21",
      topic: "End-of-Term Meeting Preparation",
      presenter: "",
      featured: false,
    },
  ] as SeminarWeek[],
  featured: [
    {
      slug: "digital-literacy",
      title: "Digital Literacy Bootcamp",
      date: "June 12",
      presenter: "",
      setup:
        "The MSc Digital Literacy Onboarding checklist: a self-directed practice module covering the Microsoft 365 tools the program runs on, built to get everyone genuinely comfortable with the apps we'd already be using every day.",
      whatIDid:
        "Worked through hands-on practice across each app rather than just reading about them: better inbox organization and message management in Outlook, collaborative editing and review tools in Word, and building more polished, presentation-ready material in PowerPoint, from formatting to embedded media.",
      whatStuck:
        "Small tool fluency compounds. Knowing these apps well saves real time across a full research program, and it's the kind of thing nobody formally teaches unless a session like this one forces you to actually practice it.",
      skillBadges: [
        { name: "Outlook", logo: "/images/mms-seminars/outlook-logo.svg" },
        { name: "Word", logo: "/images/mms-seminars/word-logo.svg" },
        { name: "PowerPoint", logo: "/images/mms-seminars/powerpoint-logo.svg" },
        { name: "Teams", logo: "/images/mms-seminars/teams-logo.svg" },
      ],
    },
    {
      slug: "wicked-problems",
      title: "Wicked Problems",
      date: "June 26",
      presenter: "Dr. Ali R. Khan",
      setup:
        "A guest lecture from Dr. Ali R. Khan (Canada Research Chair in Computational Neuroimaging, Robarts Research Institute) on why the clean, controlled logic of the scientific method breaks down once you're dealing with real-world problems, and what to do once a problem crosses the line from \"messy\" into genuinely wicked: unstructured, cross-cutting, and relentless, per Rittel and Webber's foundational 1973 argument that most social problems are too complex for any single discipline to solve alone.",
      whatIDid:
        'Worked through a live 7-step group exercise on an assigned real-world problem, then stepped back to ask whether the problem even qualified as "wicked" in the first place.',
      whatStuck:
        "The session closed by naming four different problem-solving mindsets: engineering (solve your way forward), business (optimize your way forward), research (analyze your way forward), and design (build your way forward), then made the case that wicked problems need all four, not just the analytical one graduate training defaults to. That's a genuinely useful lens for interdisciplinary work, and set up later sessions on design thinking.",
      stepper: {
        steps: [
          "List the sub-issues inside the problem.",
          "Map the relationships between those sub-issues.",
          "Identify every stakeholder and their agenda.",
          "Brainstorm potential solutions.",
          "Name which disciplines each solution would actually require.",
          "Pick one solution and trace its ripple effects across the other issues.",
          "Build an evaluation plan for the chosen solution.",
        ],
        closing:
          'Then we stepped back and asked whether the problem even qualified as "wicked" in the first place.',
      },
    },
    {
      slug: "ai-tools",
      title: "AI Tools for Literature Searching",
      date: "July 31",
      presenter: "Jason Dyck, Western Libraries",
      setup:
        "A hands-on session with Western Libraries' Jason Dyck on using AI-powered search tools responsibly in academic literature searching: what they're good at, where they quietly fail, and how to stay skeptical of them.",
      whatIDid:
        'Tried two AI academic search tools live, Consensus and Elicit, then worked through the limitations: a 2025 BBC study found major AI chatbots gave answers with significant issues to roughly half of 100 test questions; a widely shared example had Google\'s AI summary telling users that geologists recommend eating a small rock daily, sourced unnoticed by the model from a satirical article; and a broader discussion of how bias enters AI search results not because the tools are "biased" on their own, but because the training data reflects existing inequities in whose research gets published, cited, and digitized in the first place.',
      whatStuck:
        "These tools are genuinely useful for getting oriented in unfamiliar literature fast, but they're still search tools, not authorities. Every AI-assisted search still needs the same skepticism and citation-checking discipline as a manual one. That connects directly to the same territory I dug into in 9505's AI Misconduct assignment: the risk isn't that these tools are useless, it's that their outputs look authoritative enough to skip the verification step.",
      tools: [
        {
          name: "Consensus",
          description: "AI research engine over 200M+ peer-reviewed papers. Free tier available.",
          database: "Semantic Scholar & OpenAlex",
          href: "https://consensus.app",
          logo: "/images/mms-seminars/consensus-logo.svg",
        },
        {
          name: "Elicit",
          description:
            "AI research assistant that builds a structured literature matrix. Exports to PDF, free tier with limited features.",
          database: "Semantic Scholar & OpenAlex",
          href: "https://elicit.com",
          logo: "/images/mms-seminars/elicit-logo.png",
        },
      ],
      toolsNote:
        'For contrast, general-purpose chatbots like ChatGPT were the running counterexample all session: not built for scholarly search, prone to fabricated ("hallucinated") citations.',
      consensusMeter: {
        label: "Illustrative example, not real search results",
        yes: 62,
        mixed: 23,
        no: 15,
      },
    },
    {
      slug: "connecting-with-patients",
      title: "Connecting With Patients",
      date: "August 7",
      presenter: "Dr. Sean Caine",
      setup:
        "A session from emergency physician Dr. Sean Caine (Woodstock Hospital; adjunct professor, Schulich Family and Community Medicine) on why physician-patient communication is so hard in practice. ED physicians spend over 80% of their time communicating, get interrupted every 6 to 8 minutes, and juggle multiple simultaneous conversations more than 10% of the time. The session looked at what the evidence actually says helps.",
      whatIDid:
        'Worked through Dr. Caine\'s synthesis of a JAMA 2020 study (Zulman et al.) built from a literature review, observed clinical encounters, interviews with non-medical experts, and a formal Delphi consensus process, identifying five concrete clinical practices that build genuine connection with patients. Discussed the "warmth and competence" framework, and covered real data points, like patients citing "feeling cared for" as more important than wait time, and sitting (vs. standing) at a patient\'s bedside measurably changing their perception of how much time a provider spent with them.',
      whatStuck:
        "Patient-centred care and patient satisfaction aren't the same thing, and the evidence shows the former reliably produces the latter, not the reverse. That reframing, plus the reference to Stone, Patton & Heen's Difficult Conversations, is a communication lens I want to carry into clinical and research conversations alike, not just patient-facing ones.",
      flipCards: [
        {
          front: "Can I trust you?",
          back: "A competence question: is this clinician skilled and honest enough to rely on?",
        },
        {
          front: "Are you committed to excellence?",
          back: "Also a competence question: is this clinician prepared, careful, and going to follow through?",
        },
        {
          front: "Do you care about me?",
          back: "A warmth question: does this clinician see me as a person, not just a case?",
        },
      ],
    },
  ] as FeaturedSeminar[],
  lightningRound: [
    {
      title: "Critical Reflection",
      presenter: "",
      date: "June 5",
      blurb:
        "Opening session on how to reflect honestly on your own growth over the program, setting up the self-assessment thread that runs through the whole series.",
    },
    {
      title: "Strengths",
      presenter: "",
      date: "June 19",
      blurb:
        "A strengths-based self-assessment session to identify personal working strengths ahead of team-based coursework like 9503's policy simulation.",
    },
    {
      title: "Citations & Synthesis",
      presenter: "",
      date: "July 10",
      blurb:
        "A Western Libraries session on what makes a citation actually useful, not just proof a source exists, but a synthesis of what it contributes, drawn together into your own argument rather than just listed.",
    },
    {
      title: "Literature Reviews",
      presenter: "",
      date: "July 17",
      blurb:
        "Structuring and writing an academic literature review, feeding directly into work like 9503's SGBA+ environmental scan.",
    },
    {
      title: "ePortfolios",
      presenter: "",
      date: "July 24",
      blurb:
        "How to build a professional ePortfolio/dossier, the very page you're looking at right now.",
    },
    {
      title: "Own Your Future",
      presenter: "",
      date: "August 14",
      blurb: "Career planning and next-step strategy for life after the MMS program.",
    },
  ] as LightningSeminar[],
  reflection: [
    "If the graded courses taught me specific frameworks, 9700 was where I picked up the operating skills underneath all of them, the kind of thing that doesn't show up on a transcript but shows up every week in practice. Working through the Digital Literacy checklist on my own turned out to be one of the more useful hours of the summer, in a boring-but-true way: half of graduate work is just knowing your tools well enough that they get out of your way.",
    "The Wicked Problems and AI Tools sessions ended up talking to each other more than I expected. Both were really about the same question: how do you stay honest about the limits of a tool or a method, whether that's the scientific method hitting a genuinely messy real-world problem, or an AI search tool confidently returning a plausible-looking but wrong answer. Dr. Caine's session closed the loop by pointing the same instinct back at people: connection with a patient is built the same way trust in a source is, by checking your assumptions rather than taking the confident version at face value.",
    'Heading into rotations and the capstone, I want to carry that same instinct forward, treating every tool, source, and conversation with the same "can I actually trust this, and did I check" bar these seminars kept putting in front of me.',
  ],
};

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
    {
      src: "/images/mms-lab/lab-bench-partners.jpg",
      alt: "Asghar Khan with his lab bench partners",
    },
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
      images: [
        {
          src: "/images/mms-lab/antibody-rocking-tray.jpg",
          alt: "Rocking tray used for antibody incubation during Week 9's protein detection protocol",
        },
      ],
    },
  ],
  reflection:
    "I did labs throughout undergrad, but honestly, I often felt like I was just going through the motions. I would follow the protocol, do the calculations, and try to get the right answer for a participation mark without always understanding the bigger picture. The classes were large, it was difficult to hear the TA, and there was rarely enough time to ask questions. This teaching lab felt completely different. The smaller groups gave me the chance to actually ask questions and understand why we were doing each experiment. Working with state-of-the-art equipment also made the science feel much more real, instead of something I had only learned about in lectures. I found myself genuinely enjoying the experiments because I understood what I was doing and why it mattered. I came out of the experience with a much better understanding of research in a lab setting and a greater appreciation for hands-on science.",
};

export type JournalClubSession = {
  title: string;
  task: string;
  actions: string;
  results: string;
  links?: { label: string; href: string }[];
};

export const journalClub = {
  title: "Journal Club",
  description:
    "A weekly, student-run journal club where our small group met for two hours to work through one research article in depth. Each week rotated a facilitator to lead discussion, a note-taker to record it, and one or two other members contributing questions, with roles rotating so everyone got a turn leading.",
  selectedWork: [
    {
      title:
        'Facilitating: "Product Differentiation by Analysis of DNA Melting Curves during the Polymerase Chain Reaction" (Ririe et al., 1997)',
      task: "Co-facilitate a two-hour discussion of a methods paper on using DNA melting curve analysis to distinguish specific PCR products, a technique still used in molecular biology labs decades later.",
      actions:
        "Walked the group through the paper's methods and results: how dye concentration and temperature shift the melting curve, and how curve shape can tell specific PCR products apart from primer oligomers. Prepared discussion questions on the paper's strengths and limitations to keep the conversation moving.",
      results:
        "Feedback described the discussion as thorough and well organized. I can now take a dense methods paper and lead a group through it clearly, a skill that carries over to any setting where I need to understand complex research and discuss what it actually means.",
      links: [
        {
          label: "Ririe et al., 1997, Analytical Biochemistry",
          href: "https://pubmed.ncbi.nlm.nih.gov/9056205/",
        },
      ],
    },
    {
      title:
        'Facilitating: "Human Adipose Tissue Protein Analyses Using Capillary Western Blot Technology" (Lu, Alfred & Jensen, 2017)',
      task: "Solo-facilitate discussion of a paper comparing a newer automated capillary western blot method (Wes) against traditional western blotting for measuring proteins in human adipose tissue.",
      actions:
        "Walked the group through the paper's three protein measurements using its own figures rather than reciting findings as bullet points. Asked questions that pushed past summary: whether strong correlation between the two methods was actually enough to call them interchangeable, and which method the group would choose themselves.",
      results:
        "Feedback highlighted the figure-based walkthrough and the questions that pushed past the paper's own content. I can now push a research discussion beyond summary, toward what the findings actually imply and whether the evidence holds up.",
      links: [
        {
          label: "Lu, Alfred & Jensen, 2017, Nutrition & Diabetes",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5916899/",
        },
      ],
    },
  ] as JournalClubSession[],
  alsoInThisActivity:
    "Beyond the two sessions above, journal club ran most weeks across the summer with the same core group working through a new molecular biology methods paper each time. On weeks I was not facilitating, I contributed as a discussion participant, asked questions, and helped the group work through the methods, results, strengths, and limitations of each paper.",
  reflection: [
    "Facilitating journal club was honestly a little intimidating at first because I was not sure how I was going to lead a discussion for over an hour and still keep everyone engaged. The first time, I co-facilitated with an exchange medical student, which made it easier to ease into the role and share the responsibility of keeping the discussion moving. By the second session, I felt confident enough to facilitate the full discussion on my own. What surprised me was how much there actually was to talk about once I knew the paper well. When I felt confident in the material, I did not have to worry as much about what I was going to say next because I could respond to questions, explain the figures, connect different parts of the study, and let the discussion develop naturally.",
    "The feedback from both sessions also helped me see what I could improve. After the first, I realized how helpful it is to have the figure on screen while discussing it. The second time, the feedback focused more on delivery, including projecting my voice, making more eye contact, and spending enough time explaining the methods before moving into the results. Overall, I found that being well prepared made me much more confident and made it easier to actually lead a conversation rather than just present a paper.",
    "I also found it interesting to read papers from different time periods and see how scientific writing and reporting have changed. Some of the older papers felt much more formal and were harder to follow if you were not already familiar with the topic. There were also times where I felt that certain claims went a little further than what the results actually showed. At the same time, some of the methods introduced in these papers are still used today. Seeing that made me appreciate how important those innovations were when they were introduced, while also showing me how the way we evaluate and communicate research has continued to develop.",
  ],
};

export const placeholderNote = "Content for this section is in progress and will be added shortly.";
