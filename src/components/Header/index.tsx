import '../../styles/header.css'
import { Nav } from '../Nav'

import { HandleMenu, MenuOpen } from '../../types/types'

type Header = MenuOpen & HandleMenu

export function Header(props: Header) {
  return (
    <header id="header">
      <div className="content">
        <img
          src="./logo.png"
          alt="Núcleo Odontológico Veneza"
          className="logo"
        />
        <Nav menuOpen={props.menuOpen} handleMenu={props.handleMenu} />
        <div className="icons">
          <img
            src="./menu.svg"
            alt="open menu"
            id="menu-icon"
            className={props.menuOpen ? 'hidden' : ''}
            onClick={() => {
              props.handleMenu(true)
            }}
          />
          <img
            src="./close.svg"
            alt="close menu"
            id="close-icon"
            className={props.menuOpen ? '' : 'hidden'}
            onClick={() => {
              props.handleMenu(false)
            }}
          />
        </div>
      </div>
    </header>
  )
}
