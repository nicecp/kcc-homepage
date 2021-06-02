import { Menu } from 'antd'

import React from 'react'
import styled from 'styled-components'
import { NavItemType, NavItemChildrenType, NavItemGroupType, MenuList } from '../../constants/menuList'
import { NavLink } from 'react-router-dom'

export interface AppMenuProps {}

const MenuWrap = styled.div`
  margin-left: 40px;
`

const { SubMenu } = Menu

const AppMenu: React.FunctionComponent<AppMenuProps> = () => {
  const genNavList = (navItem: NavItemType) => {
    // no children
    if (!navItem.hasChildren && navItem?.route) {
      return (
        <Menu.Item key={navItem.name}>
          <NavLink to={navItem.route} activeClassName="selected">
            {navItem.name}
          </NavLink>
        </Menu.Item>
      )
    }

    // has children & not group menu
    if (navItem?.hasChildren && !navItem?.hasGroup) {
      const subMenuList = navItem.childrens as NavItemChildrenType[]

      const lists = subMenuList?.map((item) => {
        return <Menu.Item key={item.title}>{item.title}</Menu.Item>
      })

      return (
        <SubMenu key={navItem.name} title={navItem.name}>
          {lists}
        </SubMenu>
      )
    }

    // gourp menu &  has children
    if (navItem?.hasGroup) {
      const groupList = navItem.childrens as NavItemGroupType[]
      const groupDom = groupList?.map((group, index) => {
        const groupMember = group.groupMember

        const groupItemDom = groupMember.map((groupChild) => {
          return <Menu.Item key={groupChild.title}>{groupChild.title}</Menu.Item>
        })

        return (
          <Menu.ItemGroup key={index} title={group.groupName}>
            {groupItemDom}
          </Menu.ItemGroup>
        )
      })
      return (
        <SubMenu key={navItem.name} title={navItem.name}>
          {groupDom}
        </SubMenu>
      )
    }

    return null
  }

  const MenuListDom = MenuList.map((item) => {
    return genNavList(item)
  })

  return (
    <MenuWrap>
      <Menu mode="horizontal" style={{ border: 'none' }}>
        {MenuListDom}
      </Menu>
    </MenuWrap>
  )
}

export default AppMenu
