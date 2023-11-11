import '../styles/home.css'

import { Header } from '../components/Header'
import { Main } from '../components/Main'

export function Home() {
  return (
    <div className="container">
      <Header />
      <Main/>
    </div>
  )
}
