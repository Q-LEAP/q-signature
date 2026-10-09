/* Shared Q-Leap data and the banners offered in the form.
   To add a banner: put a 1200 × 240 px PNG in assets/ (shown at 600 × 120)
   and add an entry below; set `active: false` to hide one that is over.
   PUBLIC_URL must be where the published site serves assets/, because the
   signature loads its images from there (embedded images break in Outlook). */
window.QLEAP_SIGNATURE = {
  PUBLIC_URL: 'https://q-leap.github.io/q-signature/',
  company: {
    name: 'Q-Leap',
    phone: '+352 20 21 17 12',
    address: '10B rue des Mérovingiens, L-8070 Bertrange',
    website: 'www.q-leap.eu',
    websiteUrl: 'https://www.q-leap.eu/',
    logo: 'https://q-leap.eu/wp-content/uploads/2022/01/Q_01.png',
    logoWidth: 64,
    logoHeight: 70
  },
  banners: [
    {
      id: 'lste-2026',
      active: true,
      image: 'assets/banner-lste-2026.png',
      width: 600,
      height: 120,
      link: 'https://www.lste.lu/register/',
      label: { fr: 'LSTE 2026 · 26 novembre (billet gratuit)', en: 'LSTE 2026 · 26 November (free ticket)' },
      alt: 'LSTE 2026, Luxembourg Software Testing Event, 26 November 2026 · Free ticket'
    }
  ]
};
