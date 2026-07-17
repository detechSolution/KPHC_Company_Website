import type { BehavioralProvider, ExpectItem, HomelessProgram, ServiceClinic, ServiceOffering } from './types'

export const behavioralProviders: BehavioralProvider[] = [
  {
    name: 'Camille Ambrose-Santos, LCSW',
    specialty: 'Behavioral Health',
    locations: ['Downtown (89 S King Street)', '952 N King Street'],
    credentials: 'Licensed Clinical Social Worker',
    education: [
      'University of Hawaii at Manoa',
      'Master of Social Work',
    ],
  },
  {
    name: 'Matthew Marchetto-Ryan, Psy.D',
    specialty: 'Behavioral Health',
    locations: ['952 N King Street', '915 N King Street', 'Downtown (89 S King Street)'],
    credentials: 'Licensed Clinical Psychologist — Hawai\'i State',
    education: [
      'Hawai\'i School of Professional Psychology at Argosy University',
      'Master of Science in Psychopharmacology — Alliant University',
    ],
    professionalInterests: 'Generalist — Community Mental Health Care',
    personalInterests: 'Hiking, biking, gardening, reading (fiction), movies, and gaming',
  },
  {
    name: 'Kesha Mimms, APRN',
    specialty: 'Psychiatry',
    locations: ['952 N King Street', 'Downtown (89 S King Street)', 'Ka\'a\'ahi Clinic'],
    credentials: 'Psychiatric Mental Health Nurse Practitioner',
    education: [
      'Northeastern University',
      'Salem State University',
      'Northeast Behavioral Health / Lahey Haverhill Clinic / Cornerstone Day Program',
    ],
    professionalInterests: 'Adults, geriatrics, SUD, LGBTQ, SPMI',
    personalInterests: 'Yoga, hiking, cooking, family, and dancing',
  },
  {
    name: 'Rieko Nieto, LCSW',
    specialty: 'Behavioral Health',
    locations: ['710 N King Street', '952 N King Street'],
    credentials: 'Licensed Clinical Social Worker / Certified Substance Abuse Counselor',
    education: [
      'University of Hawaii at Manoa',
      'Master of Social Work',
    ],
    personalInterests: 'Tahitian dance, hula, surfing, hiking, and fishing',
  },
  {
    name: 'Darrin Sato, LCSW',
    specialty: 'Behavioral Health',
    locations: ['Downtown (89 S King Street)', '915 N King Street'],
    credentials: 'Licensed Clinical Social Worker',
    education: [
      'University of Hawaii at Manoa',
      'Master of Social Work',
    ],
  },
  {
    name: 'Jermaine Turner, LCSW',
    specialty: 'Behavioral Health',
    locations: ['952 N King Street', '915 N King Street', 'Ka\'a\'ahi Clinic'],
    credentials: 'Licensed Clinical Social Worker',
    education: [
      'Master of Social Work',
    ],
  },
  {
    name: 'Joanne Williams, APRN',
    specialty: 'Psychiatry',
    locations: ['952 N King Street'],
    credentials: 'Board Certified ANCC',
    featured: true,
    education: [
      'Saint John Fisher University — MSN, PMHNP',
      'SUNY Brockport — BSN',
      'SUNY Geneseo — BA in English',
    ],
    professionalInterests: 'Joanne is a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) with extensive experience providing care across the lifespan. She brings strong clinical expertise in psychiatric evaluation, diagnosis, medication management, and evidence-based psychotherapy, along with advanced skills in crisis intervention and high-acuity care. Grounded in integrity and the principles of beneficence and non-maleficence, she delivers patient-centered, collaborative care. Passionate about reducing mental health stigma, she empowers patients to achieve lasting cognitive and behavioral change by fostering a safe and supportive environment that promotes growth and resilience. A diverse background in psychiatry, pediatrics, and education informs a holistic and compassionate approach to care.',
    personalInterests: 'Joanne enjoys journaling about life, reading books with meaningful and transformative insights, and spending time outdoors surfing, hiking, and swimming in the ocean. She embraces adventure and values opportunities for exploration and personal growth.',
  },
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
