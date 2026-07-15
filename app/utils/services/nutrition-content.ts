import type { NutritionResourceGroup } from './types'

export const nutritionClassTopics = [
  'Nutrition',
  'Physical activity',
  'Medications',
  'Preventing diabetes complications',
  'Goal setting',
  'Stress management',
]

export const nutritionClassSessions = [
  'January',
  'March',
  'May',
  'August',
  'October',
]

export const nutritionResourceGroups: NutritionResourceGroup[] = [
  {
    title: 'Diabetes',
    links: [
      { label: 'American Diabetes Association', href: 'https://www.diabetes.org' },
      { label: 'Joslin Diabetes Center', href: 'https://www.joslin.org' },
    ],
  },
  {
    title: 'Nutrition',
    links: [
      { label: 'Eat Right (Academy of Nutrition and Dietetics)', href: 'https://www.eatright.org' },
      { label: 'USDA', href: 'https://www.usda.gov' },
      { label: 'MyPlate', href: 'https://www.myplate.gov' },
    ],
  },
  {
    title: 'Cardiovascular',
    links: [
      { label: 'American Heart Association', href: 'https://www.heart.org' },
    ],
  },
  {
    title: 'Kidney',
    links: [
      { label: 'National Kidney Foundation', href: 'https://www.kidney.org' },
      { label: 'NIDDK', href: 'https://www.niddk.nih.gov' },
    ],
  },
]
