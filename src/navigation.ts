import { getPermalink } from './utils/permalinks';
import { industries } from './data/industries';
import { business } from './data/business';

export const headerData = {
  links: [
    {
      text: 'Business finance',
      links: [
        { text: 'Unsecured business loans', href: getPermalink('/#finance') },
        { text: 'Secured business loans', href: getPermalink('/#finance') },
        { text: 'Equipment and vehicle finance', href: getPermalink('/#finance') },
        { text: 'Apply now', href: getPermalink('/apply') },
      ],
    },
    {
      text: 'Personal finance',
      links: [
        { text: 'Personal loans', href: getPermalink('/contact') },
        { text: 'Caravan loans', href: getPermalink('/contact') },
      ],
    },
    {
      text: 'About us',
      links: [
        { text: 'Our story', href: getPermalink('/about') },
        { text: 'Meet your brokers', href: getPermalink('/about#team') },
        { text: 'FAQs', href: getPermalink('/about#faq') },
      ],
    },
    {
      text: 'Industries',
      links: [
        ...industries.map((industry) => ({ text: industry.name, href: getPermalink(`/${industry.slug}`) })),
        { text: 'All industries', href: getPermalink('/industries') },
      ],
    },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    {
      text: business.phone,
      href: business.phoneHref,
      variant: 'tertiary' as const,
      icon: 'tabler:phone',
      // Hidden on laptop widths so the five nav menus fit; the hero's Call button covers it there.
      class: 'hidden xl:inline-flex',
    },
    { text: 'Apply now', href: getPermalink('/apply'), variant: 'primary' as const },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Industries',
      links: industries.map((industry) => ({ text: industry.name, href: getPermalink(`/${industry.slug}`) })),
    },
    {
      title: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Meet your brokers', href: getPermalink('/about#team') },
        { text: 'FAQs', href: getPermalink('/about#faq') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Apply now', href: getPermalink('/apply') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy policy', href: getPermalink('/privacy') }],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} ${business.legalName}. All rights reserved.`,
};
