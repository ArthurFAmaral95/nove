import '../../styles/teamMemberBox.css'

import { TeamMemberProps } from '../../types/types'

export function TeamMemberBox(props: TeamMemberProps) {
  const renderEspertises: any[] = []

  props.expertises.map(expertise => {
    renderEspertises.push(<li>&nbsp;&nbsp;{expertise}</li>)
  })

  return (
    <li className="team-member">
      <img
        src={props.img_path}
        alt="Team member photo"
        className="member-img"
      />
      <h3>{props.name}</h3>
      <h5>{props.role}</h5>
      <p>Especialidades</p>
      <ul>{renderEspertises}</ul>
    </li>
  )
}
