import { KCC } from '.'

// footer nanList
export const FOOTER_LIST = [
  {
    title: 'About KCC',
    children: [
      {
        navText: 'Announcement',
        navRoute: KCC.MEDIA_URL,
      },
      {
        navText: 'Proof of Assets',
        navRoute: '',
      },
      {
        navText: 'Disclaimer',
        navRoute: '',
      },
    ],
  },
  {
    title: 'Development Tool',
    children: [
      {
        navText: 'Docs',
        navRoute: KCC.DOCS_URL,
      },
      {
        navText: 'Github',
        navRoute: KCC.GITHUB_URL,
      },
      {
        navText: 'Testnet Explorer',
        navRoute: KCC.TEST_EXPLORER,
      },
      {
        navText: 'Testnet faucet',
        navRoute: KCC.FAUCET,
      },
    ],
  },
  {
    title: 'Contact Us',
    children: [
      {
        navText: 'Technical Support',
        navRoute: KCC.DISCORD_URL,
      },
      {
        navText: 'FAQ',
        navRoute: KCC.DOCS_URL,
      },
      /* {
        navText: 'Media kit',
        navRoute: KCC.DOCS_URL,
      }, */
    ],
  },
]
