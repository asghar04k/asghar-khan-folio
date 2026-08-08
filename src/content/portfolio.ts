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
    title: "Customer Service Representative (Part-time, Remote)",
    org: "Call Centre Guys",
    location: "Toronto, ON",
    dates: "May 2023 – May 2025",
    year: "2023–25",
    description:
      "Managed high-volume inbound calls and digital communications across multiple service areas, including healthcare-related clients.",
  },
  {
    title: "AI Research Assistant (Project-based)",
    org: "North York General Hospital",
    location: "Toronto, ON",
    dates: "May 2023 – Aug 2025",
    year: "2023–25",
    description:
      "Managed large-scale screening and data organization for AI-focused research, collaborating with interdisciplinary healthcare teams.",
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
    title: "Clinic & Patient-Visiting Volunteer",
    org: "London Health Sciences Centre",
    location: "London, ON",
    dates: "Apr 2025 – Present",
    year: "2025–",
    description:
      "Patient navigation and clinic flow in orthopaedic outpatient and lab units; patient support in inpatient and palliative care through regular visits.",
  },
];

export const otherVolunteering = [
  "Volunteer Notetaker — Accessibility Services, Western University",
  "Youth Volunteer — Jaffari Community Centre",
  "Volunteer — Babul Hawaij Relief Foundation",
  "Student Volunteer — Mississauga Food Bank",
];

export type Project = {
  title: string;
  org: string;
  year: string;
  summary: string;
  details?: string[];
  links?: { label: string; href: string }[];
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
  },
  {
    title: "Practical Applications of Artificial Intelligence in Geriatric Medicine: A Scoping Review",
    org: "North York General Hospital",
    year: "2025",
    summary:
      "Scoping review of applied AI in geriatric care, completed alongside the AI research assistantship at North York General Hospital.",
    details: [
      "Presented at WUHRC 2025, and as an oral talk plus poster at T-CAIREM (Temerty Centre for AI Research and Education in Medicine, University of Toronto) 2025.",
      "Co-presented with Sai-Amrit Maharaj, MHSc, CSPHP, B.Sc(hon).",
      "Supervised and mentored by Dr. Nihal Haque, MD FRCPC (Geriatrician, North York General Hospital) and Dr. Kelly Kay (Executive Director, Provincial Geriatrics Leadership Ontario).",
    ],
  },
  {
    title: "AI Fall Detection — Systematic/Literature Review",
    org: "Fallyx",
    year: "In progress",
    summary:
      "Review work connected to Fallyx, an AI fall-detection startup, including a team-led oral presentation.",
    details: ["Team details, paper link, abstract link, and presentation photos to be added."],
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
    { title: "Luxe Detailing", epitaph: "A car detailing company. Details coming soon." },
    { title: "Drip Apparel", epitaph: "A clothing company. Details coming soon." },
    { title: "Safety Stuff Plus", epitaph: "Details coming soon." },
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
    title: "Communicating Science in the 21st Century",
    description: "Translating research for public, clinical, and policy audiences.",
  },
  {
    title: "Designing, Analyzing & Interpreting Medical Science Research",
    description: "Study design, analysis, and critical interpretation of medical science research.",
  },
  { title: "Science Policy", description: "How evidence moves into policy and practice." },
  {
    title: "Ethical Research Practices",
    description: "Research ethics frameworks and their application in practice.",
  },
  {
    title: "Academic Integrity and Professionalism",
    description: "Professional conduct and integrity across research settings.",
  },
  { title: "Data Science", description: "Applied data handling and analysis for health research." },
  {
    title: "Research Excellence Through Diversity",
    description: "Equity, diversity, and inclusion as drivers of research quality.",
  },
  {
    title: "Intellectual Property, Implementation & Commercialization",
    description: "From discovery to implementation and commercialization pathways.",
  },
];

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
  {
    title: "Lab Bootcamp",
    description: "An intensive hands-on laboratory bootcamp early in the program.",
  },
];

export const mmsReflections = [
  {
    date: "May 2026",
    title: "Starting the program",
    body: "Beginning the Master of Medical Sciences felt like stepping from asking questions about care into being asked to answer them. The first weeks have been about learning how this program wants me to think: less about collecting experiences, more about examining them carefully and writing them down for someone who wasn't in the room.",
  },
];

export const placeholderNote = "Content for this section is in progress and will be added shortly.";
