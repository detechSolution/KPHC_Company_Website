export interface Provider {
  name: string
  specialty: string
  locations: string[]
  credentials: string
  education?: string[]
  residencyTraining?: string[]
  professionalInterests?: string
  personalInterests?: string
  featured?: boolean
}

export const providerSpecialties = [
  'Behavioral Health',
  'Dental',
  'Family Medicine',
  'Internal Medicine',
  'Nutrition',
  'Obstetrics & Gynecology',
  'Pediatrics',
  'Preventive Medicine',
  'Psychiatry',
  'Women\'s Health',
] as const

export type ProviderSpecialty = typeof providerSpecialties[number]

export const providers: Provider[] = [
  {
    name: 'Adeline Adachi, APRN',
    specialty: 'Family Medicine',
    locations: ['Main Medical & Dental Center — 915 N King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: ['University of Hawaii at Manoa'],
  },
  {
    name: 'Alice Ramos-Yoshida, APRN',
    specialty: 'Pediatrics',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'Pediatric Nurse Practitioner - Board Certified',
    education: [
      'Hawaii Loa College',
      'University of Hawaii at Manoa',
    ],
  },
  {
    name: 'Ann Chang, MD, MPH',
    specialty: 'Obstetrics & Gynecology',
    locations: ['Comprehensive Primary Health Care — 710 N King St', 'Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'American Board of Obstetrics & Gynecology',
    education: [
      'Harvard College',
      'Harvard Medical School',
      'Master of Public Health - University of Hawaii',
    ],
    residencyTraining: ['University of Hawaii - Obstetrics & Gynecology'],
  },
  {
    name: 'Blandina Mamaclay, APRN',
    specialty: 'Pediatrics',
    locations: ['Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'Pediatric Nurse Practitioner - Board Certified',
    education: ['University of Hawaii at Manoa'],
    personalInterests: 'Enjoys Bikram Yoga, walking, nature',
  },
  {
    name: 'Camille Ambrose-Santos, LCSW',
    specialty: 'Behavioral Health',
    locations: ['Downtown Family Medical & Dental — 89 S King St', 'Behavioral Health & Medical — 952 N King St'],
    credentials: 'Licensed Clinical Social Worker',
    education: [
      'University of Hawaii at Manoa',
      'Master of Social Work',
    ],
  },
  {
    name: 'Chen Yen Wang, APRN, PhD',
    specialty: 'Internal Medicine',
    locations: ['Downtown Family Medical & Dental — 89 S King St', 'Behavioral Health & Medical — 952 N King St'],
    credentials: 'Adult Nurse Practitioner - Board Certified',
    education: [
      'University of Tennessee, Knoxville',
      'Ph.D. in Biochemistry - University of Tennessee, Knoxville',
    ],
  },
  {
    name: 'Christina Ho, APRN',
    specialty: 'Internal Medicine',
    locations: ['Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: ['University of Hawaii at Manoa'],
  },
  {
    name: 'Hanh Le-Scott, APRN',
    specialty: 'Family Medicine',
    locations: ['Main Medical & Dental Center — 915 N King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: [
      'University of Hawaii at Manoa',
      'Master of Business Administration - Chaminade University of Honolulu',
    ],
  },
  {
    name: 'Jackie Hui, APRN',
    specialty: 'Family Medicine',
    locations: ['Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: ['University of Hawaii at Manoa'],
  },
  {
    name: 'Jermaine Turner, LCSW',
    specialty: 'Behavioral Health',
    locations: ['Behavioral Health & Medical — 952 N King St', 'Main Medical & Dental Center — 915 N King St', 'Ka\'a\'ahi Clinic — 546 Ka\'a\'ahi St'],
    credentials: 'Licensed Clinical Social Worker',
  },
  {
    name: 'Joanne Williams, APRN',
    specialty: 'Psychiatry',
    locations: ['Behavioral Health & Medical — 952 N King St'],
    credentials: 'Board Certified ANCC',
    education: [
      'Saint John Fisher University, MSN, PMHNP',
      'SUNY Brockport accelerated program, BSN',
      'SUNY Geneseo, BA in English',
    ],
  },
  {
    name: 'Keith Larson, DDS',
    specialty: 'Dental',
    locations: ['Downtown Family Medical & Dental — 89 S King St', 'Main Medical & Dental Center — 915 N King St'],
    credentials: 'Compliance Officer & Dental Director',
    education: [
      'University of Minnesota',
      'BS, DDS',
    ],
  },
  {
    name: 'Kyle Alimurung, MD',
    specialty: 'Internal Medicine',
    locations: ['Comprehensive Primary Health Care — 710 N King St', 'Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'American Board of Internal Medicine',
    education: [
      'Ateneo de Manila University',
      'University of Santo Tomas',
    ],
    residencyTraining: ['University of Hawaii - Internal Medicine'],
  },
  {
    name: 'Leanna Gordon, DO, MPH',
    specialty: 'Preventive Medicine',
    locations: ['Comprehensive Primary Health Care — 710 N King St', 'Main Medical & Dental Center — 915 N King St'],
    credentials: 'American Board of Preventive Medicine',
    education: [
      'Grand Valley State University',
      'Michigan State University College of Osteopathic Medicine',
      'Master of Public Health - University of Washington',
    ],
    residencyTraining: ['Madigan Army Medical Center - Preventive Medicine'],
    professionalInterests: 'Preventive Medicine, Lifestyle Medicine',
    personalInterests: 'Hiking, Snorkeling, Reading',
  },
  {
    name: 'Maile Ishikawa, RD',
    specialty: 'Nutrition',
    locations: ['Main Medical & Dental Center — 915 N King St'],
    credentials: 'Certified Diabetes Care and Education Specialist (CDCES)',
    education: ['University of Hawaii at Manoa'],
    professionalInterests: 'Returned Peace Corps Volunteer (Youth Development Specialist) from Sept 2017-Nov 2019 in Ukraine. Hawaii Academy of Nutrition and Dietetics (HAND) Web Editor from Jun 2022-Jun 2025. 2025 Hawaii Recognized Young Dietitian of the Year.',
    personalInterests: 'Traveling, Staying physically active, Spending time with family',
    featured: true,
  },
  {
    name: 'Matthew Marchetto-Ryan, Psy.D',
    specialty: 'Behavioral Health',
    locations: ['Behavioral Health & Medical — 952 N King St', 'Main Medical & Dental Center — 915 N King St', 'Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'Licensed Clinical Psychologist — Hawai\'i State',
    education: [
      'Hawai\'i School of Professional Psychology at Argosy University',
      'Master of Science in Psychopharmacology — Alliant University',
    ],
  },
  {
    name: 'Michael Walter, MD, MPH',
    specialty: 'Pediatrics',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'American Board of Pediatrics',
    education: [
      'The University of North Texas',
      'The University of Texas Medical Branch at Galveston',
      'Master of Public Health - University of Hawaii',
    ],
    residencyTraining: ['Austin Pediatric Education Program - Pediatrics'],
  },
  {
    name: 'Milani Kyaw, APRN',
    specialty: 'Women\'s Health',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'Women\'s Health Nurse Practitioner - Board Certified',
    education: [
      'Saint Mary\'s College of California',
      'Vanderbilt University',
    ],
    professionalInterests: 'Preconception and prenatal care, sexual health education, family planning',
    personalInterests: 'Pilates, hiking, beach sunsets, cooking shows',
  },
  {
    name: 'Mish Kuklok, APRN',
    specialty: 'Family Medicine',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: ['University of Hawaii at Manoa'],
  },
  {
    name: 'Naoko Hokari, MD',
    specialty: 'Pediatrics',
    locations: ['Main Medical & Dental Center — 915 N King St'],
    credentials: 'American Board of Pediatrics',
    education: [
      'Columbia University',
      'Mount Sinai School of Medicine',
    ],
    residencyTraining: ['Robert Wood Johnson Medical School - Pediatrics'],
  },
  {
    name: 'Narelie Domingo Calley, APRN',
    specialty: 'Family Medicine',
    locations: ['Main Medical & Dental Center — 915 N King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: [
      'University of Phoenix',
      'University of Hawaii at Manoa',
    ],
  },
  {
    name: 'Richard Ricardo, MD',
    specialty: 'Pediatrics',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'American Board of Pediatrics',
    education: [
      'University of California, Los Angeles',
      'University of Hawaii John A. Burns School of Medicine',
    ],
    residencyTraining: ['University of Hawaii - Pediatrics'],
  },
  {
    name: 'Ritabelle Fernandes, MD, MPH',
    specialty: 'Internal Medicine',
    locations: ['Main Medical & Dental Center — 915 N King St', 'Ka\'a\'ahi Clinic — 546 Ka\'a\'ahi St'],
    credentials: 'American Board of Internal Medicine - Internal Medicine, Geriatric Medicine, Hospice & Palliative Medicine',
    education: [
      'D. G. Ruparel College',
      'Seth G. S. Medical College',
      'Master of Public Health - University of Hawaii',
    ],
    residencyTraining: [
      'St. Mary\'s Hospital - Internal Medicine',
      'University of Hawaii - Geriatrics',
    ],
    professionalInterests: 'Dementia, Geriatric Medicine',
    personalInterests: 'Music and Arts',
  },
  {
    name: 'Stephanie Koh, APRN, MPH',
    specialty: 'Family Medicine',
    locations: ['Behavioral Health & Medical — 952 N King St'],
    credentials: 'Family Nurse Practitioner - Board Certified',
    education: [
      'Boston College',
      'Emory University',
      'Master of Public Health - Emory University',
    ],
    professionalInterests: 'Culturally sensitive chronic disease management, diabetes prevention and management',
    personalInterests: 'Hiking, camping, crocheting, chasing my 2 rambunctious toddlers around',
  },
  {
    name: 'Steven Nishi, MD',
    specialty: 'Obstetrics & Gynecology',
    locations: ['Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'American Board of Obstetrics & Gynecology',
    education: [
      'University of Hawaii at Manoa',
      'University of Hawaii John A. Burns School of Medicine',
    ],
    residencyTraining: ['University of Hawaii - Obstetrics & Gynecology'],
  },
  {
    name: 'Susan Sims, CNM',
    specialty: 'Women\'s Health',
    locations: ['Comprehensive Primary Health Care — 710 N King St', 'Downtown Family Medical & Dental — 89 S King St'],
    credentials: 'Certified Nurse-Midwife',
    education: [
      'University of Missouri',
      'Frontier School of Midwifery and Family Nursing',
    ],
  },
  {
    name: 'Yitong Ma, MD',
    specialty: 'Pediatrics',
    locations: ['Downtown Family Medical & Dental — 89 S King St', 'Comprehensive Primary Health Care — 710 N King St'],
    credentials: 'American Board of Pediatrics',
    education: [
      'Creighton University',
      'Creighton University School of Medicine',
    ],
    residencyTraining: ['Texas Tech University Health Sciences Center - Pediatrics'],
    professionalInterests: 'General Pediatrics',
    personalInterests: 'Cats and kittens',
  },
]
