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
        title: 'Documentation',
        subTitle: 'Start building on KuCoin Community Chain',
        route: '/developers/docs',
        icon: require('../assets/Icons/document.png').default,
      },
      {
        title: 'Github',
        subTitle: 'Visit our github community',
        route: '/developers/github',
        icon: require('../assets/Icons/github.png').default,
      },
      {
        title: 'Testnet Explorer',
        subTitle: 'View information on the KCC public chain (testnet)',
        route: '/developers/docs',
        icon: require('../assets/Icons/explorer.png').default,
      },
      {
        title: 'Testnet Faucet',
        subTitle: 'Get KCC testnet Tokens',
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
            route: '/ecosystem/dapp/submit',
            icon: require('../assets/Icons/submit.png').default,
          },
          {
            title: 'Defi Box',
            subTitle: 'Coming soon...',
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
            route: '',
            icon: require('../assets/Icons/metamask.png').default,
          },
          {
            title: 'ImToken',
            subTitle: 'Visit and link to Imtoken',
            route: '',
            icon: require('../assets/Icons/imtoken.png').default,
          },
          {
            title: 'More wallets',
            subTitle: 'Coming soon...',
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
            route: '',
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
        subTitle: 'View the exciting activites information includes hackathons,meetups,and more',
        route: '/community/activity',
        icon: require('../assets/Icons/activity.png').default,
      },
      {
        title: 'Grant Program',
        subTitle: 'support for community development and research',
        route: '/community/grant',
        icon: require('../assets/Icons/grants.png').default,
      },
    ],
  },
]
