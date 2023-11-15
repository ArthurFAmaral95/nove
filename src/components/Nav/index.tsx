import '../../styles/nav.css'
import { NavItem } from '../NavItem'

export function Nav() {
  return (
    <nav>
      <ul>
        <NavItem href="#home" text="Início" />
        <NavItem href="#services" text="Serviços" />
        <NavItem href="#location-contact" text="Localização e Contato" />
      </ul>
      <div className="contact">
        <a href="https://wa.me/+553186613230" target="_blank">
          <img src="./whatsapp.svg" alt="WhatsApp" /> Agende sua consulta
        </a>
      </div>
    </nav>
  )
}
