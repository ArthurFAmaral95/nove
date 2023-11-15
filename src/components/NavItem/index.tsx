import { NavItemProps } from '../../types/types'

export function NavItem(props: NavItemProps) {
  return (
    <li
      onClick={() => {
        document.body.classList.remove('menu-expanded')
      }}
    >
      <a href={props.href}>{props.text}</a>
      <span></span>
    </li>
  )
}
