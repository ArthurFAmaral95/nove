import '../../styles/serviceDetails.css'

import { SelectedServiceProps, CloseServiceDetails } from '../../types/types'

type ServiceDetailsProps = SelectedServiceProps & CloseServiceDetails

export function ServiceDetails(props: ServiceDetailsProps) {
  return (
    <div
      className={
        props.selectedService ? 'service-details' : 'service-details hidden'
      }
    >
      <div className="content">
        <header>
          <h2>{props.selectedService}</h2>
          <img
            src="./close.svg"
            alt="close menu"
            id="close-service-details"
            onClick={() => {
              props.closeServiceDetails()
            }}
          />
        </header>
        <div className="service-imgs">
          <img src="./teamMembersImgs/davidson.jpeg" alt="Servide image" />
          <img src="./teamMembersImgs/davidson.jpeg" alt="Service image" />
          <img src="./teamMembersImgs/davidson.jpeg" alt="Servide image" />
          <img src="./teamMembersImgs/davidson.jpeg" alt="Service image" />
        </div>
        <section className="service-details-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            debitis velit. Est voluptate alias doloremque natus quas nihil
            architecto rerum quibusdam. Minus et optio ratione, aspernatur a
            ducimus hic eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit
            aspernatur quaerat ipsam omnis in ipsa dicta velit? Error,
            repudiandae. Ipsam ullam quas sint? Vero odio accusamus repudiandae
            quos quidem.
          </p>
        </section>
      </div>
    </div>
  )
}
