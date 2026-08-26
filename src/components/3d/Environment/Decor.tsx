import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'
import type {Group, MeshStandardMaterial} from 'three'
import {PLOT_COLORS} from './districtMap'
import {BlockMesh} from '../CVStation/BlockMesh'
import {GROUND_SURFACE_Y} from '../../../utils/sceneLayout'

type PropPose = {
    position: [number, number]
    rotation?: number
    variant?: 0 | 1
}

const TREE_POSES: PropPose[] = [
    {position: [-7.5, -4.5], variant: 0},
    {position: [0.5, -6.5], variant: 1},
    {position: [7.5, -6.5], variant: 0},
    {position: [-7.5, 3.5], variant: 1},
    {position: [-6.5, 7.5], variant: 0},
    {position: [-0.5, 6.5], variant: 1},
    {position: [7.5, 6.5], variant: 0},
    {position: [6.5, 4.5], variant: 1},
]

const LAMP_POSES: PropPose[] = [
    {position: [4.5, -1.5]},
    {position: [-5.5, 2.5]},
    {position: [1.5, 3.5]},
]

const BENCH_POSES: PropPose[] = [
    {position: [-5.5, -2.5], rotation: Math.PI / 2},
    {position: [5.5, 3.5], rotation: 0},
]

const WAYFINDER_POSITION: [number, number] = [-0.5, -2.5]

const WOOD = '#8b6914'
const WOOD_DARK = '#6b4f24'
const TRUNK = '#6b4a2e'
const LEAF_A = '#3f8f2e'
const LEAF_B = '#2f7a24'
const METAL = '#4a5160'
const LAMP_GLOW = '#ffe9a8'
const SIGN_BOARD = '#d7c4a0'

function Tree({
                  position,
                  variant = 0,
              }: {
    position: [number, number]
    variant?: 0 | 1
}) {
    const canopyRef = useRef<Group>(null)
    const phase = (position[0] + position[1]) * 0.35
    const leaf = variant === 0 ? LEAF_A : LEAF_B
    // Trunk top is at 1.1; canopy group origin = leaf bottom so green sits on the trunk.
    const canopyY = 1.1
    const scale = variant === 0 ? 1 : 0.85

    useFrame(({clock}) => {
        const canopy = canopyRef.current
        if (!canopy) return
        const t = clock.elapsedTime
        canopy.rotation.z = Math.sin(t * 0.7 + phase) * 0.04
        canopy.rotation.x = Math.cos(t * 0.55 + phase) * 0.025
    })

    return (
        <group
            position={[position[0], GROUND_SURFACE_Y, position[1]]}
            scale={scale}
        >
            <BlockMesh position={[0, 0.55, 0]} size={[0.28, 1.1, 0.28]} color={TRUNK}/>
            <group ref={canopyRef} position={[0, canopyY, 0]}>
                <BlockMesh position={[0, 0.55, 0]} size={[1.15, 1.1, 1.15]} color={leaf}/>
                <BlockMesh
                    position={[0, 1.25, 0]}
                    size={[0.75, 0.7, 0.75]}
                    color={variant === 0 ? LEAF_B : LEAF_A}
                />
            </group>
        </group>
    )
}

function Lamp({position}: { position: [number, number] }) {
    const glowRef = useRef<MeshStandardMaterial>(null)
    const phase = position[0] * 0.4 + position[1] * 0.2

    useFrame(({clock}) => {
        const mat = glowRef.current
        if (!mat) return
        mat.emissiveIntensity =
            0.35 + Math.sin(clock.elapsedTime * 1.4 + phase) * 0.12
    })

    return (
        <group position={[position[0], GROUND_SURFACE_Y, position[1]]}>
            <BlockMesh position={[0, 0.08, 0]} size={[0.35, 0.12, 0.35]} color={METAL}/>
            <BlockMesh position={[0, 0.7, 0]} size={[0.12, 1.2, 0.12]} color={METAL}/>
            <BlockMesh position={[0, 1.35, 0]} size={[0.45, 0.1, 0.45]} color={METAL}/>
            <mesh position={[0, 1.18, 0]} castShadow>
                <boxGeometry args={[0.28, 0.28, 0.28]}/>
                <meshStandardMaterial
                    ref={glowRef}
                    color={LAMP_GLOW}
                    emissive={LAMP_GLOW}
                    emissiveIntensity={0.35}
                    roughness={0.55}
                />
            </mesh>
        </group>
    )
}

function Bench({
                   position,
                   rotation = 0,
               }: {
    position: [number, number]
    rotation?: number
}) {
    return (
        <group
            position={[position[0], GROUND_SURFACE_Y, position[1]]}
            rotation={[0, rotation, 0]}
        >
            <BlockMesh position={[0, 0.28, 0]} size={[1.1, 0.12, 0.4]} color={WOOD}/>
            <BlockMesh position={[0, 0.55, -0.14]} size={[1.1, 0.4, 0.1]} color={WOOD_DARK}/>
            <BlockMesh position={[-0.42, 0.14, 0.12]} size={[0.1, 0.28, 0.1]} color={WOOD_DARK}/>
            <BlockMesh position={[0.42, 0.14, 0.12]} size={[0.1, 0.28, 0.1]} color={WOOD_DARK}/>
            <BlockMesh position={[-0.42, 0.14, -0.12]} size={[0.1, 0.28, 0.1]} color={WOOD_DARK}/>
            <BlockMesh position={[0.42, 0.14, -0.12]} size={[0.1, 0.28, 0.1]} color={WOOD_DARK}/>
        </group>
    )
}

/**
 * Central wayfinder: colored arms point toward district clusters.
 */
function Wayfinder({position}: { position: [number, number] }) {
    return (
        <group position={[position[0], GROUND_SURFACE_Y, position[1]]}>
            <BlockMesh position={[0, 0.7, 0]} size={[0.18, 1.4, 0.18]} color={WOOD_DARK}/>
            <BlockMesh position={[0, 0.08, 0]} size={[0.4, 0.12, 0.4]} color={METAL}/>

            {/* −Z back: experience / education */}
            <BlockMesh position={[0, 1.35, -0.45]} size={[0.35, 0.18, 0.7]} color={SIGN_BOARD}/>
            <BlockMesh
                position={[-0.12, 1.35, -0.72]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.experience}
            />
            <BlockMesh
                position={[0.12, 1.35, -0.72]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.education}
            />

            {/* +Z front: projects / contact */}
            <BlockMesh position={[0, 1.15, 0.45]} size={[0.35, 0.18, 0.7]} color={SIGN_BOARD}/>
            <BlockMesh
                position={[-0.12, 1.15, 0.72]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.projects}
            />
            <BlockMesh
                position={[0.12, 1.15, 0.72]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.contact}
            />

            {/* −X west: skills */}
            <BlockMesh position={[-0.45, 1.25, 0]} size={[0.7, 0.18, 0.35]} color={SIGN_BOARD}/>
            <BlockMesh
                position={[-0.72, 1.25, 0]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.skills}
            />

            {/* +X east: about */}
            <BlockMesh position={[0.45, 1.05, 0]} size={[0.7, 0.18, 0.35]} color={SIGN_BOARD}/>
            <BlockMesh
                position={[0.72, 1.05, 0]}
                size={[0.14, 0.14, 0.14]}
                color={PLOT_COLORS.about}
            />
        </group>
    )
}

export function Decor() {
    return (
        <group>
            {TREE_POSES.map((pose) => (
                <Tree
                    key={`tree-${pose.position[0]}-${pose.position[1]}`}
                    position={pose.position}
                    variant={pose.variant}
                />
            ))}
            {LAMP_POSES.map((pose) => (
                <Lamp
                    key={`lamp-${pose.position[0]}-${pose.position[1]}`}
                    position={pose.position}
                />
            ))}
            {BENCH_POSES.map((pose) => (
                <Bench
                    key={`bench-${pose.position[0]}-${pose.position[1]}`}
                    position={pose.position}
                    rotation={pose.rotation}
                />
            ))}
            <Wayfinder position={WAYFINDER_POSITION}/>
        </group>
    )
}
