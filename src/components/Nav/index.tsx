import '../../styles/nav.css'
import { NavItem } from '../NavItem'
import { WhappBtn } from '../WhappBtn'

export function Nav() {
  return (
    <nav>
      <ul>
        <NavItem href="#home" text="Início" />
        <NavItem href="#services" text="Serviços" />
        <NavItem href="#location-contact" text="Localização e Contato" />
      </ul>
      <div className="contact">
        <WhappBtn text="Agende sua consulta" />
      </div>
    </nav>
  )
}
