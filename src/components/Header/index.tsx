import '../../styles/header.css'
import { Nav } from '../Nav'

export function Header() {
  return (
    <header id="header">
      <div className="content">
        <img
          src="./logo.png"
          alt="Núcleo Odontológico Veneza"
          className="logo"
        />
        <Nav />
        <div className="icons">
          <img
            src="./menu.svg"
            alt="open menu"
            id="menu-icon"
            onClick={() => {
              document.body.classList.add('menu-expanded')
            }}
          />
          <img
            src="./close.svg"
            alt="close menu"
            id="close-icon"
            onClick={() => {
              document.body.classList.remove('menu-expanded')
            }}
          />
        </div>
      </div>
    </header>
  )
}
