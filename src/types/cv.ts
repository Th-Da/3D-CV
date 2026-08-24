export const CV_SECTION_IDS = [
  'about',
  'experience',
  'education',
  'skills',
  'projects',
  'contact',
] as const

export type CvSectionId = (typeof CV_SECTION_IDS)[number]

export type CvSection = {
  id: CvSectionId
  title: string
  summary: string
}
