export interface ScreenCopyItem {
  id: string;
  label: string; // e.g. "REVIEW TRANSFER", "PROCESSING STATE"
  tag: string;   // e.g. "PRIMARY ACTION: Send transfer", "STATUS"
  heading?: string;
  body: string;
  subtext?: string;
  actions?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  annotations?: {
    phrase: string;
    rationale: string;
  }[];
}

export interface BeforeAfterComparison {
  title: string;
  beforeLabel: string;
  beforeText: string;
  afterLabel: string;
  afterText: string;
  whyItWorks?: string;
  riskAvoidance?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  domainIcon: string;
  challenge: string;
  audience: string;
  contentGoal: string;
  keyDecisions: {
    title: string;
    detail: string;
  }[];
  screens: ScreenCopyItem[];
  beforeAfter: BeforeAfterComparison;
  successSignals: string[];
  role?: string;
  tags: string[];
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  caseStudyId: string;
}
