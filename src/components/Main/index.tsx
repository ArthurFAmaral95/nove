import { useState } from 'react'
import '../../styles/main.css'

import { Service, TeamMemberProps } from '../../types/types'
import { SectionHeader } from '../SectionHeader'
import { ServiceBox } from '../ServiceBox'
import { ServiceDetails } from '../ServiceDetails'
import { TeamMemberBox } from '../TeamMemberBox'
import { WhappBtn } from '../WhappBtn'

export function Main() {
  const [selectedService, setSelectedService] = useState('')

  const services: Service[] = [
    {
      service: 'Ortodontia',
      description:
        'Tratamentos completos, como aparelhos auto ligáveis, fixos, estéticos e alinhadores.',
      img_path: './servicesImgs/ortodontia.svg'
    },
    {
      service: 'Estética dental',
      description: 'Tratamentos restauradores com porcelanas e resinas.',
      img_path: './servicesImgs/estetica.svg'
    },
    {
      service: 'Implantodontia',
      description:
        'Reponha a perda parcial ou total dos dentes, restituindo função, estética e saúde do seu sorriso.',
      img_path: './servicesImgs/implantodontia.svg'
    },
    {
      service: 'Prótese',
      description:
        'Uma ótima alternativa para quem deseja repor um ou mais dentes que foram perdidos.',
      img_path: './servicesImgs/protese.svg'
    },
    {
      service: 'Endodontia',
      description:
        'Ou tratamento de canal, a endodontia é a especialidade que cuida da parte interna do dente.',
      img_path: './servicesImgs/endodontia.svg'
    },
    {
      service: 'Periodontia',
      description:
        'Prevenção da saúde bucal e tratamento de doenças gengivais, como gengivite e periodontite.',
      img_path: './servicesImgs/periodontia.svg'
    },
    {
      service: 'Cirurgia',
      description:
        'Diagnóstico, tratamento e acompanhamento de dentes indicados para extração, por exemplo no caso de dentes sisos.',
      img_path: './servicesImgs/cirurgia.svg'
    },
    {
      service: 'Odontopediatria',
      description:
        'Cuida da saúde bucal de crianças, desde o nascimento até a adolescência.',
      img_path: './servicesImgs/odontopediatria.svg'
    },
    {
      service: 'Exames Radiográficos',
      description:
        'Atendimentos focados na saúde bucal e individual de cada paciente.',
      img_path: './servicesImgs/exames.svg'
    }
  ]

  const teamMembers: TeamMemberProps[] = [
    {
      name: 'Davidson Fernandes',
      role: 'Dentista',
      img_path: './teamMembersImgs/davidson.jpeg',
      expertises: ['Especialidade 1', 'Especialidade 2', 'Especialidade 3']
    },
    {
      name: 'Davidson Fernandes',
      role: 'Dentista',
      img_path: './teamMembersImgs/davidson.jpeg',
      expertises: ['Especialidade 1', 'Especialidade 2', 'Especialidade 3']
    },
    {
      name: 'Davidson Fernandes',
      role: 'Dentista',
      img_path: './teamMembersImgs/davidson.jpeg',
      expertises: ['Especialidade 1', 'Especialidade 2', 'Especialidade 3']
    },
    {
      name: 'Davidson Fernandes',
      role: 'Dentista',
      img_path: './teamMembersImgs/davidson.jpeg',
      expertises: ['Especialidade 1', 'Especialidade 2', 'Especialidade 3']
    }
  ]

  const renderServicesList: any = []
  const renderTeamMembers: any = []

  services.map(service => {
    renderServicesList.push(
      <ServiceBox
        service={service.service}
        description={service.description}
        img_path={service.img_path}
        key={service.service}
        selectService={selectService}
      />
    )
  })

  teamMembers.map(member => {
    renderTeamMembers.push(
      <TeamMemberBox
        name={member.name}
        role={member.role}
        img_path={member.img_path}
        expertises={member.expertises}
        key={member.name}
      />
    )
  })

  function selectService(service: string) {
    setSelectedService(service)
  }

  function closeServiceDetails() {
    setSelectedService('')
  }

  return (
    <main>
      <section id="home">
        <div className="content">
          <header>
            <SectionHeader
              h2Text="Núcleo Odontológico Veneza"
              highlight="Tratamentos odontológicos que oferecemos"
              text="Da triagem até o resultado final, trabalhamos com alta gama de
              tratamentos odontológicos, exames digitais e planejamentos gerais."
            />
            <div className="contact">
              <WhappBtn text="Agende sua consulta" />
            </div>
          </header>
          <img src="./mulherSorrindo.png" alt="Mulher sorrindo" />
          <div className="stats">
            <div className="stat">
              <h3>+5000</h3>
              <p>Pacientes atendidos</p>
            </div>
            <div className="stat">
              <h3>9</h3>
              <p>Especialidades disponíveis</p>
            </div>
            <div className="stat">
              <h3>10</h3>
              <p>Anos no mercado</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceDetails
        selectedService={selectedService}
        closeServiceDetails={closeServiceDetails}
      />
      <section id="services">
        <div className="content">
          <header>
            <SectionHeader
              h2Text="Serviços"
              highlight="Tratamentos odontológicos que oferecemos"
              text=""
            />
          </header>
          <ul className="services-list">{renderServicesList}</ul>
        </div>
      </section>
      <section id="team">
        <div className="content">
          <header>
            <SectionHeader
              h2Text="Equipe"
              highlight="Conheça nossa equipe"
              text="Algum texto sobre a equipe"
            />
          </header>
          <ul className="team-members">{renderTeamMembers}</ul>
        </div>
      </section>
      <section id="location-contact">
        <div className="content">
          <header>
            <SectionHeader
              h2Text="Núcleo Odontológico Veneza"
              highlight="Localicação e Contato"
              text="Entre em contato com a gente via WhatsApp, e-mail ou faça-nos uma
              visita."
            />
          </header>
          <div className="contact">
            <WhappBtn text="Chamar no WhatsApp" />
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
