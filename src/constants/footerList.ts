import { KCC } from '.'

// footer nanList
export const FOOTER_LIST = [
  {
    title: 'About KCC',
    children: [
      {
        navText: 'Announcement',
        navRoute: '',
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
        navRoute: '',
      },
      {
        navText: 'Github',
        navRoute: '',
      },
      {
        navText: 'Testnet Explorer',
        navRoute: KCC.TEST_EXPLORER,
      },
      {
        navText: 'Testnet Faucet',
        navRoute: KCC.FAUCET,
      },
    ],
  },
  {
    title: 'Contact Us',
    children: [
      {
        navText: 'Technical Support',
        navRoute: '',
      },
      {
        navText: 'FAQ',
        navRoute: '',
      },
      {
        navText: 'Media kit',
        navRoute: '',
      },
    ],
  },
]
