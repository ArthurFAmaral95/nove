import '../../styles/main.css'

import { Service } from '../../types/types'
import { ServiceBox } from '../ServiceBox'

export function Main() {
  const services: Service[] = [
    {
      service: 'Ortodontia',
      description:
        'Tratamentos completos, como aparelhos auto ligáveis, fixos, estéticos e alinhadores.',
      img_path: './ortodontia.svg'
    },
    {
      service: 'Estética dental',
      description: 'Tratamentos restauradores com porcelanas e resinas.',
      img_path: './estetica.svg'
    },
    {
      service: 'Implantodontia',
      description:
        'Reponha a perda parcial ou total dos dentes, restituindo função, estética e saúde do seu sorriso.',
      img_path: './implantodontia.svg'
    },
    {
      service: 'Prótese',
      description:
        'Uma ótima alternativa para quem deseja repor um ou mais dentes que foram perdidos.',
      img_path: './protese.svg'
    },
    {
      service: 'Endodontia',
      description:
        'Ou tratamento de canal, a endodontia é a especialidade que cuida da parte interna do dente.',
      img_path: './endodontia.svg'
    },
    {
      service: 'Periodontia',
      description:
        'Prevenção da saúde bucal e tratamento de doenças gengivais, como gengivite e periodontite.',
      img_path: './periodontia.svg'
    },
    {
      service: 'Cirurgia',
      description:
        'Diagnóstico, tratamento e acompanhamento de dentes indicados para extração, por exemplo no caso de dentes sisos.',
      img_path: './cirurgia.svg'
    },
    {
      service: 'Odontopediatria',
      description:
        'Cuida da saúde bucal de crianças, desde o nascimento até a adolescência.',
      img_path: './odontopediatria.svg'
    },
    {
      service: 'Exames Radiográficos',
      description:
        'Atendimentos focados na saúde bucal e individual de cada paciente.',
      img_path: './exames.svg'
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
        <div className="content">
          <header>
            <h2>NÚCLEO ODONTOLÓGICO VENEZA</h2>
            <p className="highlight">
              Tratamentos odontológicos que oferecemos
            </p>
            <p className="text">
              Da triagem até o resultado final, trabalhamos com alta gama de
              tratamentos odontológicos, exames digitais e planejamentos gerais.
            </p>
          </header>
          <ul className="services-list">{renderServicesList}</ul>
        </div>
      </section>
      <section id="location-contact">
        <div className="content">
          <header>
            <h2>NÚCLEO ODONTOLÓGICO VENEZA</h2>
            <p className="highlight">Localicação e contato</p>
            <p className="text">
              Entre em contato com a gente via WhatsApp, e-mail ou faça-nos uma
              visita.
            </p>
          </header>
          <div className="contact">
            <a href="https://wa.me/+553186613230" target="_blank">
              <img src="./whatsapp.svg" alt="WhatsApp" /> Chamar no WhatsApp
            </a>
            <a href="mailto:nove.veneza@gmail.com">
              <img src="./mail.svg" alt="Mail" /> Enviar e-mail
            </a>
          </div>
          <div className="location">
            <div id="address">
              <img src="./location.svg" alt="Location" />
              <p>
                Rua Helena Sapori Faluba, 553 - Veneza, Ribeirão das Neves - MG,
                33820170
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.7018544056823!2d-44.13478242477697!3d-19.767817881584506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6f287b7272271%3A0x382fdd7567c0c68a!2sR.%20Helena%20Sapori%20Faluba%2C%20553%20-%20Veneza%2C%20Ribeir%C3%A3o%20das%20Neves%20-%20MG%2C%2033820-170!5e0!3m2!1spt-BR!2sbr!4v1699739321458!5m2!1spt-BR!2sbr"
              width="260"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
