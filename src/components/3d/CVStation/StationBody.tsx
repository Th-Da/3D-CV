import type {CvSectionId} from '../../../types/cv'
import {AboutHome} from './bodies/AboutHome'
import {ContactPost} from './bodies/ContactPost'
import {EducationSchool} from './bodies/EducationSchool'
import {ExperienceOffice} from './bodies/ExperienceOffice'
import {ProjectsStudio} from './bodies/ProjectsStudio'
import {SkillsWorkshop} from './bodies/SkillsWorkshop'

type StationBodyProps = {
  id: CvSectionId
  accent: string
}

/**
 * Low-poly building massing keyed by CV section.
 * Keeps one station API; only silhouettes change.
 */
export function StationBody({id, accent}: StationBodyProps) {
  switch (id) {
    case 'about':
      return <AboutHome accent={accent} />
    case 'experience':
      return <ExperienceOffice accent={accent} />
    case 'education':
      return <EducationSchool accent={accent} />
    case 'skills':
      return <SkillsWorkshop accent={accent} />
    case 'projects':
      return <ProjectsStudio accent={accent} />
    case 'contact':
      return <ContactPost />
  }
}
