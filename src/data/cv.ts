import type {CvSection, CvSectionId} from '../types/cv'

export const cvSections: CvSection[] = [
  {
    id: 'about',
    title: 'About Me',
    summary: 'A short introduction to who I am and how I work.',
  },
  {
    id: 'experience',
    title: 'Experience',
    summary: 'Roles and teams that shaped my career so far.',
  },
  {
    id: 'education',
    title: 'Education',
    summary: 'Studies and formal learning behind the work.',
  },
  {
    id: 'skills',
    title: 'Skills',
    summary: 'Tools and practices I use day to day.',
  },
  {
    id: 'projects',
    title: 'Projects',
    summary: 'Selected work worth walking through in more detail.',
  },
  {
    id: 'contact',
    title: 'Contact',
    summary: 'How to reach me.',
  },
]

export function getCvSection(id: CvSectionId): CvSection {
  const section = cvSections.find((entry) => entry.id === id)
  if (!section) {
    throw new Error(`Missing CV section "${id}"`)
  }
  return section
}
