import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/fortis_hosp.jpg',
    name: 'Fortis Hospital, Bangalore',
    location: 'Bangalore',
    category: 'Oncology',
    description:
      'Dr Mangesh P Kamath is an eminent consultant Medical oncologist, Hemato-oncologist and Blood and Bone Marrow Transplant Physician that consults in various hospitals in Bengaluru as well as a few hospitals in Hassan.',
    company: {
      name: 'Healius',
      logo: '/images/companies/healius.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/paras_hosp.jpeg',
    name: 'Paras Hospital, Gurgaon',
    location: 'Gurugram',
    category: 'Surgical Oncology',
    description:
      'He has experience working as a Consultant Surgical Oncologist for leading multispecialty hospitals of Bengaluru including BGS Gleneagles Global Hospitals and Sparsh Hospitals. He is also a visiting consultant at multiple hospitals across Bengaluru, Hosur and Kuppam offering Oncology services.',
    company: {
      name: 'Healius',
      logo: '/images/companies/healius.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/Healius_hosp.jpeg',
    name: 'Healius Hematology',
    location: 'Bangalore',
    category: 'Android Development',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
]
