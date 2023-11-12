import '../styles/home.css'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { useState } from 'react'

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu(boolean: boolean) {
    setMenuOpen(boolean)
  }

  return (
    <div className={menuOpen ? 'container menu-expanded' : 'container'}>
      <Header handleMenu={handleMenu} menuOpen={menuOpen} />
      <Main />
      <Footer />
    </div>
  )
}
