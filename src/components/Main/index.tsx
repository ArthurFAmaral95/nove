import '../../styles/main.css'

import { Service } from '../../types/types'
import { ServiceBox } from '../ServiceBox'

export function Main() {
  const services: Service[] = [
    {
      service: 'Ortodontia',
      description:
        'Tratamentos completos, como aparelhos auto ligáveis, fixos, estéticos e alinhadores.',
      img_path: '../../../public/ortodontia.svg'
    },
    {
      service: 'Estética dental',
      description: 'Tratamentos restauradores com porcelanas e resinas.',
      img_path: '../../../public/estetica.svg'
    },
    {
      service: 'Implantodontia',
      description:
        'Reponha a perda parcial ou total dos dentes, restituindo função, estética e saúde do seu sorriso.',
      img_path: '../../../public/implantodontia.svg'
    },
    {
      service: 'Prótese',
      description:
        'Uma ótima alternativa para quem deseja repor um ou mais dentes que foram perdidos.',
      img_path: '../../../public/protese.svg'
    },
    {
      service: 'Endodontia',
      description:
        'Ou tratamento de canal, a endodontia é a especialidade que cuida da parte interna do dente.',
      img_path: '../../../public/endodontia.svg'
    },
    {
      service: 'Periodontia',
      description:
        'Prevenção da saúde bucal e tratamento de doenças gengivais, como gengivite e periodontite.',
      img_path: '../../../public/periodontia.svg'
    },
    {
      service: 'Cirurgia',
      description:
        'Diagnóstico, tratamento e acompanhamento de dentes indicados para extração, por exemplo no caso de dentes sisos.',
      img_path: '../../../public/cirurgia.svg'
    },
    {
      service: 'Odontopediatria',
      description:
        'Cuida da saúde bucal de crianças, desde o nascimento até a adolescência.',
      img_path: '../../../public/odontopediatria.svg'
    },
    {
      service: 'Exames Radiográficos',
      description:
        'Atendimentos focados na saúde bucal e individual de cada paciente.',
      img_path: '../../../public/exames.svg'
    }
  ]

  const renderServicesList: any = []

  services.map(service => {
    renderServicesList.push(
      <ServiceBox
        service={service.service}
        description={service.description}
        img_path={service.img_path}
        key={service.service}
      />
    )
  })

  return (
    <main>
      <section id="services">
        <header>
          <h1>NÚCLEO ODONTOLÓGICO VENEZA</h1>
          <p id="services-highlight">
            Tratamentos odontológicos que oferecemos
          </p>
          <p id="services-text">
            Da triagem até o resultado final, trabalhamos com alta gama de
            tratamentos odontológicos, exames digitais e planejamentos gerais.
          </p>
        </header>
        <ul className="services-list">{renderServicesList}</ul>
      </section>
    </main>
  )
}
