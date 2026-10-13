// One entry per industry page. Each entry becomes /<slug>.html via src/pages/[industry].astro,
// and also feeds the Industries menu, the industry cards and the footer.
// To add an industry, copy an entry and change the text.

// heroImage / helpImage: any image in src/assets/images (e.g. '~/assets/images/art/shopfront.png'),
// including a real photo of a client once you have one.

export interface IndustryNeed {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  slug: string;
  name: string;
  /** Who it is for, shown on the industry cards */
  audience: string;
  /** One line for the industry cards */
  summary: string;
  icon: string;
  heroImage: string;
  heroImageAlt: string;
  metaDescription: string;
  title: string;
  intro: string;
  needs: IndustryNeed[];
  helpTitle: string;
  helpText: string;
  helpImage: string;
  ctaTitle: string;
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: 'hospitality',
    name: 'Hospitality',
    audience: 'Restaurants, cafés and bars',
    summary: 'Working capital, fit-outs and equipment for food and beverage businesses.',
    icon: 'tabler:tools-kitchen-2',
    heroImage: '~/assets/images/art/shopfront.png',
    heroImageAlt: 'A café owner outside their shop, with sales growing',
    metaDescription:
      'Business finance for restaurants, cafés and bars. Equipment, fit-outs, working capital and venue expansion from 60+ lenders, with $0 broker fees.',
    title: 'Finance built for hospitality businesses',
    intro:
      'Whether you’re opening a new venue, upgrading your kitchen or bridging the gap between busy seasons, we connect hospitality businesses with lenders who understand the industry.',
    needs: [
      {
        title: 'Equipment finance',
        description:
          'Fund commercial kitchen equipment, coffee machines, refrigeration and bar set-ups, and keep your cash for running the venue.',
        icon: 'tabler:tools-kitchen-2',
      },
      {
        title: 'Fit-out loans',
        description:
          'Opening a new venue or renovating? Finance the full interior fit-out, from custom bars and dining furniture to flooring and lighting.',
        icon: 'tabler:armchair',
      },
      {
        title: 'Working capital',
        description:
          'Bridge seasonal cash flow gaps, cover payroll in quiet periods, or stock up ahead of your busiest season.',
        icon: 'tabler:cash',
      },
      {
        title: 'Venue expansion',
        description:
          'Ready to open a second location or franchise your concept? We secure the funding to grow your hospitality footprint.',
        icon: 'tabler:building-store',
      },
      {
        title: 'Technology finance',
        description:
          'POS systems, reservation platforms, digital ordering and loyalty programs: fund the tech that runs a modern venue.',
        icon: 'tabler:device-laptop',
      },
      {
        title: 'Stock purchase',
        description:
          'Buy beer, wine, spirits or food in bulk ahead of peak season without draining your working capital.',
        icon: 'tabler:package',
      },
      {
        title: 'Hiring staff',
        description:
          'Cover the cost of hiring and onboarding front-of-house, kitchen or management staff before the new revenue comes in.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Let’s find the right fit for your venue',
    helpText:
      'Found what you need above, or still weighing up your options? A quick call or email is all it takes. We’ll walk you through everything at no cost and no pressure: just honest advice built around your hospitality business.',
    helpImage: '~/assets/images/art/relaxed.png',
    ctaTitle: 'Ready to explore your hospitality finance options?',
    ctaText: 'Talk to a broker who knows the hospitality industry. No jargon, no runaround.',
  },
  {
    slug: 'construction',
    name: 'Construction',
    audience: 'Builders and contractors',
    summary: 'Equipment finance, contract funding and cash flow loans for builders and subcontractors.',
    icon: 'tabler:crane',
    heroImage: '~/assets/images/art/equipment-vehicle.png',
    heroImageAlt: 'A builder choosing between a truck, a forklift and a ute',
    metaDescription:
      'Finance for builders, contractors and subcontractors. Plant and equipment, vehicles, contract bridge funding and working capital from 60+ lenders.',
    title: 'Finance for builders and contractors',
    intro:
      'From plant and equipment to contract bridge funding, we help builders, contractors and tradies access the capital to take on bigger projects and grow their business.',
    needs: [
      {
        title: 'Equipment and plant finance',
        description:
          'Excavators, cranes, forklifts and compactors: finance the machinery you need to win bigger contracts and deliver on time.',
        icon: 'tabler:forklift',
      },
      {
        title: 'Vehicle finance',
        description:
          'Utes, trucks, trailers and vans for your crew. Grow your fleet without burning through project capital.',
        icon: 'tabler:truck',
      },
      {
        title: 'Contract bridge funding',
        description:
          'Bridge the gap between starting a project and getting paid on the invoice, and stay cash-positive while jobs are in progress.',
        icon: 'tabler:file-invoice',
      },
      {
        title: 'Working capital',
        description: 'Keep crews paid, materials ordered and jobs moving, even when client payments are weeks away.',
        icon: 'tabler:cash',
      },
      {
        title: 'Business expansion',
        description:
          'Ready to bid on larger projects? We help growing construction businesses secure the capital to scale.',
        icon: 'tabler:building-skyscraper',
      },
      {
        title: 'Hiring staff',
        description:
          'Finance the cost of bringing on tradespeople, labourers or project managers to deliver contracts and grow your workforce.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Not sure which direction to go? Let’s talk.',
    helpText:
      'Spotted something above that could work for your next project, or just want a second opinion? Give us a call or drop us an email. We’ll compare your options across 60+ lenders, turn it around fast, and it won’t cost you a thing.',
    helpImage: '~/assets/images/art/climbing-stairs.png',
    ctaTitle: 'Ready to explore your construction finance options?',
    ctaText: 'Talk to a broker who understands the construction industry. No jargon, no runaround.',
  },
  {
    slug: 'retail',
    name: 'Retail',
    audience: 'Retail and e-commerce',
    summary: 'Inventory finance, store fit-outs and growth capital for retail businesses.',
    icon: 'tabler:shopping-bag',
    heroImage: '~/assets/images/art/personal.png',
    heroImageAlt: 'A shop owner at a laptop with sales trending up',
    metaDescription:
      'Finance for retail and e-commerce businesses. Stock finance, store fit-outs, working capital and expansion loans from 60+ lenders, with $0 broker fees.',
    title: 'Finance for retail businesses',
    intro:
      'Inventory funding, store fit-outs, new locations: we help retailers secure the capital to grow at the right pace without losing control of cash flow.',
    needs: [
      {
        title: 'Stock finance',
        description:
          'Fund bulk inventory, seasonal stock orders and supplier payments without waiting on customer revenue.',
        icon: 'tabler:package',
      },
      {
        title: 'Store fit-out loans',
        description:
          'Redesign your shop floor, install new shelving, update lighting, or move to a higher-traffic location.',
        icon: 'tabler:building-store',
      },
      {
        title: 'Working capital',
        description:
          'Manage cash flow between supplier invoices and customer sales, and keep trading confidently through slow periods.',
        icon: 'tabler:cash',
      },
      {
        title: 'Business expansion',
        description:
          'Open a second store, move into new suburbs, or scale an existing location with the right funding behind you.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Technology finance',
        description:
          'POS systems, e-commerce platforms, inventory software and loyalty tools: fund the tech that drives retail sales.',
        icon: 'tabler:device-laptop',
      },
      {
        title: 'Hiring staff',
        description: 'Cover the cost of hiring and training new staff ahead of peak seasons or a new store opening.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Ready to explore your options? We’re ready too.',
    helpText:
      'Think one of the options above could suit your retail business, or not quite sure which fits best? One call or email is all it takes. We’ll do the research, match you with the right lender, and get back to you fast. Free, always.',
    helpImage: '~/assets/images/art/shopfront.png',
    ctaTitle: 'Ready to explore your retail finance options?',
    ctaText: 'Talk to a broker who understands what it takes to run a retail business.',
  },
  {
    slug: 'sole-traders',
    name: 'Sole traders',
    audience: 'Self-employed',
    summary: 'Unsecured and low-doc options designed for sole traders and micro-businesses.',
    icon: 'tabler:user-circle',
    heroImage: '~/assets/images/art/unsecured.png',
    heroImageAlt: 'A sole trader receiving fast funding on a laptop',
    metaDescription:
      'Finance for sole traders and self-employed Australians. Unsecured and low-doc loans, vehicle, equipment, invoice and tax debt finance from 60+ lenders.',
    title: 'Finance made simple for sole traders',
    intro:
      'Running your own business is hard enough without the runaround on finance. We specialise in lending for self-employed Australians, from the first enquiry to settlement.',
    needs: [
      {
        title: 'Vehicle finance',
        description:
          'Your vehicle is your business. Finance a new ute or van, or upgrade to something more reliable and better equipped for the job.',
        icon: 'tabler:car',
      },
      {
        title: 'Equipment finance',
        description: 'Tools, machinery, trailers and gear: fund the equipment you need to take on more work.',
        icon: 'tabler:tool',
      },
      {
        title: 'Business loans',
        description:
          'General-purpose funding to cover start-up costs, invest in marketing, or handle unexpected business expenses.',
        icon: 'tabler:briefcase',
      },
      {
        title: 'Invoice finance',
        description: 'Stop waiting 30 to 90 days for invoices to clear. Access your earnings upfront and keep moving.',
        icon: 'tabler:file-invoice',
      },
      {
        title: 'Tax debt finance',
        description:
          'Spread an ATO tax debt into manageable repayments so you can keep operating without unnecessary pressure.',
        icon: 'tabler:receipt-tax',
      },
      {
        title: 'Hiring staff',
        description:
          'Make the jump from solo to team: cover the cost of your first employee, from onboarding to initial payroll.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Not sure where to start? That’s what we’re here for.',
    helpText:
      'Even if you’re not sure which option suits your situation, we love those conversations. Give us a call or send an email and we’ll help you cut through the noise and find something that genuinely works. Quick, free, and no strings attached.',
    helpImage: '~/assets/images/art/feather-trolley.png',
    ctaTitle: 'Ready to find finance that works for you?',
    ctaText: 'We work with self-employed Australians every day. Let us find your best options.',
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    audience: 'Accountants, lawyers and consultants',
    summary: 'Practice acquisition, fit-out and cash flow finance for professional services firms.',
    icon: 'tabler:briefcase',
    heroImage: '~/assets/images/art/secured.png',
    heroImageAlt: 'A business owner meeting with an adviser',
    metaDescription:
      'Finance for accountants, lawyers, consultants and architects. Practice set-up, working capital, technology and acquisition finance from 60+ lenders.',
    title: 'Finance for professional services firms',
    intro:
      'Accountants, lawyers, consultants, architects: we understand the cash flow of professional services businesses and connect you with lenders who do too.',
    needs: [
      {
        title: 'Practice set-up loans',
        description:
          'Fit out your office, buy equipment and cover set-up costs when launching or expanding your practice.',
        icon: 'tabler:briefcase',
      },
      {
        title: 'Working capital',
        description:
          'Cover wages, contractor costs and overheads between billing cycles, and stay liquid without disrupting operations.',
        icon: 'tabler:cash',
      },
      {
        title: 'Technology finance',
        description:
          'Software licences, cybersecurity, hardware upgrades and cloud infrastructure: fund the tools your practice runs on.',
        icon: 'tabler:device-laptop',
      },
      {
        title: 'Vehicle finance',
        description: 'Company cars or a fleet for client visits, for professional firms of every size.',
        icon: 'tabler:car',
      },
      {
        title: 'Business acquisition',
        description:
          'Buying an existing practice or a client book? We structure the funding to make the acquisition straightforward.',
        icon: 'tabler:building',
      },
      {
        title: 'Hiring staff',
        description:
          'Fund the recruitment and onboarding of consultants, accountants or support staff as your practice grows.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Want to talk through your options? So do we.',
    helpText:
      'Whether you’ve already spotted the right product above or you’d like to explore what’s available, reach out. A quick call or email and we’ll come back to you promptly with clear, unbiased advice. No cost, no obligation.',
    helpImage: '~/assets/images/art/relaxed.png',
    ctaTitle: 'Ready to explore finance for your firm?',
    ctaText: 'We work with professional services businesses across Australia. Let us find your options.',
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    audience: 'Plumbers and gas fitters',
    summary: 'Vehicle and equipment finance to help plumbing businesses grow their fleet and toolkit.',
    icon: 'tabler:droplet',
    heroImage: '~/assets/images/art/equipment-vehicle.png',
    heroImageAlt: 'A tradesperson choosing a work vehicle',
    metaDescription:
      'Finance for plumbers and gas fitters. Vans, equipment, working capital and fleet expansion from 60+ lenders, with fast turnaround and $0 broker fees.',
    title: 'Finance for plumbing businesses',
    intro:
      'New service vans, pipe inspection equipment or a bigger team: we help plumbers and trade businesses get fast, practical finance without the paperwork headache.',
    needs: [
      {
        title: 'Vehicle finance',
        description:
          'Your van is your office. Finance a new work van, or upgrade to a better-equipped vehicle to serve more clients.',
        icon: 'tabler:truck',
      },
      {
        title: 'Equipment finance',
        description:
          'Pipe inspection cameras, jetters, fusion machines and specialist tools: finance the equipment that wins you more jobs.',
        icon: 'tabler:tool',
      },
      {
        title: 'Business growth loans',
        description:
          'Take on more jobs, hire apprentices or invest in marketing, without touching your day-to-day cash.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Working capital',
        description:
          'Buy materials upfront, cover payroll in slower months, and bridge the gap between finishing a job and getting paid.',
        icon: 'tabler:cash',
      },
      {
        title: 'Fleet expansion',
        description: 'Growing the team? Finance extra vans so every new crew member is fully equipped from day one.',
        icon: 'tabler:truck-delivery',
      },
      {
        title: 'Hiring staff',
        description: 'Cover the cost of bringing on apprentices or tradespeople to keep up with demand.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Give us a call. We’ll sort it out.',
    helpText:
      'Think one of the options above could give your plumbing business a boost, or want help working out which fits best? Send an email or give us a quick call. We know what lenders approve for trade businesses and we’ll have something back to you the same day. Free, fast, no runaround.',
    helpImage: '~/assets/images/art/climbing-stairs.png',
    ctaTitle: 'Ready to explore your plumbing finance options?',
    ctaText: 'Talk to a broker who works with trade businesses every day. No jargon, no runaround.',
  },
  {
    slug: 'transport',
    name: 'Transport',
    audience: 'Logistics and fleet',
    summary: 'Truck, trailer and fleet finance for transport operators of all sizes.',
    icon: 'tabler:truck-delivery',
    heroImage: '~/assets/images/art/equipment-vehicle.png',
    heroImageAlt: 'An operator planning trucks and fleet vehicles',
    metaDescription:
      'Finance for transport and logistics operators. Trucks, trailers, prime movers, fleet and working capital from 60+ lenders, with $0 broker fees.',
    title: 'Finance for transport and logistics',
    intro:
      'More trucks, new trailers, or working capital between freight runs: we help transport businesses get the finance they need to keep Australia moving.',
    needs: [
      {
        title: 'Fleet finance',
        description: 'Finance new trucks, trailers and prime movers, and build the capacity to win more freight.',
        icon: 'tabler:truck',
      },
      {
        title: 'Asset finance',
        description:
          'Semi-trailers, refrigerated units, curtainsiders and specialist rigs, matched with lenders who understand transport assets.',
        icon: 'tabler:truck-delivery',
      },
      {
        title: 'Working capital',
        description:
          'Cover fuel, maintenance, registration and driver wages while freight revenue is still in transit.',
        icon: 'tabler:cash',
      },
      {
        title: 'Vehicle upgrades',
        description:
          'Replace ageing or high-kilometre vehicles before they become a liability, and keep your fleet modern and compliant.',
        icon: 'tabler:road',
      },
      {
        title: 'Business expansion',
        description:
          'Win new routes, take on new freight types, or step up to owner-operator with funding built for transport.',
        icon: 'tabler:trending-up',
      },
      {
        title: 'Hiring staff',
        description: 'Finance the recruitment and onboarding of drivers and logistics staff as your fleet grows.',
        icon: 'tabler:users-plus',
      },
    ],
    helpTitle: 'Let’s get your finance moving.',
    helpText:
      'Found something above that suits your transport operation, or want to work out which option makes the most sense? Call us or send an email and we’ll move fast. We’ll come back to you the same day. No cost, no stress.',
    helpImage: '~/assets/images/art/feather-trolley.png',
    ctaTitle: 'Ready to explore your transport finance options?',
    ctaText: 'We understand the transport industry. Let us find lenders who do too.',
  },
];
