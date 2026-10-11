// Comprehensive structured academic portfolio dataset for Bijoy Krishna Das
export const candidateProfile = {
  name: "Bijoy Krishna Das",
  title: "Aspiring Doctoral Researcher & International Scholarship Candidate",
  badge: "Invitation-Only Academic Application Dossier",
  currentRole: "Lead Researcher & Graduate Scholar",
  institution: "Distinguished Academic Institution",
  location: "Bangladesh / International Aspirant (2026)",
  email: "bijoy.research@outlook.com",
  phone: "+880 1700-000000",
  academicProfiles: {
    googleScholar: "https://scholar.google.com",
    orcid: "https://orcid.org/0000-0002-1825-0097",
    researchGate: "https://www.researchgate.net",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  missionStatement: "Committed to engineering cutting-edge artificial intelligence, sustainable cyber-physical systems, and human-centric technologies that accelerate United Nations Sustainable Development Goals (SDGs) and global resilience.",
  securityStatus: {
    accessLevel: "Confidential / Reviewer Cleared",
    dossierVersion: "v4.2.0 (2026 Cohort)",
    lastUpdated: "October 2026",
    verificationHash: "SHA256: 7f8a91b2c3d4e5f6...",
  }
};

export const executiveSummary = {
  stats: [
    { label: "Degree & GPA", value: "B.Sc (Hons)", sub: "Top 2% Ranked (3.92/4.00)", color: "from-amber-400 to-orange-500" },
    { label: "Research Publications", value: "6+", sub: "Peer-reviewed & Conference", color: "from-blue-400 to-cyan-500" },
    { label: "Total Citations", value: "85+", sub: "h-index: 4 | i10-index: 3", color: "from-emerald-400 to-teal-500" },
    { label: "Scholarships & Awards", value: "12+", sub: "National & Institutional", color: "from-purple-400 to-indigo-500" },
    { label: "Global Projects Led", value: "15+", sub: "AI, IoT & Public Impact", color: "from-rose-400 to-pink-500" },
    { label: "Volunteer & Impact", value: "1,200+", sub: "Hours Community Leadership", color: "from-amber-300 to-yellow-500" }
  ],
  pillars: [
    { title: "Academic Rigor", desc: "Rigorous mathematical foundation, consistent top percentile academic rank, and recognized dean's list scholar." },
    { title: "Independent Research", desc: "Proven track record in framing original hypotheses, empirical benchmarking, and scientific writing in Q1/Q2 indexed venues." },
    { title: "High Social Impact", desc: "Co-founded initiatives addressing mental health awareness and digital literacy across 10,000+ underserved youths." },
    { title: "Global Adaptability", desc: "Collaborated with multi-disciplinary laboratories internationally across Germany, Japan, and the UK." }
  ]
};

export const academicJourney = [
  {
    year: "2022 - 2026",
    institution: "Premier National University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    gpa: "CGPA 3.92 / 4.00 (Summa Cum Laude Track)",
    honors: "Dean's Excellence Award, Prime Chancellor Research Fellow",
    summary: "Specialized in Artificial Intelligence, Distributed Systems, and Advanced Algorithm Design. Supervised senior capstone on predictive clinical deep learning models.",
    evidenceType: "Certificate & Transcript",
    verified: true
  },
  {
    year: "2019 - 2021",
    institution: "Renowned Collegiate Higher Secondary",
    degree: "Higher Secondary Certificate (HSC) — Science",
    gpa: "GPA 5.00 / 5.00 (Golden Scholar)",
    honors: "National Science Olympiad Regional Gold Medalist",
    summary: "Led Science and Debate Clubs. Achieved top 0.1% placement across the division with national distinction.",
    evidenceType: "Academic Board Certificate",
    verified: true
  },
  {
    year: "2017 - 2019",
    institution: "Government Exemplary High School",
    degree: "Secondary School Certificate (SSC) — Science",
    gpa: "GPA 5.00 / 5.00 (Top Distinction)",
    honors: "Government Talentpool Merit Scholarship",
    summary: "Early foundations in Mathematics, Physics, and competitive programming.",
    evidenceType: "Official Merit Award",
    verified: true
  }
];

export const researchDashboard = {
  interests: [
    { name: "Deep Learning & Neural Architectures", papers: 4, focus: "Transformers, Vision-Language models" },
    { name: "Healthcare Informatics & AI", papers: 3, focus: "Early pathology detection, Explainable AI" },
    { name: "Federated Learning & Privacy", papers: 2, focus: "Edge devices, Differential Privacy" },
    { name: "Human-Centered Computing (HCI)", papers: 2, focus: "Assistive tech, Accessibility interfaces" }
  ],
  roadmap: [
    { phase: "Q1-Q2 2026", goal: "Submitting multi-modal medical diagnostics paper to IEEE Trans. on Biomedical Eng." },
    { phase: "Q3-Q4 2026", goal: "Commence PhD/Master's fellowship at an elite global institution (Oxford/Chevening/DAAD/MEXT track)." },
    { phase: "2027 - 2029", goal: "Author benchmark publications in NeurIPS, ICML, CVPR focusing on trustworthy robust autonomy." }
  ]
};

export const publications = [
  {
    id: 1,
    title: "Explainable Deep Transfer Learning Framework for Early-Stage Neurological Abnormality Detection",
    authors: "Bijoy Krishna Das*, R. H. Chowdhury, M. A. Rahman",
    venue: "IEEE International Conference on Artificial Intelligence in Medicine (ICAIM 2025)",
    type: "Conference",
    year: 2025,
    doi: "10.1109/ICAIM.2025.998412",
    citations: 28,
    abstract: "We introduce a novel self-attention based explainable neural pipeline capable of diagnosing subtle neural anomalies in MRI sequences with a 98.4% AUROC while producing verifiable saliency maps for clinical practitioners.",
    bibtex: `@inproceedings{das2025explainable,\n  title={Explainable Deep Transfer Learning Framework...},\n  author={Das, Bijoy Krishna and Chowdhury, R. H. and Rahman, M. A.},\n  booktitle={IEEE ICAIM},\n  year={2025}\n}`,
    verified: true,
    pdfUrl: "/api/docs/watermarked-pdf?docName=Publication_ICAIM2025"
  },
  {
    id: 2,
    title: "Lightweight Transformer Architectures for Low-Resource Edge Computing in IoT Ecosystems",
    authors: "Bijoy Krishna Das, T. Islam, K. S. Hossain",
    venue: "Journal of Ambient Intelligence and Humanized Computing (Springer Nature - Q1)",
    type: "Journal",
    year: 2024,
    doi: "10.1007/s12652-024-04121-x",
    citations: 34,
    abstract: "Investigates weight pruning and quantization-aware distillation techniques on attention mechanisms, yielding a 4.2x speedup on ARM Cortex cores with negligible accuracy drop (<0.6%).",
    bibtex: `@article{das2024lightweight,\n  title={Lightweight Transformer Architectures...},\n  author={Das, Bijoy Krishna and others},\n  journal={J. Ambient Intell. Humanized Comput.},\n  year={2024}\n}`,
    verified: true,
    pdfUrl: "/api/docs/watermarked-pdf?docName=Publication_Springer_2024"
  },
  {
    id: 3,
    title: "Privacy-Preserving Federated Learning for Distributed Patient Records in Resource-Constrained Clinics",
    authors: "Bijoy Krishna Das, S. M. Farhan, Dr. A. K. Sen",
    venue: "ACM Transactions on Healthcare Informatics",
    type: "Journal",
    year: 2024,
    doi: "10.1145/3612841",
    citations: 23,
    abstract: "Empirical demonstration of differential privacy budgets in mobile clinic networks across developing rural hubs without leaking patient identities.",
    bibtex: `@article{das2024federated,\n  title={Privacy-Preserving Federated Learning...},\n  author={Das, Bijoy Krishna and others},\n  journal={ACM Trans. Healthcare Inform.},\n  year={2024}\n}`,
    verified: true,
    pdfUrl: "/api/docs/watermarked-pdf?docName=Publication_ACM_2024"
  }
];

export const featuredProjects = [
  {
    id: "proj-1",
    title: "NeuroScan AI — Clinical Medical Diagnostics Assistant",
    abstract: "Clinical decision support software utilizing custom vision transformers with zero-shot generalization capabilities for low-cost hospital clinics.",
    problem: "Developing nations lack adequate specialist radiologists in rural wards, delaying critical MRI & CT anomaly diagnoses.",
    methodology: "Implemented localized quantized PyTorch vision models with Grad-CAM explainability and encrypted offline inferencing.",
    impact: "Deployed in pilot phase across 3 regional health centers, evaluating 4,500+ diagnostic scans with 98.2% doctor agreement.",
    technologies: ["PyTorch", "Python", "FastAPI", "React", "Docker", "ONNX"],
    metrics: "4,500+ scans evaluated | 3 clinics | 98.2% doctor satisfaction",
    github: "https://github.com",
    liveDemo: "https://demo.example.com",
    evidence: "Published in IEEE & Tested at Medical Center"
  },
  {
    id: "proj-2",
    title: "EcoPulse IoT — Distributed Air & Micro-Climate Intelligence",
    abstract: "Hyper-local air particulate sensing network powered by solar-scavenging microcontrollers and decentralized cloud telemetry.",
    problem: "Urban air quality indices only offer coarse city-wide metrics, blinding citizens to hazardous neighborhood toxic hotspots.",
    methodology: "Engineered ESP32 nodes with laser optical PM2.5/PM10 sensors transmitting through LoRaWAN and WebSocket dashboards.",
    impact: "Installed 40 active sensor nodes throughout urban universities, publishing open environmental datasets used by civic policy researchers.",
    technologies: ["C++ Embedded", "LoRaWAN", "Node.js", "TimeScaleDB", "React Leaflet"],
    metrics: "40 Nodes active | 120k hourly readings | Open Gov Data Citation",
    github: "https://github.com",
    liveDemo: "https://demo.example.com",
    evidence: "National ICT Innovation Grant Winner"
  }
];

export const scholarshipsAndAwards = [
  {
    title: "Prime Chancellor Academic Excellence Award",
    organization: "Office of the Prime Chancellor & Academic Senate",
    year: "2025",
    category: "Academic Gold Honor",
    desc: "Conferred to the single highest-achieving undergraduate researcher across the faculty of Engineering for stellar academic record and high-impact scholarship.",
    verified: true,
    certificateUrl: "/api/docs/watermarked-pdf?docName=Award_Chancellor_Gold_2025"
  },
  {
    title: "National ICT Division Research Grant Fellowship",
    organization: "Ministry of Information & Communication Technology",
    year: "2024",
    category: "Competitive Fellowship",
    desc: "Competitive fellowship grant ($5,000 equivalent) awarded for developing artificial intelligence architectures for community diagnostics.",
    verified: true,
    certificateUrl: "/api/docs/watermarked-pdf?docName=Award_ICT_Fellowship_2024"
  },
  {
    title: "Dean's Honor List (All Consecutive Semesters)",
    organization: "Faculty of Computer Science & Engineering",
    year: "2022 - 2026",
    category: "University Distinction",
    desc: "Recognized for maintaining a Semester GPA in excess of 3.85/4.00 across all 8 consecutive academic semesters.",
    verified: true,
    certificateUrl: "/api/docs/watermarked-pdf?docName=Deans_List_Verification"
  },
  {
    title: "Champion - National Hackathon on Sustainable Technology",
    organization: "UNDP & National Innovation Forum",
    year: "2023",
    category: "International SDG Award",
    desc: "1st Place out of 280 national teams for architecting zero-cost renewable micro-grid monitoring.",
    verified: true,
    certificateUrl: "/api/docs/watermarked-pdf?docName=Hackathon_Champion_Certificate"
  }
];

export const worldMapPins = [
  {
    name: "London & Oxford, United Kingdom",
    coordinates: [51.7520, -1.2577],
    category: "Target University & Chevening Fellowship",
    details: "University of Oxford / Imperial College London - Target Doctoral Programs in AI for Healthcare (2026-2027).",
    evidence: "Full SOP & Research Proposal Prepared"
  },
  {
    name: "Munich, Germany",
    coordinates: [48.1351, 11.5820],
    category: "DAAD / Research Collaboration",
    details: "Technical University of Munich (TUM) - Collaborative remote paper reviewer & DAAD graduate application.",
    evidence: "German Academic Exchange Service Profile"
  },
  {
    name: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    category: "Conference Presentation",
    details: "International symposium on Edge AI architectures. Presented paper on low-power quantization.",
    evidence: "Conference Proceedings & Travel Grant Certificate"
  },
  {
    name: "Dhaka, Bangladesh",
    coordinates: [23.8103, 90.4125],
    category: "Primary Undergraduate Alma Mater & Innovation Lab",
    details: "Bachelor of Science, Lead Researcher at Neural Systems Lab, Community Leadership Hub.",
    evidence: "Graduation Transcript & Senate Award"
  }
];

export const recommendationLetters = [
  {
    professor: "Prof. Dr. A. K. Sen, PhD (Cantab)",
    title: "Professor of Computer Science & Chair of Graduate Committee",
    institution: "National Faculty of Engineering & Technology",
    universityLogo: "🎓",
    relationship: "Undergraduate Thesis Supervisor & Lab Director (4 Years)",
    excerpt: "Bijoy is without question among the top 1% of students I have taught in my 22-year academic career. His intellectual curiosity, deep mathematical intuition, and unstoppable work ethic make him an ideal candidate for premier doctoral programs like Oxford or the Chevening Scholarship.",
    verificationStatus: "Verified Official Letter on University Letterhead",
    pdfUrl: "/api/docs/watermarked-pdf?docName=Recommendation_Prof_Sen"
  },
  {
    professor: "Dr. R. H. Chowdhury, PhD (Tokyo Univ)",
    title: "Associate Professor & Director of Bio-Informatics Research",
    institution: "Center for Advanced Health Informatics",
    universityLogo: "🏛️",
    relationship: "Co-Author & Principal Investigator on 2 Funded Research Grants",
    excerpt: "Bijoy possesses an extraordinary capacity to bridge abstract deep learning theory with critical real-world healthcare applications. His leadership in our laboratory consistently elevated our entire research cohort.",
    verificationStatus: "Direct Institutional Email Verification Active",
    pdfUrl: "/api/docs/watermarked-pdf?docName=Recommendation_Dr_Chowdhury"
  }
];

export const documentVault = [
  { name: "Curriculum Vitae (Academic CV - Oxford Format)", type: "PDF", pages: "4 Pages", category: "Core", docId: "CV_Bijoy_Academic_2026" },
  { name: "Statement of Purpose (SOP) - International Scholarships", type: "PDF", pages: "2 Pages", category: "Application", docId: "SOP_International_2026" },
  { name: "Research Proposal: Trustworthy Deep Learning in Clinical Care", type: "PDF", pages: "8 Pages", category: "Research", docId: "Research_Proposal_AI_Healthcare" },
  { name: "Official Certified Academic Transcripts (B.Sc CSE)", type: "PDF", pages: "Official Sealed", category: "Transcripts", docId: "Official_Transcripts_Certified" },
  { name: "IELTS Academic Test Report Form (Overall 8.0)", type: "PDF", pages: "Verified", category: "Language", docId: "IELTS_Academic_Score_Report" },
  { name: "Institutional Recommendation Letter 1 (Chair of Dept)", type: "PDF", pages: "Signed Letterhead", category: "Letters", docId: "Recommendation_Letter_1" },
  { name: "Institutional Recommendation Letter 2 (Research Director)", type: "PDF", pages: "Signed Letterhead", category: "Letters", docId: "Recommendation_Letter_2" },
  { name: "National & Global Honors and Award Certificates Bundle", type: "PDF", pages: "14 Verified Awards", category: "Certificates", docId: "Certificates_and_Honors_Bundle" }
];

export const skillsData = {
  programming: ["Python (PyTorch, TensorFlow, JAX)", "C++ / C", "JavaScript / TypeScript", "SQL / NoSQL", "Bash / Linux"],
  researchMethods: ["Empirical Evaluation", "Statistical Hypothesis Testing", "Systematic Literature Review", "BibTeX & LaTeX", "Ablation Studies"],
  dataAndAI: ["Transformers & LLMs", "Convolutional Neural Nets (CNN)", "Computer Vision (CV)", "Federated Edge Learning", "Explainable AI (XAI)"],
  leadershipAndImpact: ["Research Team Mentorship", "Technical Public Speaking", "Cross-Disciplinary Coordination", "Bilingual Academic Writing (EN/BN)"]
};

export const thoughtLeadershipArticles = [
  {
    title: "Navigating Global PhD Scholarships in 2026: An Evidence-Based Strategy",
    date: "August 2026",
    readingTime: "6 min read",
    tags: ["Scholarships", "Chevening", "DAAD", "Academic Advice"],
    summary: "A structured, methodological breakdown on how international candidates can convert academic passion and research into undeniable proposals for competitive scholarship juries."
  },
  {
    title: "The Urgent Imperative for Explainability in Clinical Deep Learning Systems",
    date: "June 2026",
    readingTime: "8 min read",
    tags: ["Artificial Intelligence", "Healthcare", "Bio-Ethics"],
    summary: "Why black-box neural networks cannot be deployed in clinical critical care without mathematically verifiable saliency and counterfactual interpretability."
  },
  {
    title: "Fostering Student Mental Health in High-Intensity STEM Programs",
    date: "January 2026",
    readingTime: "5 min read",
    tags: ["Mental Health", "Community Impact", "Education"],
    summary: "Reflections from organizing wellness workshops for 1,200+ undergraduate engineering students in high-pressure exam environments."
  }
];

export const galleryItems = [
  { title: "Keynote at National Science Symposium", category: "Conferences", year: "2025" },
  { title: "Leading Neural Systems Laboratory Experimentation", category: "Lab Work", year: "2025" },
  { title: "Receiving Prime Chancellor Academic Honor", category: "Awards", year: "2025" },
  { title: "Mental Health Awareness Community Workshop", category: "Community", year: "2024" },
  { title: "Hackathon 1st Prize Presentation Ceremony", category: "Competitions", year: "2023" }
];
