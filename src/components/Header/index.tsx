import '../../styles/header.css'

export function Header() {
  return (
    <header id="header">
      <div className="content">
        <img src="./logo.png" alt="Núcleo Odontológico Veneza" id="logo" />
        <div className="icons">
          <img src="./menu.svg" alt="menu" id="menu-icon" />
          <img
            src="./close.svg"
            alt="close"
            id="close-icon"
            className="hidden"
          />
        </div>
      </div>
    </header>
  )
}
