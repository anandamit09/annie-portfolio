/**
 * Site configuration — edit these values instead of hunting through components.
 *
 * Contact details are public once the site is deployed.
 * Leave `email` or `phone` empty to hide that link.
 */
export const site = {
  name: 'Annie',
  designer: 'Ananya Raj',
  title: 'Annie — Textile Designer',

  email: 'ananya15724@gmail.com',
  /** Shown as written; `phoneHref` is the international dial link. */
  phone: '+91 93581 76846',
  phoneHref: 'tel:+919358176846',

  /** Optional professional links. Leave `url` empty to hide a link. */
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Behance', url: '' },
  ],

  /** Hero character: illustrated portrait with transparent background (cut out from the cartoon portrait). */
  heroImage: 'images/hero/annie-cartoon.webp',
  heroImageIsPlaceholder: false,
};
