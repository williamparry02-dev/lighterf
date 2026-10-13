// Business details used across the site (header, footer, contact page, forms, structured data).
// Change them here once and every page picks them up.

export const business = {
  name: 'Lighter Finance',
  legalName: 'Lighter Finance Pty Ltd',
  tagline: 'For businesses wanting a lighter path to success.',
  phone: '0478 022 067',
  phoneHref: 'tel:+61478022067',
  email: 'enquiries@lighterfinance.com.au',
  hours: 'Mon to Fri, 8am to 6pm AEST',
  location: 'Sydney, NSW. Servicing clients Australia-wide.',
  // TODO: replace with your real licence or credit representative number before going live.
  creditLicence: 'Australian Credit Licence #000000',

  // Web3Forms key used by the Apply and Contact forms (the same key as the old site).
  // Submissions are emailed to the address registered with this key.
  web3formsKey: '769bb7b3-cec4-4787-b319-405a53355b60',
};

export const brokers = [
  { name: 'William', role: 'Director & Senior Broker' },
  { name: 'Steve', role: 'Senior Finance Broker' },
  { name: 'James', role: 'Business Finance Broker' },
  { name: 'Toby', role: 'Finance Broker' },
];

export const faqs = [
  {
    title: 'Does it cost anything to use Lighter Finance?',
    description:
      'Nothing, ever. We’re paid a commission by the lender once your loan settles, not by you. You get our full panel and our expertise at $0 cost.',
  },
  {
    title: 'Will applying affect my credit score?',
    description:
      'No. Your initial application is a soft enquiry only, so it won’t appear on your credit file or affect your score. We only move to a formal application once you’re happy with the options we’ve found.',
  },
  {
    title: 'How many lenders do you actually compare?',
    description:
      'We work across a panel of 60+ lenders: major banks, non-banks and specialist financiers. One application from you gets compared across all of them, instead of you approaching lenders one at a time.',
  },
  {
    title: 'How quickly will I hear back?',
    description:
      'Usually within a few hours, often the same business day. We know timing matters when you’re funding stock, equipment or a growth opportunity.',
  },
  {
    title: 'What if my business is newer, or my credit isn’t perfect?',
    description:
      'That’s exactly where our panel helps most. Alongside major banks, we work with specialist and non-bank lenders who look at your business’s real trading performance, not just a credit score.',
  },
];

export const testimonials = [
  {
    testimonial: 'Will was excellent to deal with. The entire process couldn’t have been more simple and efficient!',
    name: 'Brad',
    job: 'Business loan, Sydney',
  },
  {
    testimonial:
      'As a returning customer, the application and approvals process was the easiest and fastest I’ve experienced.',
    name: 'Frank',
    job: 'Business loan, Sydney',
  },
  {
    testimonial:
      'William was very helpful and knowledgeable. Their process was easy and straightforward with a fast approval. Will definitely use them again and recommend.',
    name: 'Sharbel',
    job: 'Business term loan',
  },
];
