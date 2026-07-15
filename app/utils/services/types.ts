export interface ServiceOffering {
  icon: string
  title: string
  description: string
}

export interface ServiceClinic {
  name: string
  address: string
  phone: string
  hours: string
}

export interface AppointmentSite {
  name: string
  phone: string
  address: string
}

export interface ExpectItem {
  title: string
  body: string
}

export interface HomelessProgram {
  title: string
  body: string
}

export interface ServiceCard {
  title: string
  count: string
  description: string
  to: string
  image: string
  alt: string
}

export interface ServiceReason {
  icon: string
  title: string
  description: string
}

export interface NutritionResourceGroup {
  title: string
  links: { label: string, href: string }[]
}
