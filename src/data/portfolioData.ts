import { CaseStudy, Pillar } from '../types';

export const authorInfo = {
  name: 'Tobi Lawalson',
  role: 'UX Writer & Content Designer',
  email: 'lawalsonsamuel@gmail.com',
  headerTag: 'UX WRITING PORTFOLIO',
  title: 'UX Writing Portfolio',
  heroSubtitle: 'Three case studies demonstrating product thinking, clear microcopy, and a humane voice.',
  positioning: 'I write product content that helps people understand what is happening, decide what to do next, and recover gracefully when things go wrong. My process pairs user needs with business goals, content standards, and a testable measurement plan.',
  bio: 'Specializing in high-stakes product moments, complex SaaS onboarding, and ethical retention flows. Designing content systems where words act as deliberate user interface components.',
};

export const pillars: Pillar[] = [
  {
    id: 'pillar-1',
    title: 'High-Stakes Financial Moments',
    description: 'A confident, plain-language approach to a high-stakes money moment with zero ambiguity.',
    iconName: 'ShieldAlert',
    caseStudyId: 'fintech-error-recovery',
  },
  {
    id: 'pillar-2',
    title: 'Low-Friction B2B Onboarding',
    description: 'A flexible onboarding pattern that gets a team to value without overwhelming them.',
    iconName: 'Users',
    caseStudyId: 'b2b-analytics-onboarding',
  },
  {
    id: 'pillar-3',
    title: 'Respectful, Humane Cancellation',
    description: 'A respectful cancellation flow that protects customer choice and reduces avoidable support contacts.',
    iconName: 'HeartHandshake',
    caseStudyId: 'subscription-retention',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-error-recovery',
    number: '01',
    title: 'Send money with confidence',
    subtitle: 'Fintech app: a transfer-review and error-recovery flow',
    domain: 'Fintech / Payments',
    domainIcon: 'CreditCard',
    challenge: 'People were abandoning bank transfers after a generic “Something went wrong” message. The design needed to reduce anxiety without hiding risk or making promises the product could not keep.',
    audience: 'A customer sending rent or shared-expense money; likely on mobile, time-constrained, and unsure whether the payment went through.',
    contentGoal: 'Make the transfer status unmistakable, explain any delay in plain language, and give one clear next step.',
    keyDecisions: [
      {
        title: 'Lead with status, not the system error',
        detail: '“Your transfer is processing” answers the urgent question first before addressing underlying mechanics.',
      },
      {
        title: 'Use concrete time expectations with trigger conditions',
        detail: 'Use concrete time expectations only when the product can support them; otherwise say what will trigger the next update.',
      },
      {
        title: 'Separate reassurance from certainty',
        detail: 'Avoid hollow phrases like “Don’t worry” and “guaranteed” when money movement is still pending in clearing networks.',
      },
    ],
    screens: [
      {
        id: 'cs1-s1',
        label: 'REVIEW TRANSFER',
        tag: 'PRIMARY ACTION: Send transfer',
        heading: 'Review transfer details',
        body: 'Confirm transfer.',
        subtext: 'Double-check the recipient name, account digits, and amount before initiating.',
        actions: {
          primary: 'Confirm transfer',
          secondary: 'Edit details',
        },
        annotations: [
          {
            phrase: 'Confirm transfer',
            rationale: 'Direct verb-noun action button leaves zero ambiguity regarding the commitment.',
          },
        ],
      },
      {
        id: 'cs1-s2',
        label: 'PROCESSING STATE',
        tag: 'STATUS',
        heading: 'Your transfer is on its way',
        body: 'This usually takes a few minutes. We’ll notify you as soon as it’s complete.',
        subtext: 'Funds will update in your activity feed once accepted by the receiving institution.',
        actions: {
          primary: 'Done',
          secondary: 'View transfer receipt',
        },
        annotations: [
          {
            phrase: 'Your transfer is on its way',
            rationale: 'Answers the immediate question ("did it send?") without over-promising final settlement.',
          },
          {
            phrase: 'We’ll notify you',
            rationale: 'Releases the user from needing to refresh the screen frantically by setting an asynchronous trigger.',
          },
        ],
      },
      {
        id: 'cs1-s3',
        label: 'RECOVERABLE ERROR',
        tag: 'ACTIONS: Try again | Choose another method',
        heading: 'We couldn’t confirm this transfer',
        body: 'Your money has not left your account. Check your connection and try again.',
        subtext: 'No charges have been initiated. Your available balance remains unchanged.',
        actions: {
          primary: 'Try again',
          secondary: 'Choose another payment method',
        },
        annotations: [
          {
            phrase: 'Your money has not left your account',
            rationale: 'The #1 fear in a payment failure is double billing. Stating this upfront calms high-stakes anxiety instantly.',
          },
          {
            phrase: 'Try again',
            rationale: 'Provides an immediate, frictionless recovery path instead of dead-ending the user.',
          },
        ],
      },
    ],
    beforeAfter: {
      title: 'Before / After Comparison',
      beforeLabel: 'GENERIC SYSTEM ERROR',
      beforeText: 'Error 493. Transaction unsuccessful. Please try again later.',
      afterLabel: 'USER-CENTERED RECOVERY',
      afterText: 'We couldn’t confirm this transfer. Your money has not left your account. Try again or choose another payment method.',
      whyItWorks: 'Instead of an obscure technical error code (493) and a vague instruction to wait indefinitely, the revised copy immediately reassures the user that their money is safe and provides actionable alternatives.',
    },
    successSignals: [
      'Reduced “Did my payment go through?” support contacts.',
      'Higher retry completion after the recoverable error state.',
      'Lower abandonment between transfer review and confirmation.',
    ],
    tags: ['Microcopy', 'Error States', 'Fintech', 'Anxiety Reduction', 'Plain Language'],
  },
  {
    id: 'b2b-analytics-onboarding',
    number: '02',
    title: 'Make team setup feel doable',
    subtitle: 'B2B analytics platform: first-session onboarding',
    domain: 'B2B SaaS / Analytics',
    domainIcon: 'BarChart3',
    challenge: 'New workspace owners arrived at a complex setup checklist with seven required and optional tasks. The team wanted more invitations sent; users needed clarity about what mattered now.',
    audience: 'A first-time administrator who may be setting up alone, under pressure to show early value to teammates.',
    contentGoal: 'Create a sense of progress, distinguish required from optional work, and make inviting people feel low-risk and reversible.',
    keyDecisions: [
      {
        title: 'Frame setup as a short path to value',
        detail: 'Frame setup as a short path to the first useful outcome, not a long exhaustive product tour.',
      },
      {
        title: 'Use progressive disclosure',
        detail: 'Show the next best task, then place advanced configuration behind a calm “You can do this later” label.',
      },
      {
        title: 'Explain permissions with tangible verbs',
        detail: 'Explain permissions in the moment a person needs them, with verbs that describe what each role can actually do.',
      },
    ],
    screens: [
      {
        id: 'cs2-s1',
        label: 'ONBOARDING LANDING',
        tag: 'PROGRESS: 1 of 3',
        heading: 'You’re 2 steps from your first dashboard',
        body: 'Start with your data source. You can invite teammates and fine-tune settings whenever you’re ready.',
        actions: {
          primary: 'Connect data source',
          secondary: 'Explore sample data',
        },
        annotations: [
          {
            phrase: '2 steps from your first dashboard',
            rationale: 'Reframes 7 checklist items into an achievable, discrete 2-step milestone to first value.',
          },
          {
            phrase: 'whenever you’re ready',
            rationale: 'Removes the urgency trap, signaling that secondary steps do not block initial exploration.',
          },
        ],
      },
      {
        id: 'cs2-s2',
        label: 'INVITE TEAMMATES',
        tag: 'FIELD: Add email addresses',
        heading: 'Bring in the people who make decisions with this data',
        body: 'They’ll get an email invitation. You can change their access or remove them later.',
        actions: {
          primary: 'Send invitations',
          secondary: 'I’ll do this later',
        },
        annotations: [
          {
            phrase: 'people who make decisions with this data',
            rationale: 'Outcome-oriented framing replaces generic "collaborators" with a specific mental model.',
          },
          {
            phrase: 'change their access or remove them later',
            rationale: 'Explicitly declares actions are reversible, reducing anxiety over committing to invite lists prematurely.',
          },
        ],
      },
      {
        id: 'cs2-s3',
        label: 'ROLE HELPER',
        tag: 'HELP TEXT / TOOLTIPS',
        heading: 'Workspace Roles Explained',
        body: 'Viewer: can explore dashboards and export reports.\nEditor: can create and update dashboards.\nAdmin: can manage people, billing, and workspace settings.',
        annotations: [
          {
            phrase: 'Viewer: can explore dashboards and export reports',
            rationale: 'Active functional verbs ("explore", "export", "create", "manage") replace abstract permission matrix jargon.',
          },
        ],
      },
      {
        id: 'cs2-s4',
        label: 'SKIP STATE',
        tag: 'SECONDARY ACTION: I’ll do this later',
        heading: 'Not ready to invite anyone?',
        body: 'That’s okay. You can send invitations from People settings when the time is right.',
        actions: {
          primary: 'Continue to dashboard',
        },
        annotations: [
          {
            phrase: 'That’s okay',
            rationale: 'Validates the user’s choice and avoids guilt-tripping (anti-confirmshaming).',
          },
          {
            phrase: 'People settings',
            rationale: 'Leaves breadcrumbs for how to return to this feature later without searching.',
          },
        ],
      },
    ],
    beforeAfter: {
      title: 'Why this works: Product-Centered vs Outcome-Centered',
      beforeLabel: 'PRODUCT-CENTERED',
      beforeText: 'Invite users to unlock collaboration capabilities.',
      afterLabel: 'OUTCOME-CENTERED',
      afterText: 'Bring in the people who make decisions with this data.',
      whyItWorks: 'The revised voice connects an action to its practical benefit. It also tells people what will happen next and preserves a graceful exit, which keeps “Skip” from feeling like failure.',
    },
    successSignals: [
      'More workspace owners connect a data source in their first session.',
      'More invitations accepted within seven days.',
      'Fewer role-and-permission questions in onboarding feedback and support tickets.',
    ],
    tags: ['Onboarding', 'B2B SaaS', 'Progressive Disclosure', 'Permission UX', 'Outcome Framing'],
  },
  {
    id: 'subscription-retention',
    number: '03',
    title: 'Let people leave without a fight',
    subtitle: 'Meal-planning subscription: cancellation and retention flow',
    domain: 'E-commerce / Subscriptions',
    domainIcon: 'UtensilsCrossed',
    challenge: 'The existing cancellation experience buried the final action beneath promotional language. Customers reported confusion, and support agents handled avoidable cancellation requests.',
    audience: 'A subscriber who may be cost-conscious, temporarily overwhelmed, or simply finished with the service. They expect a straightforward way to manage their plan.',
    contentGoal: 'Honor the customer’s choice while offering relevant alternatives that are clearly optional and never block cancellation.',
    keyDecisions: [
      {
        title: 'Name the decision plainly',
        detail: 'If the action cancels a subscription, the button should explicitly say “Cancel subscription” rather than obscure confirmation phrases.',
      },
      {
        title: 'Offer alternatives as choices, not obstacles',
        detail: 'Make the full consequence and timing visible, ensuring pauses or frequency changes are truly voluntary.',
      },
      {
        title: 'Confirm the outcome clearly',
        detail: 'Confirm the outcome in a way a customer can save, understand, and act on later without ambiguity regarding billing dates.',
      },
    ],
    screens: [
      {
        id: 'cs3-s1',
        label: 'CANCELLATION CHOICE',
        tag: 'OPTIONS: Pause plan | Change frequency | Continue to cancellation',
        heading: 'Before you cancel, would one of these work better?',
        body: 'Pause for up to 3 months. Change your delivery frequency. Or continue to cancellation.',
        actions: {
          primary: 'Pause plan',
          secondary: 'Change delivery frequency',
          tertiary: 'Continue to cancellation',
        },
        annotations: [
          {
            phrase: 'Pause for up to 3 months',
            rationale: 'Offers low-effort remedies for temporary lifestyle changes without hiding the cancel path.',
          },
          {
            phrase: 'Continue to cancellation',
            rationale: 'Never traps the user in endless friction loops; the primary exit is clearly labeled and accessible.',
          },
        ],
      },
      {
        id: 'cs3-s2',
        label: 'FINAL CONFIRMATION',
        tag: 'PRIMARY ACTION: Cancel subscription',
        heading: 'Cancel your subscription?',
        body: 'You’ll keep access to your saved recipes through September 30. You won’t be charged again unless you restart your plan.',
        actions: {
          primary: 'Cancel subscription',
          secondary: 'Keep my plan',
        },
        annotations: [
          {
            phrase: 'through September 30',
            rationale: 'Using an explicit calendar date eliminates customer confusion about mid-cycle access cutoff.',
          },
          {
            phrase: 'You won’t be charged again',
            rationale: 'Directly addresses the user’s primary financial concern in transparent terms.',
          },
        ],
      },
      {
        id: 'cs3-s3',
        label: 'SUCCESS MESSAGE',
        tag: 'ACTION: View account',
        heading: 'Your subscription is canceled',
        body: 'Your access ends September 30. We’ve emailed a confirmation to you. Want to come back later? Your saved recipes will be here.',
        actions: {
          primary: 'View account',
          secondary: 'Explore recipes',
        },
        annotations: [
          {
            phrase: 'We’ve emailed a confirmation to you',
            rationale: 'Provides immediate receipt proof, halting duplicate cancellation clicks or nervous support calls.',
          },
          {
            phrase: 'Your saved recipes will be here',
            rationale: 'Maintains long-term goodwill by preserving customer-created artifacts for easy reactivation.',
          },
        ],
      },
    ],
    beforeAfter: {
      title: 'Risk check: Language to avoid (Anti-Dark Pattern)',
      beforeLabel: 'AVOID (MANIPULATIVE / SHAME)',
      beforeText: 'Are you sure you want to lose access to delicious weekly recipes?',
      afterLabel: 'PREFER (TRANSPARENT / RESPECTFUL)',
      afterText: 'Cancel your subscription? You’ll keep access to your saved recipes through September 30.',
      whyItWorks: 'The preferred version states the consequence without shame, urgency, or emotional pressure. It gives the person the information needed to make a deliberate decision.',
      riskAvoidance: 'Guilt-tripping copy creates short-term friction that damages brand equity and increases chargebacks. Ethical UX writing respects user autonomy.',
    },
    successSignals: [
      'Fewer cancellation-related support contacts.',
      'Fewer repeat attempts caused by uncertainty about whether cancellation succeeded.',
      'More voluntary pauses or frequency changes, measured alongside cancellation-task completion and customer sentiment.',
    ],
    tags: ['Ethical UX', 'Subscription Retention', 'Anti-Dark Patterns', 'Cancellation Flow', 'Confirmation Microcopy'],
  },
];

export const uxPrinciples = [
  {
    title: 'Clarity Over Cleverness',
    description: 'In moments of friction, confusion, or financial risk, users need certainty. We eliminate industry jargon and ambiguous labels in favor of plain, descriptive English.',
    badge: 'Core Tenet',
  },
  {
    title: 'Reassurance with Integrity',
    description: 'We never issue hollow guarantees like "Don\'t worry" when transactions are pending. Instead, we explain the physical state and exact next steps.',
    badge: 'Tone Standard',
  },
  {
    title: 'Progressive Disclosure',
    description: 'We respect mental bandwidth by presenting only the immediate next best action, gently deferring complex configurations until value is established.',
    badge: 'Cognitive Load',
  },
  {
    title: 'Respectful Exit Paths',
    description: 'We actively reject manipulative confirmshaming and dark patterns. When users choose to leave, we make the process clear, respectful, and reversible.',
    badge: 'Ethical Design',
  },
];
