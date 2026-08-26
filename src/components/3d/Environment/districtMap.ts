  /**
 * Editable city map. origin is the min X/Z cell corner, size is [width, depth]
 * in blocks. Negative Z is the back of the diorama.
 *
 * Plots sit along the rim so the center stays open. Paths that overlap a plot
 * are covered by the plot.
 */
import type {CvSectionId} from '../../../types/cv.ts'

export type Vec2 = [number, number]

export type BlockRect = {
  origin: Vec2
  size: Vec2
}

export type PlotRect = BlockRect & {
  id: CvSectionId
}

export const GRASS_COLORS = ['#5d9c41', '#4f8c36', '#6aad48']
export const PATH_COLORS = ['#8a6a43', '#7b5c38']

export const PLOT_COLORS: Record<CvSectionId, string> = {
  experience: '#3d6fb8',
  education: '#c9a227',
  skills: '#c46a2d',
  about: '#e05c8c',
  projects: '#2f8f7a',
  contact: '#6b4ea3',
}

export const PLOT_RECTS: PlotRect[] = [
  {id: 'experience', origin: [-8, -8], size: [5, 3]},
  {id: 'education', origin: [3, -8], size: [3, 4]},
  {id: 'skills', origin: [-8, -1], size: [3, 3]},
  {id: 'about', origin: [5, -2], size: [3, 4]},
  {id: 'projects', origin: [-5, 5], size: [4, 3]},
  {id: 'contact', origin: [2, 5], size: [3, 3]},
]

export const PATH_RECTS: BlockRect[] = [
  // to experience
  {origin: [-3, -8], size: [2, 8]},
  // in front education
  {origin: [3, -4], size: [3, 1]},
  // to education
  {origin: [2, -4], size: [1, 4]},
  // to project
  {origin: [-5, 0], size: [8, 2]},
  // to skills
  {origin: [-4, 2], size: [2, 3]},
  // to contact
  {origin: [3, 2], size: [1, 3]},
  // to about
  {origin: [3, -1], size: [2, 3]},
]
