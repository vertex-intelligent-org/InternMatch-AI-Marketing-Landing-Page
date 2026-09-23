import { STORE_CONFIG, STORE_RELEASE } from "./store";

export const SITE_CONFIG = {
  name: "InternMatch AI",
  tagline: "Stop searching. Start matching.",
  description:
    "AI-powered internship matching and application support for university students.",
  url: "https://internmatch.college",
  builders: {
    names: ["Mohamad Barakat", "Selenur Yurdakul"],
    title: "Co-founders / Builders",
    context:
      "Built by Üsküdar University students Mohamad Barakat and Selenur Yurdakul, members of AISS Club.",
    shortContext: "Built by Üsküdar University students · Members of AISS Club",
    milestone: "Originally developed for RevenueCat Shipaton 2026",
  },
  status: STORE_RELEASE.platformStatus,
  languages: ["English", "Türkçe", "العربية"],
};

/* ==========================================================================
   OFFICIAL COLOR SYSTEM TOKENS
   Primary: #467A8F
   ========================================================================== */
export const BRAND_COLORS = {
  primary: "#467A8F",
  range: {
    50: "#F2F7F8",
    100: "#E3EEF1",
    200: "#C7DDE3",
    300: "#A3C7D1",
    400: "#78A9B8",
    500: "#467A8F",
    600: "#3D6C7F",
    700: "#345B6B",
    800: "#2D4C59",
    900: "#263F49",
  },
  neutrals: {
    background: "#F7F7F5",
    surface: "#FFFFFF",
    textPrimary: "#171A1C",
    textSecondary: "#656B70",
    border: "#E5E7E8",
  },
  darkTechnical: {
    background: "#171C1F",
    surface: "#20272B",
    text: "#F5F6F4",
  },
  iconOffWhite: "#ECEBE7",
};

/* ==========================================================================
   CENTRAL PRODUCT / EXTERNAL URLs
   Do not populate unknown URLs. The UI gracefully renders missing URLs as
   "Coming soon" or disabled states. Never invent URLs or emails.
   ========================================================================== */
export const EXTERNAL_LINKS = {
  // Demo video source (e.g. /media/internmatch-demo.mp4 or YouTube link)
  DEMO_URL: null as string | null,

  // Official GitHub marketing website repository URL
  GITHUB_URL: "https://github.com/vertex-intelligent-org/InternMatch-AI-Marketing-Landing-Page" as string | null,

  // Support company website
  VERTEX_URL: "https://vertexintelligent.com" as string,

  // Official AISS Club URL
  AISS_URL: null as string | null,

  // Builder profile URLs
  MOHAMAD_LINKEDIN_URL: null as string | null,
  MOHAMAD_GITHUB_URL: null as string | null,
  MOHAMAD_PORTFOLIO_URL: null as string | null,

  SELENUR_LINKEDIN_URL: null as string | null,
  SELENUR_GITHUB_URL: null as string | null,
  SELENUR_PORTFOLIO_URL: null as string | null,

  // App store links (only rendered when real URLs exist)
  APP_STORE_URL: STORE_CONFIG.apple.url,
  PLAY_STORE_URL: STORE_CONFIG.googlePlay.url,

  // Official contact address: MUST remain null until explicitly provided
  CONTACT_EMAIL: null as string | null,
};

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
    { label: "Team", href: "#team" },
];

export const BUILDERS = [
  {
    name: "Mohamad Barakat",
    role: "Co-founder / Builder",
    image: "/media/team/mohamad-barakat.png",
    areas: ["Backend", "AI Architecture", "Infrastructure", "Product"],
    links: {
      linkedin: EXTERNAL_LINKS.MOHAMAD_LINKEDIN_URL,
      github: EXTERNAL_LINKS.MOHAMAD_GITHUB_URL,
      portfolio: EXTERNAL_LINKS.MOHAMAD_PORTFOLIO_URL,
    },
  },
  {
    name: "Selenur Yurdakul",
    role: "Co-founder / Builder",
    image: "/media/team/selenur-yurdakul.jpg",
    areas: ["Mobile", "Frontend", "Product Experience"],
    links: {
      linkedin: EXTERNAL_LINKS.SELENUR_LINKEDIN_URL,
      github: EXTERNAL_LINKS.SELENUR_GITHUB_URL,
      portfolio: EXTERNAL_LINKS.SELENUR_PORTFOLIO_URL,
    },
  },
];

export const PROBLEMS = [
  {
    number: "01",
    title: "Too many listings",
    description:
      "Students browse endless opportunities that may not be relevant to their profile.",
  },
  {
    number: "02",
    title: "No clear fit",
    description:
      "A job description tells you what a company wants — not how your actual background compares.",
  },
  {
    number: "03",
    title: "Applications everywhere",
    description:
      "CVs, cover letters, submissions and interviews become fragmented across different tools.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Upload your CV",
    format: "PDF or DOCX",
    description: "Upload once. InternMatch extracts and understands your real academic and project background.",
    badge: "1-Click Intake",
  },
  {
    step: "02",
    title: "Build your profile",
    format: "Structured Data",
    description: "InternMatch organizes skills, education, experience and projects without repetitive manual entry.",
    badge: "Candidate Schema",
  },
  {
    step: "03",
    title: "Discover relevant matches",
    format: "Hybrid Match Scoring",
    description: "Internships are compared against your actual profile using structured skill data and semantic similarity.",
    badge: "Match Engine",
  },
  {
    step: "04",
    title: "Understand why",
    format: "Grounded Analysis",
    description: "See your clear strengths, matching skills, missing requirements, and actionable recommendations.",
    badge: "Explainability",
  },
  {
    step: "05",
    title: "Apply and track",
    format: "End-to-End Flow",
    description: "Prepare tailored application content and monitor progress from saved to interview stages.",
    badge: "Pipeline Tracker",
  },
];

export const PRODUCT_STORIES = [
  {
    id: "cv-analysis",
    eyebrow: "CV ANALYSIS",
    headline: "Your CV becomes your profile.",
    subheadline: "Upload once. Build from what already represents you.",
    copy: "InternMatch turns your CV into a structured candidate profile so you don't repeatedly enter the same information.",
    visualType: "cv-profile",
  },
  {
    id: "matchups",
    eyebrow: "MATCHUPS",
    headline: "Know where you actually fit.",
    subheadline: "Multi-layered relevance rather than keyword lottery.",
    copy: "InternMatch combines skill alignment, semantic similarity and candidate preferences to surface more relevant internship opportunities.",
    visualType: "matchups",
  },
  {
    id: "why-you-match",
    eyebrow: "WHY YOU MATCH",
    headline: "A percentage isn't enough.",
    subheadline: "Actionable gap analysis before you hit apply.",
    copy: "See which skills align, what's missing, and what you can improve before applying.",
    visualType: "why-match",
  },
  {
    id: "application-support",
    eyebrow: "APPLICATION SUPPORT",
    headline: "Go from match to application faster.",
    subheadline: "Contextual preparation grounded in truth.",
    copy: "Create context-aware application content grounded in your real background and the internship requirements.",
    visualType: "app-support",
  },
  {
    id: "application-tracking",
    eyebrow: "APPLICATION TRACKING",
    headline: "Keep every application in one place.",
    subheadline: "From discovery to final decision.",
    copy: "Follow progress from Saved to Applied, Interviewing and final outcomes.",
    visualType: "tracker",
  },
];

export const BENEFITS = [
  {
    title: "Upload once",
    description: "Your CV becomes the foundation of your candidate profile.",
    tag: "Time-Saving",
  },
  {
    title: "Personalized matches",
    description: "Discover opportunities relevant to your actual background.",
    tag: "High Signal",
  },
  {
    title: "Understand your gaps",
    description: "See missing skills before applying so you can prepare strategically.",
    tag: "Transparency",
  },
  {
    title: "Apply with context",
    description: "Prepare role-aware application content tailored to real job criteria.",
    tag: "Preparation",
  },
  {
    title: "Stay organized",
    description: "Keep applications and interview progress in one structured pipeline.",
    tag: "Control",
  },
  {
    title: "Use it your way",
    description: "Available in English, Turkish, and Arabic.",
    tag: "Multilingual",
  },
];

export const VALIDATION_METRICS = [
  {
    value: "1087",
    label: "Backend tests passed",
    subtext: "Automated backend validation suite",
    tag: "Backend automated tests",
  },
  {
    value: "Protected",
    label: "AI quota lifecycle",
    subtext: "Reservation, settlement, idempotency and stale recovery",
    tag: "Backend enforced",
  },
  {
    value: "Tracked",
    label: "AI usage telemetry",
    subtext: "Tokens, estimated cost, latency, status and errors",
    tag: "Operational visibility",
  },
  {
    value: "iOS + Android",
    label: "Mobile architecture",
    subtext: "Cross-platform React Native / Expo application",
    tag: "Cross-platform",
  },
];

export const TECH_STACK_PILLS = [
  "React Native / Expo",
  "FastAPI",
  "PostgreSQL + pgvector",
  "Gemini",
  "RevenueCat",
];

export const JOURNEY_MILESTONES = [
  {
    stage: "Shipaton Idea",
    status: "completed",
    description:
      "Original concept born at RevenueCat Shipaton 2026.",
    cue: "Milestone reached",
  },
  {
    stage: "Working Product",
    status: "completed",
    description:
      "Core matching engine and candidate profile parsing operational.",
    cue: "Milestone reached",
  },
  {
    stage: "Real-Device Validation",
    status: "completed",
    description:
      "Validated on a real Android device across core CV and matching flows.",
    cue: "Milestone reached",
  },
  {
    stage: STORE_RELEASE.allLive
      ? "Public Release"
      : "Store Release",
    status: "current",
    description: STORE_RELEASE.allLive
      ? "InternMatch AI is publicly available through the App Store and Google Play."
      : STORE_RELEASE.anyLive
        ? "Public store rollout is underway while remaining platform availability completes."
        : "The mobile product is prepared for release while public store availability remains pending.",
    cue: STORE_RELEASE.currentJourneyCue,
  },
  {
    stage: "University Growth",
    status: "upcoming",
    description:
      "Grow adoption with university students and employer communities.",
    cue: "Planned milestone",
  },
  {
    stage: "Türkiye Expansion",
    status: "upcoming",
    description:
      "Broader regional availability across campus and employer communities.",
    cue: "Planned milestone",
  },
];

export const FAQS = [
  {
    question: "Is InternMatch AI a job board?",
    answer:
      "Not exactly. InternMatch focuses on helping students understand which internship opportunities fit their profile and why, while also supporting employer workflows for opportunities and applications.",
  },
  {
    question: "How does matching work?",
    answer:
      "InternMatch combines structured skills, semantic similarity and candidate preferences rather than relying on a single AI-generated score.",
  },
  {
    question: "Does AI change my CV?",
    answer:
      "No. InternMatch analyzes CV information to build the candidate experience; it does not modify the original uploaded CV.",
  },
  {
    question: "What happens to my CV?",
    answer:
      "CV information is processed to provide InternMatch features. Our published Privacy Policy explains how this information is handled, retained, secured, and deleted.",
  },
  {
    question: "Is InternMatch available now?",
    answer: STORE_RELEASE.availabilityFaq,
  },
  {
    question:
      "Will InternMatch be available on iPhone and Android?",
    answer: STORE_RELEASE.platformFaq,
  },
];
