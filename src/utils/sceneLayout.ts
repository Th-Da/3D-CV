/**
 * Turns districtMap into world tiles and station footprints.
 *
 * The walkable surface is an 18×18 grid of 1×1 blocks. Cell coordinates use
 * the southwest corner; the platform runs from -9 to +9 on X/Z.
 */
import {cvSections} from '../data/cv'
import {
  GRASS_COLORS,
  PATH_COLORS,
  PATH_RECTS,
  PLOT_COLORS,
  PLOT_RECTS,
  type BlockRect,
  type Vec2,
} from '../components/3d/Environment/districtMap.ts'
import type {CvSectionId} from '../types/cv'

export const PLATFORM_SIZE = 18
export const BLOCK_SIZE = 1
export const BLOCK_HEIGHT = 0.28
export const GROUND_SURFACE_Y = BLOCK_HEIGHT
/** Extra height for colored pads so stations sit on a visible step. */
export const PLOT_RAISE = 0.06

const BLOCK_MIN = -PLATFORM_SIZE / 2

export type DistrictPlot = {
  id: CvSectionId
  position: Vec2
  size: Vec2
  footprint: Vec2
  color: string
}

export type GroundTile = {
  key: string
  x: number
  z: number
  color: string
  kind: 'grass' | 'path' | 'plot'
}

function cellKey(x: number, z: number) {
  return `${x},${z}`
}

function forEachCell(rect: BlockRect, visit: (x: number, z: number) => void) {
  for (let z = 0; z < rect.size[1]; z += 1) {
    for (let x = 0; x < rect.size[0]; x += 1) {
      visit(rect.origin[0] + x, rect.origin[1] + z)
    }
  }
}

function blockCenter(origin: number, size: number) {
  return origin + size / 2
}

function hashTone(x: number, z: number, palette: string[]) {
  const index = Math.abs(x * 13 + z * 7) % palette.length
  return palette[index]
}

function tileAt(
  cellX: number,
  cellZ: number,
  plotByCell: Map<string, CvSectionId>,
  pathCells: Set<string>,
): GroundTile {
  const key = cellKey(cellX, cellZ)
  const plotId = plotByCell.get(key)

  let color = hashTone(cellX, cellZ, GRASS_COLORS)
  let kind: GroundTile['kind'] = 'grass'
  if (plotId) {
    color = PLOT_COLORS[plotId]
    kind = 'plot'
  } else if (pathCells.has(key)) {
    color = hashTone(cellX, cellZ, PATH_COLORS)
    kind = 'path'
  }

  return {
    key,
    x: cellX + BLOCK_SIZE / 2,
    z: cellZ + BLOCK_SIZE / 2,
    color,
    kind,
  }
}

function buildPlots(): DistrictPlot[] {
  return PLOT_RECTS.map((plot) => {
    const footprint: Vec2 = [...plot.size]

    return {
      id: plot.id,
      position: [
        blockCenter(plot.origin[0], plot.size[0]),
        blockCenter(plot.origin[1], plot.size[1]),
      ],
      size: footprint,
      footprint,
      color: PLOT_COLORS[plot.id],
    }
  })
}

function buildTiles(): GroundTile[] {
  const plotByCell = new Map<string, CvSectionId>()
  const pathCells = new Set<string>()

  for (const plot of PLOT_RECTS) {
    forEachCell(plot, (x, z) => {
      plotByCell.set(cellKey(x, z), plot.id)
    })
  }

  for (const path of PATH_RECTS) {
    forEachCell(path, (x, z) => {
      pathCells.add(cellKey(x, z))
    })
  }

  const tiles: GroundTile[] = []
  for (let z = 0; z < PLATFORM_SIZE; z += 1) {
    for (let x = 0; x < PLATFORM_SIZE; x += 1) {
      tiles.push(tileAt(BLOCK_MIN + x, BLOCK_MIN + z, plotByCell, pathCells))
    }
  }

  return tiles
}

export const districtPlots = buildPlots()
export const groundTiles = buildTiles()

export function getDistrictPlot(id: CvSectionId): DistrictPlot {
  const plot = districtPlots.find((entry) => entry.id === id)
  if (!plot) {
    throw new Error(`Missing district plot for "${id}"`)
  }
  return plot
}

const plottedIds = new Set(districtPlots.map((plot) => plot.id))
const missingPlot = cvSections.find((section) => !plottedIds.has(section.id))
if (missingPlot) {
  throw new Error(`Missing district plot for CV section "${missingPlot.id}"`)
}
