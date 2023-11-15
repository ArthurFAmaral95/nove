export type Service = {
  service: string
  description: string
  img_path: string
}

export type SelectedServiceProps = {
  selectedService: string
}

export type NavItemProps = {
  href: string
  text: string
}

export type WhappBtnProps = {
  text: string
}

export type SectionHeaderProps = {
  h2Text: string
  highlight: string
  text: string
}

export type TeamMemberProps = {
  name: string
  role: string
  img_path: string
  expertises: string[]
}

export type SelectService = {
  selectService: (service: string) => void
}

export type CloseServiceDetails = {
  closeServiceDetails: () => void
}
