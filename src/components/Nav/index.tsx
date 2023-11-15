import '../../styles/nav.css'

export function Nav() {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            document.body.classList.remove('menu-expanded')
          }}
        >
          <a href="#home">Início</a>
          <span></span>
        </li>
        <li
          onClick={() => {
            document.body.classList.remove('menu-expanded')
          }}
        >
          <a href="#services">Serviços</a>
          <span></span>
        </li>
        <li
          onClick={() => {
            document.body.classList.remove('menu-expanded')
          }}
        >
          <a href="#location-contact">Localização e Contato</a>
          <span></span>
        </li>
      </ul>
      <div className="contact">
        <a href="https://wa.me/+553186613230" target="_blank">
          <img src="./whatsapp.svg" alt="WhatsApp" /> Agende sua consulta
        </a>
      </div>
    </nav>
  )
}
