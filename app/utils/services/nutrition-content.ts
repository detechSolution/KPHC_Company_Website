import type { NutritionClassSeries, NutritionResourceGroup } from './types'

export const nutritionClassTopics = [
  'Nutrition',
  'Physical activity',
  'Medications',
  'Preventing diabetes complications',
  'Goal setting',
  'Stress management',
]

export const nutritionClassSchedule = {
  year: 2027,
  weekday: 'Tuesdays',
  time: '1:00–4:00 PM',
  location: '952 North King Street clinic conference room',
  downtownLocation: 'Downtown Family Medical & Dental Center (89 South King Street)',
} as const

export const nutritionClassSeries: NutritionClassSeries[] = [
  { id: '2027-jan-en', language: 'English', dates: 'January 12, 19 & 26' },
  { id: '2027-feb-chk', language: 'Chuukese', dates: 'February 9, 16 & 23' },
  { id: '2027-mar-fil', language: 'Filipino', dates: 'March 9, 16 & 23' },
  { id: '2027-apr-en', language: 'English', dates: 'April 13, 20 & 27' },
  { id: '2027-may-mh', language: 'Marshallese', dates: 'May 11, 18 & 25' },
  { id: '2027-jun-zh', language: 'Chinese', dates: 'June 2', note: 'Wednesday at the Downtown clinic' },
  { id: '2027-jun-en', language: 'English', dates: 'June 8, 15 & 22' },
  { id: '2027-jul-chk', language: 'Chuukese', dates: 'July 13, 20 & 27' },
  { id: '2027-aug-en', language: 'English', dates: 'August 10, 17 & 24' },
  { id: '2027-sep-fil', language: 'Filipino', dates: 'September 14, 21 & 28' },
  { id: '2027-oct-en', language: 'English', dates: 'October 12, 19 & 26' },
  { id: '2027-nov-zh', language: 'Chinese', dates: 'November 3', note: 'Wednesday at the Downtown clinic' },
  { id: '2027-nov-chk', language: 'Chuukese', dates: 'November 9, 16 & 23' },
  { id: '2027-dec-mh', language: 'Marshallese', dates: 'December 14, 21 & 28' },
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
