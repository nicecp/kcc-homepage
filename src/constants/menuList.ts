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
        icon: '',
      },
      {
        title: 'Github',
        subTitle: 'Visit our github community',
        route: '/developers/github',
        icon: '',
      },
      {
        title: 'Testnet Explorer',
        subTitle: 'View information on the KCC public chain (testnet)',
        route: '/developers/docs',
        icon: '',
      },
      {
        title: 'Testnet Faucet',
        subTitle: 'Get KCC testnet Tokens',
        route: KCC.FAUCET,
        icon: '',
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
            icon: '',
          },
          {
            title: 'Defi Box',
            subTitle: 'Coming soon...',
            route: '',
            icon: '',
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
            icon: '',
          },
          {
            title: 'ImToken',
            subTitle: 'Visit and link to Imtoken',
            route: '',
            icon: '',
          },
          {
            title: 'More wallets',
            subTitle: 'Coming soon...',
            route: '',
            icon: '',
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
            icon: '',
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
        icon: '',
      },
      {
        title: 'Grant Program',
        subTitle: 'support for community development and research',
        route: '/community/grant',
        icon: '',
      },
    ],
  },
]
