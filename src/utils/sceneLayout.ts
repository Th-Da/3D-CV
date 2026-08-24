import {cvSections} from '../data/cv'
import type {CvSectionId} from '../types/cv'

export const PLATFORM_SIZE = 18
export const GROUND_SURFACE_Y = 0.06

const MARGIN = 0.4
const ROAD_WIDTH = 2.1
const SIDEWALK_WIDTH = 0.22
const FOOTPRINT_SCALE = 0.38

type Vec2 = [number, number]

export type DistrictPlot = {
  id: CvSectionId
  position: Vec2
  size: Vec2
  footprint: Vec2
  color: string
}

export type GroundRect = {
  position: Vec2
  size: Vec2
}

const PLOT_COLORS: Record<CvSectionId, string> = {
  experience: '#6d8fd4',
  education: '#d2b36a',
  skills: '#d4896a',
  about: '#7dba6f',
  projects: '#6f9e8c',
  contact: '#8a7bb8',
}

const GRID_IDS: CvSectionId[][] = [
  ['experience', 'education'],
  ['skills', 'about'],
  ['projects', 'contact'],
]

function centerOf(start: number, length: number) {
  return start + length / 2
}

function buildLayout() {
  const innerMin = -PLATFORM_SIZE / 2 + MARGIN
  const innerSize = PLATFORM_SIZE - MARGIN * 2
  const columnWidth = (innerSize - ROAD_WIDTH) / 2
  const rowDepth = (innerSize - ROAD_WIDTH * 2) / 3
  const leftStart = innerMin
  const rightStart = innerMin + columnWidth + ROAD_WIDTH
  const columnStarts = [leftStart, rightStart]
  const rowStarts = [0, 1, 2].map(
    (rowIndex) => innerMin + rowIndex * (rowDepth + ROAD_WIDTH),
  )

  const plots: DistrictPlot[] = GRID_IDS.flatMap((row, rowIndex) =>
    row.map((id, columnIndex) => {
      const width = columnWidth
      const depth = rowDepth
      const xStart = columnStarts[columnIndex]
      const zStart = rowStarts[rowIndex]

      return {
        id,
        position: [centerOf(xStart, width), centerOf(zStart, depth)],
        size: [width, depth],
        footprint: [width * FOOTPRINT_SCALE, depth * FOOTPRINT_SCALE],
        color: PLOT_COLORS[id],
      }
    }),
  )

  const roads: GroundRect[] = [
    {
      position: [0, centerOf(innerMin, innerSize)],
      size: [ROAD_WIDTH, innerSize],
    },
    {
      position: [centerOf(innerMin, innerSize), rowStarts[1] - ROAD_WIDTH / 2],
      size: [innerSize, ROAD_WIDTH],
    },
    {
      position: [centerOf(innerMin, innerSize), rowStarts[2] - ROAD_WIDTH / 2],
      size: [innerSize, ROAD_WIDTH],
    },
  ]

  return {plots, roads, sidewalkWidth: SIDEWALK_WIDTH}
}

export const {plots: districtPlots, roads, sidewalkWidth} = buildLayout()

const plottedIds = new Set(districtPlots.map((plot) => plot.id))
const missingPlot = cvSections.find((section) => !plottedIds.has(section.id))
if (missingPlot) {
  throw new Error(`Missing district plot for CV section "${missingPlot.id}"`)
}
