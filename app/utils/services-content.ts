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

/** Shared intro copy used on medical and behavioral health service pages. */
export const integratedCareIntro = [
  'Kalihi-Palama Health Center (KPHC) is committed to providing quality integrated health and social services to our community and all others in need of health care.',
  'We provide access to comprehensive primary health care services. We are a patient-centered medical home, and our patients have access to evidence-based care and self-management support. Our focus is preventative primary health care provided in a respectful, caring, and culturally appropriate manner. Our patients have the ability to choose their Primary Care Provider (PCP). We provide care coordination and continuity of care to our patients.',
] as const

export const defaultEligibilityCallout = 'Everyone is welcome. We accept Medicaid, Medicare, and most private insurance, and offer sliding-fee discounts for qualifying patients. No one is turned away for inability to pay.'

export const clinicHoursNote = 'Please call the health center nearest to you to make an appointment. Clinic hours and services vary for each site.'

export const servicesIndexCards: ServiceCard[] = [
  {
    title: 'Medical Services',
    count: '3 Services',
    description: 'Comprehensive primary care for adults, women, and children — including preventive visits, chronic disease management, and family medicine.',
    to: '/services/medical',
    image: '/images/services/medical-services.webp',
    alt: 'Patient and provider in a consultation at Kalihi-Palama Health Center',
  },
  {
    title: 'Behavioral Health and Social Services',
    count: '3 Services',
    description: 'Integrated counseling, case management, and healthcare for the homeless programs that support mind, emotions, and daily life.',
    to: '/services/behavioral-health',
    image: '/images/services/behavioral-health-services.webp',
    alt: 'Kalihi-Palama Health Center community members gathered together',
  },
  {
    title: 'Dental Services',
    count: '4 Clinics',
    description: 'Preventive and restorative dental care for the whole family, with clinics dedicated to adults and children across Honolulu.',
    to: '/services/dental',
    image: '/images/services/dental-services.webp',
    alt: 'Dental provider caring for a patient at Kalihi-Palama Health Center',
  },
  {
    title: 'Additional Services',
    count: '4 Services',
    description: 'Optometry, pharmacy, WIC, and wellness education that wrap around your primary care and keep your family supported.',
    to: '/services/additional',
    image: '/images/services/additional-services.webp',
    alt: 'Healthcare provider administering a vaccination to a patient',
  },
  {
    title: 'Nutrition',
    count: 'ADA Recognized',
    description: 'Diabetes self-management education and registered dietitian counseling to help you build healthier habits every day.',
    to: '/services/nutrition',
    image: '/images/home/wic.webp',
    alt: 'Nutrition support and healthy eating education at Kalihi-Palama Health Center',
  },
]

export const servicesIndexReasons: ServiceReason[] = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Patient-First Approach',
    description: 'Care plans built around your goals, language, culture, and family — not a one-size-fits-all checklist.',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Advanced Healthcare Innovation',
    description: 'Telehealth options, coordinated referrals, and modern clinic tools that make care more accessible.',
  },
  {
    icon: 'i-lucide-award',
    title: 'Award-Winning Certified Quality',
    description: 'Recognized for excellence as a Federally Qualified Health Center and Patient-Centered Medical Home.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Compassionate Community Care',
    description: 'Rooted in Kalihi-Palama, we serve neighbors with aloha — including those who need sliding-scale support.',
  },
]

export const medicalOfferings: ServiceOffering[] = [
  {
    icon: 'i-lucide-user',
    title: 'Adult Medicine',
    description: 'Adult, pediatric, and family medicine with preventive care, wellness visits, immunizations, and care coordination.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Women\'s Health',
    description: 'Reproductive health, prenatal care, screenings, and gynecological services across life stages.',
  },
  {
    icon: 'i-lucide-baby',
    title: 'Pediatric Medicine',
    description: 'Well-baby and well-child care, developmental screening, teen medical care, and sick visits.',
  },
]

export const medicalAdultServices = [
  'Preventative Care',
  'Physical Exams',
  'Annual Wellness Visits',
  'Women\'s Health',
  'Developmental Care',
  'Immunizations',
  'Care Coordination',
]

export const medicalWomensServices = [
  'Reproductive Health Services',
  'Birth Control',
  'Breast Checks',
  'Breast Feeding',
  'Other Gynecological Exams',
  'PAP Smears',
  'Pregnancy Testing and Counseling',
  'Prenatal Care and Delivery Services',
  'STD/HIV Testing and Treatment',
]

export const medicalPediatricServices = [
  'Child Car Safety Education and Inspections',
  'Developmental Screening',
  'Health Education',
  'Sick Child Care and Follow-Up',
  'Teen Medical Care',
  'Well Baby Care',
  'Well-Child Check-Ups',
]

export const medicalClinics: ServiceClinic[] = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 North King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'Mon, Tue, Thu, Fri, Sat 8:00 AM – 5:00 PM · Wed 8:00 AM – 7:00 PM',
  },
  {
    name: 'Kaaahi Clinic',
    address: '546 Kaaahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6342',
    hours: 'Monday–Friday 8:00 AM – 4:00 PM',
  },
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '89 South King Street, Honolulu, HI 96813',
    phone: '(808) 792-5560',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7575',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 791-6330',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Women\'s Health — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7550',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Pediatrics — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7552',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
]

export const medicalWomensClinic: ServiceClinic = {
  name: 'Comprehensive Primary Health Care & Dental Center',
  address: '710 North King Street, Honolulu, HI 96817',
  phone: '(808) 843-7550',
  hours: 'Monday–Friday 8:00 AM – 5:00 PM',
}

export const medicalPediatricClinic: ServiceClinic = {
  name: 'Comprehensive Primary Health Care & Dental Center',
  address: '710 North King Street, Honolulu, HI 96817',
  phone: '(808) 843-7552',
  hours: 'Monday–Friday 8:00 AM – 5:00 PM',
}

export const dentalAppointmentSites: AppointmentSite[] = [
  {
    name: 'Main Medical and Dental Center',
    phone: '(808) 845-0686',
    address: '915 N. King St., Honolulu, HI 96817',
  },
  {
    name: 'Family Dental Clinic, 1st Floor',
    phone: '(808) 843-7502',
    address: '710 N. King St., Honolulu, HI 96817',
  },
  {
    name: 'Children\'s Dental Clinic, 2nd Floor',
    phone: '(808) 843-7520',
    address: '710 N. King St., Honolulu, HI 96817',
  },
  {
    name: 'Downtown Family Dental Center',
    phone: '(808) 792-5576',
    address: '89 S. King St., Honolulu, HI 96813',
  },
]

export const dentalProofOfIncome = [
  'Pay Stubs (at least one month)',
  'Determination letter from the Department of Human Services (Medicaid recipient)',
  'Social Security Benefit Letter',
  'Unemployment Insurance Benefit Stub',
  'Bank or Savings Statement',
  'Current Tax Return',
  'Disability Award Letter',
]

export const behavioralOfferings: ServiceOffering[] = [
  {
    icon: 'i-lucide-messages-square',
    title: 'Behavioral Health',
    description: 'Individual and group therapy, medication management, and consultation for patients of all ages.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Social Services',
    description: 'Case management and crisis support that connect you with essential community resources.',
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Healthcare for the Homeless',
    description: 'Accessible medical care, behavioral health, and housing support for people experiencing homelessness.',
  },
]

export const behavioralServices = [
  'Behavioral Health Consultation',
  'Diagnostic Evaluation',
  'Medication Evaluation and Management',
  'Short-term Psychotherapy',
  'Tobacco Cessation',
  'Substance Abuse Individual and Group Therapy',
  'Individual Psychotherapy',
  'Group Psychotherapy',
  'Stress Management',
  'Domestic Violence',
  'Sex Trafficking',
]

export const behavioralExpectItems: ExpectItem[] = [
  {
    title: 'Patient Centered Care Team Approach',
    body: 'As a patient at Kalihi-Palama Health Center, a team of healthcare professionals and support staff will assist you to meet your healthcare needs. Our goal is to provide you with integrated services to keep you healthy and/or achieve wellness. Our trained integrated care team will assist you to navigate your healthcare needs to include enrollment, financial qualifying, scheduling appointments, medical and specialty care visits, referrals for treatment to specialists or testing, getting prescriptions you need and providing education on important health topics.',
  },
  {
    title: 'The Assessment Process',
    body: 'When you first begin treatment with any healthcare professional at KPHC, you will first begin with an assessment. A healthcare professional will ask you many questions about your concerns, background, and goals so the best treatment/care plan can be developed.',
  },
  {
    title: 'Your Plan of Care',
    body: 'Based on your assessment and request, you and your care team will put together a "treatment plan" and develop self-management goals. With certain healthcare providers in Behavioral Health and Health Care for the Homeless Project, you will be asked to sign that you agree with your treatment plan. Remember, this is YOUR treatment plan so we encourage you to give frequent feedback on your treatment progress and what will be helpful to you to meet your goals.',
  },
  {
    title: 'Self-Management Goals',
    body: 'When working with your healthcare team you may be requested to participate in the development of self-management goals. Self-management goals are goals that you will develop in collaboration with your team of healthcare providers to manage chronic healthcare conditions on a daily basis. These goals are activities including learning, understanding and following medical regimens/recommendations, making changes in lifestyle such as exercise and diet, and dealing with emotions that arise from having a chronic healthcare condition.',
  },
  {
    title: 'Recovery / Transition Plan',
    body: 'When receiving services from certain healthcare providers, such as Behavioral Health and Health Care for the Homeless, as you make progress towards your treatment goals, you will be discussing with your team your next steps in recovery. This may include completion of treatment and discharge from our programs or the need for external specialized services. The eventual goal is to help you have the highest quality independent life possible within the community.',
  },
]

export const behavioralClinics: ServiceClinic[] = [
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 841-7981',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Kaaahi Clinic',
    address: '546 Kaaahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6342',
    hours: 'Monday–Friday 8:00 AM – 4:00 PM',
  },
]

export const homelessPrograms: HomelessProgram[] = [
  {
    title: 'Community-Based Case Management Service',
    body: 'Case Management and 24-hour crisis intervention services are provided to clients with severe and persistent mental illness, alcohol or substance abuse issues, and/or chronic medical issues.',
  },
  {
    title: 'Community Integrated Services (CIS)',
    body: 'Community Integrated Services provides housing-focused support for eligible QUEST Integration (QI) members who are homeless, at risk of homelessness, or transitioning from institutions. The program is managed by Hawaii Med-QUEST and contracted health plans. CIS Case Managers assist clients with housing applications, securing housing, tenancy rights education, and developing skills for independent living.',
  },
  {
    title: 'Ka\'a\'ahi Street Clinic',
    body: 'Located at the IHS Homeless Shelter for Women and Families. Services include Behavioral Health Care, Medical Care, TB Screening, and Follow-up & Referral Service.',
  },
  {
    title: 'Permanent Housing Program',
    body: 'Permanent Housing is a supportive housing program that provides housing subsidies along with long-term case management services to homeless individuals and families with disabilities. Participants pay 30% of their income towards rent, and the program subsidy provides the remaining dollar amount.',
  },
  {
    title: 'Housing First Program',
    body: 'Housing First is a collaborative effort with U.S. VETS that provide case management, housing assistance, and supportive services to chronically homeless individuals and families. Services are provided with the immediate and primary focus on helping participants to quickly access and sustain permanent housing. The Housing First model is recognized as a Best Practice by the National Alliance to End Homelessness.',
  },
]

export const additionalOfferings: ServiceOffering[] = [
  {
    icon: 'i-lucide-glasses',
    title: 'Optometry',
    description: 'Comprehensive eye exams, diabetic eye screening, and vision care for the whole family.',
  },
  {
    icon: 'i-lucide-pill',
    title: 'Pharmacy',
    description: 'On-site prescription filling, patient education, and financial assistance options.',
  },
  {
    icon: 'i-lucide-shopping-cart',
    title: 'Women, Infants, & Children (WIC)',
    description: 'Nutrition education, breastfeeding support, and healthy food benefits for eligible families.',
  },
  {
    icon: 'i-lucide-heart-pulse',
    title: 'Wellness & Prevention Education',
    description: 'Classes and workshops that help you build healthy habits and prevent chronic illness.',
  },
]

export const optometryServices = [
  'Comprehensive eye exams',
  'Diabetic eye screening',
  'Computer vision and near-work strain evaluation',
  'Eyeglass prescriptions and referrals',
]

export const pharmacyServices = [
  'Prescription filling and refills',
  'Patient medication education',
  'Automatic refill options',
  'Financial assistance counseling',
]

export const pharmacyLocations: ServiceClinic[] = [
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '89 South King Street, Honolulu, HI 96813',
    phone: '(808) 792-5560',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7575',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 791-6330',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
]

export const wellnessPrograms = [
  'Asthma education',
  'Tobacco prevention and cessation support',
  'Nutrition education',
  'Diabetes self-management',
  'Physical activity and healthy lifestyle workshops',
  'Chronic disease prevention classes',
]

export const wicDocuments = [
  'Proof of identity for each applicant',
  'Proof of Hawaii residency',
  'Proof of income or adjunctive eligibility',
  'Immunization records for children (when available)',
]

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
