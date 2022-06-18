import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'

export default function SideBar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Anasayfa
      </a>
      <a className="menu-item" href="/">
        Kullanıcılar
      </a>
      <a className="menu-item" href="/">
        Ürünler
      </a>
      <a className="menu-item" href="/">
        Müşteriler
      </a>
    </Menu>
  )
}
