import '../../styles/serviceBox.css'

import { Service, SelectService } from '../../types/types'

type ServiceBoxProps = Service & SelectService

export function ServiceBox(props: ServiceBoxProps) {
  return (
    <li
      className="service"
      onClick={() => {
        props.selectService(props.service)
      }}
    >
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
