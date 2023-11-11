import '../../styles/header.css'

export function Header() {
  return (
    <header id="header">
      <img src="../../../public/logo.png" alt="Núcleo Odontológico Veneza" id='logo'/>
      <div className="icons">
        <img src="../../../public/menu.svg" alt="menu" id="menu-icon" />
        <img src="../../../public/close.svg" alt="close" id="close-icon" className='hidden'/>
      </div>
    </header>
  )
}
