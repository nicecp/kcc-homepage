import { KCC } from './index'

export interface NavItemType {
  name: string
  hasChildren?: boolean
  hasGroup?: boolean
  route?: string
  childrens?: NavItemChildrenType[] | NavItemGroupType[]
}

export interface NavItemChildrenType {
  title: string
  subTitle: string
  route: string
  icon: string
}

export interface NavItemGroupType {
  groupName: string
  groupMember: NavItemChildrenType[]
}

export const MENU_LIST = [
  {
    name: 'Home',
    route: '/',
    hasChildren: false,
  },
  {
    name: 'Developers',
    hasChildren: true,
    childrens: [
      {
        title: 'Developer Docs',
        subTitle: 'Start building on KuCoin Community Chain',
        route: KCC.DOCS_URL,
        icon: require('../assets/Icons/document.png').default,
      },
      {
        title: 'Github',
        subTitle: 'Visit our Github community',
        route: KCC.GITHUB_URL,
        icon: require('../assets/Icons/github.png').default,
      },
      {
        title: 'Testnet Explorer',
        subTitle: 'View information on the KCC public chain（testnet）',
        route: KCC.TEST_EXPLORER,
        icon: require('../assets/Icons/explorer.png').default,
      },
      {
        title: 'Testnet Faucet',
        subTitle: 'Get KCC testnet tokens',
        route: KCC.FAUCET,
        icon: require('../assets/Icons/faucet.png').default,
      },
    ],
  },
  {
    name: 'Ecosystem',
    hasChildren: true,
    hasGroup: true,
    childrens: [
      {
        groupName: 'Dapp',
        groupMember: [
          {
            title: 'Submit a Dapp',
            subTitle: 'Submit your dapp to the community',
            route: KCC.DAPP_URL,
            icon: require('../assets/Icons/submit.png').default,
          },
          {
            title: 'Defi Box',
            subTitle: 'Coming Soon...',
            route: '',
            icon: require('../assets/Icons/explorer.png').default,
          },
        ],
      },
      {
        groupName: 'Wallet',
        groupMember: [
          {
            title: 'Metamask',
            subTitle: 'Visit and link to metamask',
            route: 'https://metamask.io',
            icon: require('../assets/Icons/metamask.png').default,
          },
          {
            title: 'ImToken',
            subTitle: 'Visit and link to ImToken',
            route: 'https://token.im/',
            icon: require('../assets/Icons/imtoken.png').default,
          },
          {
            title: 'More Wallet',
            subTitle: 'Coming Soon...',
            route: '',
            icon: require('../assets/Icons/wallet.png').default,
          },
        ],
      },
      {
        groupName: 'Explorer',
        groupMember: [
          {
            title: 'Explorer',
            subTitle: 'View information on the KCC public chain',
            route: KCC.EXPLORER,
            icon: require('../assets/Icons/explorer.png').default,
          },
        ],
      },
    ],
  },
  {
    name: 'Community',
    hasChildren: true,
    childrens: [
      {
        title: 'Activites',
        subTitle: 'View the exciting activites information, Includes hackathons,meetups,and more',
        route: '/community/activity',
        icon: require('../assets/Icons/activity.png').default,
      },
      {
        title: 'Grant Program',
        subTitle: 'support for community development and research',
        route: '/community/grants',
        icon: require('../assets/Icons/grants.png').default,
      },
    ],
  },
]
