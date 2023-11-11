import '../../styles/serviceBox.css'

import { Service } from '../../types/types'

export function ServiceBox(props: Service) {
  return (
    <li className="service">
      <div className="service-icon">
        <img src={props.img_path} alt="service icon" />
      </div>
      <div className="service-info">
        <span className="service-name">{props.service}</span>
        <p className="service-description">{props.description}</p>
      </div>
    </li>
  )
}
