/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 student3.glb --transform 
Files: student3.glb [7.3MB] > C:\Users\jeet2\OneDrive\Desktop\Hack4Bangla\Mentrix\Metaverse\public\models\student3-transformed.glb [737.46KB] (90%)
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Student3(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/student3-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    // Check and play the first animation (or "sitting" if it's named)
    const animationName = names.find(name => name.toLowerCase().includes("sit")) || names[0]
    if (actions && animationName) {
      actions[animationName].reset().fadeIn(0.5).play()
    }
  }, [actions, names])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <skinnedMesh name="Boy01_Body_Geo" geometry={nodes.Boy01_Body_Geo.geometry} material={materials.Boy01_Body_MAT1} skeleton={nodes.Boy01_Body_Geo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh name="Boy01_Brows_Geo" geometry={nodes.Boy01_Brows_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Brows_Geo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh name="Boy01_Eyes_Geo" geometry={nodes.Boy01_Eyes_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Eyes_Geo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh name="h_Geo" geometry={nodes.h_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.h_Geo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/student3-transformed.glb')
