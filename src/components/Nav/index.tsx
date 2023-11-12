import '../../styles/nav.css'

import { MenuOpen, HandleMenu } from '../../types/types'

type Nav = MenuOpen & HandleMenu

export function Nav(props: Nav) {
  return (
    <nav className={props.menuOpen ? '' : 'hidden'}>
      <ul>
        <li
          onClick={() => {
            props.handleMenu(false)
          }}
        >
          <a href="#services">Serviços</a>
        </li>
        <li
          onClick={() => {
            props.handleMenu(false)
          }}
        >
          <a href="#location-contact">Localização e Contato</a>
        </li>
      </ul>
      <div className="contact">
        <a
          href="https://wa.me/+553186613230"
          target="_blank"
          onClick={() => {
            props.handleMenu(false)
          }}
        >
          <img src="./whatsapp.svg" alt="WhatsApp" /> Agende sua consulta
        </a>
      </div>
    </nav>
  )
}