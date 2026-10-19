// One entry per finance product. Each entry becomes /finance/<slug>.html via src/pages/finance/[product].astro,
// and also feeds the Business finance / Personal finance menus and the home page finance cards.
// To add a product, copy an entry and change the text.
//
// Deliberately no rates, loan amounts, terms or eligibility thresholds: visitors call or email for those.

export interface FinanceItem {
  title: string;
  description: string;
  icon: string;
}

export interface FinanceProduct {
  slug: string;
  name: string;
  group: 'business' | 'personal';
  /** One line for menus and cards */
  summary: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  metaDescription: string;
  title: string;
  intro: string;
  uses: FinanceItem[];
  suitsTitle: string;
  suits: FinanceItem[];
  /** When a different product is the better fit, and which one */
  alternative: { text: string; slug: string };
  faqs: { title: string; description: string }[];
  /** Industry slugs from src/data/industries.ts that commonly use this product */
  industries: string[];
}

export const financeProducts: FinanceProduct[] = [
  {
    slug: 'unsecured-business-loans',
    name: 'Unsecured business loans',
    group: 'business',
    summary: 'Fast funding without putting up your home or assets as security.',
    icon: 'tabler:lock-open',
    heroImage: '~/assets/images/art/unsecured.png',
    heroImageAlt: 'A business owner moving forward with funding, no assets tied up',
    metaDescription:
      'Unsecured business loans from 60+ Australian lenders. No assets required, low documentation and $0 broker fees. Call or email for your options.',
    title: 'Unsecured business loans, without the runaround',
    intro:
      'Get the funding your business needs without tying up your home or assets. We compare 60+ lenders to find the one that fits your business, and do the legwork for you.',
    uses: [
      {
        title: 'Cash flow',
        description: 'Cover the gap between paying suppliers and getting paid, or ride out a quiet season.',
        icon: 'tabler:cash',
      },
      {
        title: 'Stock and inventory',
        description: 'Buy ahead of a busy period or take advantage of a bulk discount.',
        icon: 'tabler:package',
      },
      {
        title: 'Hiring and growth',
        description: 'Bring on staff, open a new location or take on a bigger contract.',
        icon: 'tabler:users-plus',
      },
      {
        title: 'Marketing and tech',
        description: 'Fund a campaign, a new website or the systems that help you scale.',
        icon: 'tabler:device-laptop',
      },
    ],
    suitsTitle: 'Is an unsecured loan right for you?',
    suits: [
      {
        title: 'You need funds quickly',
        description: 'With no asset valuations, unsecured loans are usually the fastest way to get funded.',
        icon: 'tabler:bolt',
      },
      {
        title: 'You don’t want to put up security',
        description: 'Your home and business assets stay out of the deal.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'You want less paperwork',
        description: 'Many lenders on our panel approve on bank statements alone.',
        icon: 'tabler:file-text',
      },
    ],
    alternative: {
      text: 'Need a larger amount, or a sharper rate? A secured loan is often the better fit.',
      slug: 'secured-business-loans',
    },
    faqs: [
      {
        title: 'What does “unsecured” mean?',
        description:
          'The lender doesn’t take your property or business assets as security. Some lenders may ask for a director’s guarantee instead. We’ll explain exactly what each offer involves before you accept.',
      },
      {
        title: 'How quickly can I be funded?',
        description:
          'Unsecured loans are the quickest type of business finance. Many of our clients receive offers the same day. Call us and we’ll give you a realistic timeframe for your situation.',
      },
      {
        title: 'What rate will I get?',
        description:
          'It depends on your business, how long you’ve been trading and the lender. Call or email us and we’ll give you a straight answer, with no obligation.',
      },
      {
        title: 'Can I pay the loan off early?',
        description:
          'Many lenders allow early repayment, though terms vary. We’ll point out any early repayment costs before you sign.',
      },
    ],
    industries: ['hospitality', 'retail', 'professional-services', 'sole-traders'],
  },
  {
    slug: 'secured-business-loans',
    name: 'Secured business loans',
    group: 'business',
    summary: 'Larger amounts structured around your property or business assets.',
    icon: 'tabler:building-bank',
    heroImage: '~/assets/images/art/secured.png',
    heroImageAlt: 'A business owner using their assets to unlock larger funding',
    metaDescription:
      'Secured business loans tailored around your property or business assets. We compare 60+ Australian lenders, with $0 broker fees. Call or email for your options.',
    title: 'Secured business loans, tailored to you',
    intro:
      'When you need a bigger loan or a sharper rate, using property or business assets as security can open up far more options. We structure the deal around your business and find the lender that fits.',
    uses: [
      {
        title: 'Buying a business',
        description: 'Fund the purchase of an existing business or buy out a partner.',
        icon: 'tabler:briefcase',
      },
      {
        title: 'Property and premises',
        description: 'Buy, build or upgrade the premises your business runs from.',
        icon: 'tabler:building-store',
      },
      {
        title: 'Major expansion',
        description: 'Fund a large project, a new site or a step change in capacity.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Refinancing',
        description: 'Consolidate existing debts into one loan, with one repayment.',
        icon: 'tabler:arrows-exchange',
      },
    ],
    suitsTitle: 'Is a secured loan right for you?',
    suits: [
      {
        title: 'You need a larger amount',
        description: 'Offering security lets lenders go further than they would unsecured.',
        icon: 'tabler:stack-2',
      },
      {
        title: 'You want a sharper rate',
        description: 'Lower risk for the lender usually means a better rate for you.',
        icon: 'tabler:discount',
      },
      {
        title: 'You want a longer term',
        description: 'Spread repayments out to keep them manageable for your cash flow.',
        icon: 'tabler:calendar',
      },
    ],
    alternative: {
      text: 'Need funds fast, or don’t want to put up security? Look at an unsecured loan.',
      slug: 'unsecured-business-loans',
    },
    faqs: [
      {
        title: 'What can I use as security?',
        description:
          'Usually residential or commercial property, though some lenders accept other business assets. Call us and we’ll talk through what you have and what it could unlock.',
      },
      {
        title: 'How long does a secured loan take?',
        description:
          'Longer than unsecured, because the security needs to be valued. We keep things moving and tell you upfront what to expect.',
      },
      {
        title: 'What rate will I get?',
        description:
          'It depends on the security, your business and the lender. Call or email us and we’ll give you a straight answer, with no obligation.',
      },
      {
        title: 'Can I refinance an existing loan?',
        description:
          'Yes. If you’re paying too much on current business debt, we’ll compare the market to see if there’s a better deal.',
      },
    ],
    industries: ['construction', 'hospitality', 'professional-services', 'transport'],
  },
  {
    slug: 'equipment-and-vehicle-finance',
    name: 'Equipment and vehicle finance',
    group: 'business',
    summary: 'Utes, trucks, vans, machinery and tools for the work you do.',
    icon: 'tabler:truck',
    heroImage: '~/assets/images/art/equipment-vehicle.png',
    heroImageAlt: 'A tradie standing beside a new ute and equipment',
    metaDescription:
      'Equipment and vehicle finance for Australian businesses. Utes, trucks, machinery and tools from 60+ lenders, with $0 broker fees. Call or email for your options.',
    title: 'Equipment and vehicle finance that keeps you working',
    intro:
      'Get the vehicles, machinery and tools your business runs on, and keep your cash for everything else. The equipment itself usually secures the loan, so your other assets stay free.',
    uses: [
      {
        title: 'Utes, vans and cars',
        description: 'New or used work vehicles, from dealers or private sellers.',
        icon: 'tabler:car',
      },
      {
        title: 'Trucks and trailers',
        description: 'Light and heavy trucks, trailers and prime movers.',
        icon: 'tabler:truck',
      },
      {
        title: 'Machinery',
        description: 'Excavators, forklifts, production lines and yellow goods.',
        icon: 'tabler:forklift',
      },
      {
        title: 'Tools and tech',
        description: 'Trade tools, commercial kitchen equipment, IT and medical equipment.',
        icon: 'tabler:tool',
      },
    ],
    suitsTitle: 'Is equipment finance right for you?',
    suits: [
      {
        title: 'You’re buying a specific asset',
        description: 'The loan is built around the vehicle or equipment you’re buying.',
        icon: 'tabler:target',
      },
      {
        title: 'You want to protect your cash flow',
        description: 'Spread the cost over the working life of the asset instead of paying upfront.',
        icon: 'tabler:cash',
      },
      {
        title: 'You want to keep other assets free',
        description: 'The equipment secures the loan, so your home doesn’t have to.',
        icon: 'tabler:shield-check',
      },
    ],
    alternative: {
      text: 'Need funds for something other than an asset, like wages or stock? Look at an unsecured loan.',
      slug: 'unsecured-business-loans',
    },
    faqs: [
      {
        title: 'Can I finance used equipment or a private sale?',
        description:
          'Often, yes. Many lenders on our panel finance used vehicles and equipment, including private sales. Tell us what you’re looking at and we’ll find a lender that will.',
      },
      {
        title: 'Can I get pre-approved before I find the right vehicle?',
        description:
          'Yes. Getting pre-approved means you can negotiate with confidence and move quickly when you find the right one.',
      },
      {
        title: 'What rate will I get?',
        description:
          'It depends on the asset, its age and your business. Call or email us and we’ll give you a straight answer, with no obligation.',
      },
      {
        title: 'Are there tax benefits?',
        description:
          'There can be, depending on how the finance is structured. Your accountant is the best person to advise on that, and we’re happy to work with them.',
      },
    ],
    industries: ['construction', 'plumbing', 'transport', 'sole-traders'],
  },
  {
    slug: 'personal-loans',
    name: 'Personal loans',
    group: 'personal',
    summary: 'Personal loans from the same panel of lenders we use for business.',
    icon: 'tabler:user',
    heroImage: '~/assets/images/art/personal.png',
    heroImageAlt: 'A person relaxed after sorting out their personal finance',
    metaDescription:
      'Personal loans through Lighter Finance. We compare lenders to find the right loan for you, with $0 broker fees. Call or email for your options.',
    title: 'Personal loans, made lighter',
    intro:
      'Not everything is about the business. We help our clients with personal finance too, comparing lenders to find a loan that fits your situation and budget.',
    uses: [
      {
        title: 'Debt consolidation',
        description: 'Roll credit cards and other debts into one loan with one repayment.',
        icon: 'tabler:arrows-exchange',
      },
      {
        title: 'Car purchase',
        description: 'Finance a new or used car for personal use.',
        icon: 'tabler:car',
      },
      {
        title: 'Home improvements',
        description: 'Renovations, repairs, solar and upgrades around the house.',
        icon: 'tabler:home',
      },
      {
        title: 'Life’s big moments',
        description: 'Weddings, travel, medical costs and other one-off expenses.',
        icon: 'tabler:heart',
      },
    ],
    suitsTitle: 'Why use a broker for a personal loan?',
    suits: [
      {
        title: 'One conversation, many lenders',
        description: 'We compare the market for you instead of you applying lender by lender.',
        icon: 'tabler:list-check',
      },
      {
        title: 'Protect your credit file',
        description: 'Multiple applications can hurt your score. We find the right lender first.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Straight answers',
        description: 'We’ll tell you honestly what’s achievable and what it will cost.',
        icon: 'tabler:message-circle',
      },
    ],
    alternative: {
      text: 'Buying a caravan, camper or motorhome? We have a dedicated caravan loan for that.',
      slug: 'caravan-loans',
    },
    faqs: [
      {
        title: 'Do I need to own a business to use Lighter Finance?',
        description: 'No. Most of our clients are business owners, but we help with personal finance too.',
      },
      {
        title: 'What rate will I get?',
        description:
          'It depends on your circumstances and the lender. Call or email us and we’ll give you a straight answer, with no obligation.',
      },
      {
        title: 'Does it cost anything to use a broker?',
        description: 'No. We’re paid by the lender once your loan settles, not by you.',
      },
    ],
    industries: [],
  },
  {
    slug: 'caravan-loans',
    name: 'Caravan loans',
    group: 'personal',
    summary: 'Finance for caravans, campers and motorhomes.',
    icon: 'tabler:caravan',
    heroImage: '~/assets/images/art/relaxed.png',
    heroImageAlt: 'A person relaxing, ready for the open road',
    metaDescription:
      'Caravan, camper and motorhome loans through Lighter Finance. We compare lenders to find the right loan, with $0 broker fees. Call or email for your options.',
    title: 'Caravan loans for the open road',
    intro:
      'Whether it’s a camper trailer for weekends away or a motorhome for the big lap, we compare lenders to find a caravan loan that fits your plans and your budget.',
    uses: [
      {
        title: 'Caravans',
        description: 'New or used caravans, from dealers or private sellers.',
        icon: 'tabler:caravan',
      },
      {
        title: 'Camper trailers',
        description: 'Off-road and on-road camper trailers.',
        icon: 'tabler:tent',
      },
      {
        title: 'Motorhomes',
        description: 'Motorhomes and campervans for life on the road.',
        icon: 'tabler:bus',
      },
      {
        title: 'Tow vehicles',
        description: 'Need the car to pull it? Ask us about financing both.',
        icon: 'tabler:car-suv',
      },
    ],
    suitsTitle: 'Why use a broker for your caravan loan?',
    suits: [
      {
        title: 'Lenders who know caravans',
        description: 'We match you with lenders that finance caravans and RVs regularly.',
        icon: 'tabler:target',
      },
      {
        title: 'Pre-approval before you shop',
        description: 'Know your budget and negotiate with confidence at the dealer.',
        icon: 'tabler:circle-check',
      },
      {
        title: 'We handle the paperwork',
        description: 'From application to settlement, we do the legwork.',
        icon: 'tabler:briefcase',
      },
    ],
    alternative: {
      text: 'Need finance for something else? Our personal loans cover most of life’s big purchases.',
      slug: 'personal-loans',
    },
    faqs: [
      {
        title: 'Can I finance a used caravan or a private sale?',
        description:
          'Often, yes. Many lenders finance used caravans, including private sales. Tell us what you’re looking at and we’ll find a lender that will.',
      },
      {
        title: 'Can I get pre-approved?',
        description: 'Yes. Pre-approval means you know your budget before you start shopping.',
      },
      {
        title: 'What rate will I get?',
        description:
          'It depends on the caravan, its age and your circumstances. Call or email us and we’ll give you a straight answer, with no obligation.',
      },
    ],
    industries: [],
  },
];

export const businessFinance = financeProducts.filter((p) => p.group === 'business');
export const personalFinance = financeProducts.filter((p) => p.group === 'personal');
export const financeHref = (slug: string) => `/finance/${slug}`;
