import type { AppointmentSite } from './types'
import { main915DentalHours } from '~/utils/locations-content'

/** Main Medical and Dental Center (915) — scheduled dental clinic hours */
export const main915DentalClinicHours = main915DentalHours

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

/** Walk-in emergency dental care at Main Medical and Dental Center */
export const dentalEmergencyWalkInSite = dentalAppointmentSites[0]!

export const dentalEmergencyWalkInBody
  = 'Our clinic welcomes emergency dental walk-in patients Monday-Friday during the morning hours, beginning at 7:45AM. Walk-in services are first come, first served and are subject to availability. We may need to close walk-in hours early if patient capacity has been reached, to ensure each patient receives the care they need. We appreciate your patience and look forward to caring for you during your visit.'

export const dentalProofOfIncome = [
  'Pay Stubs (at least one month)',
  'Determination letter from the Department of Human Services (Medicaid recipient)',
  'Social Security Benefit Letter',
  'Unemployment Insurance Benefit Stub',
  'Bank or Savings Statement',
  'Current Tax Return',
  'Disability Award Letter',
]
