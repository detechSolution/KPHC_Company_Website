export interface ServiceNavLink {
  label: string
  to: string
  icon: string
}

export const servicesNavLinks: ServiceNavLink[] = [
  {
    label: 'Medical Services',
    to: '/services/medical',
    icon: 'i-lucide-stethoscope',
  },
  {
    label: 'Behavioral Health',
    to: '/services/behavioral-health',
    icon: 'i-lucide-brain',
  },
  {
    label: 'Dental Services',
    to: '/services/dental',
    icon: 'i-lucide-smile',
  },
  {
    label: 'Additional Services',
    to: '/services/additional',
    icon: 'i-lucide-plus-circle',
  },
  {
    label: 'Nutrition',
    to: '/services/nutrition',
    icon: 'i-lucide-salad',
  },
  {
    label: 'WIC',
    to: '/services/wic',
    icon: 'i-lucide-shopping-cart',
  },
]
