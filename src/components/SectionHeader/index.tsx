import { SectionHeaderProps } from '../../types/types'

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <>
      <h2>{props.h2Text}</h2>
      <p className="highlight">{props.highlight}</p>
      <p className="text">{props.text}</p>
    </>
  )
}
