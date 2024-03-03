// import type { Course } from '@/interfaces/course'
import { Treatment } from '@/interfaces/treatment'

export const data: Array<Treatment> = [
  {
    id: 1,
    photo: '/images/treatments/cardio.jpeg',
    title: 'Cardiology',
    description:
      'Cardiology deals with the diagnosis, treatment, and prevention of heart diseases and disorders. Cardiologists specialize in managing conditions such as coronary artery disease, heart failure, and arrhythmias.',
  },
  {
    id: 2,
    photo: '/images/treatments/oncology.jpeg',
    title: 'Oncology',
    description:
      'Oncology focuses on the prevention, diagnosis, and treatment of cancer. Oncologists employ treatments like chemotherapy, radiation therapy, and surgery to combat cancer and enhance patients well-being',
  },
  {
    id: 3,
    photo: '/images/treatments/neurology.jpeg',
    title: 'Neurosurgery',
    description:
      'Neurosurgery is a medical specialty that focuses on the surgical treatment of conditions affecting the brain, spinal cord, and nervous system. Neurosurgeons are specialized in complex procedures such as brain or spinal surgery',
  },
  {
    id: 4,
    photo: '/images/treatments/nephrology.jpeg',
    title: 'Nephrology',
    description:
      'Nephrology concentrates on the diagnosis and treatment of kidney diseases and disorders. Nephrologists specialize in managing conditions such as chronic kidney disease, kidney stones, and kidney failure.',
  },
]
