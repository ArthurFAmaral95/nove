import { WhappBtnProps } from '../../types/types'

export function WhappBtn(props: WhappBtnProps) {
  return (
    <a href="https://wa.me/+553186613230" target="_blank">
      <img src="./whatsapp.svg" alt="WhatsApp" /> {props.text}
    </a>
  )
}
