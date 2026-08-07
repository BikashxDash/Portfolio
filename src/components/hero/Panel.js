"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

export default function Panel({ data, progressRef, staticAssembled }) {
  const meshRef = useRef(null);
  const { scattered, assembled } = data;

  useFrame(() => {
    if (!meshRef.current) return;
    const t = staticAssembled ? 1 : progressRef.current;
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic

    meshRef.current.position.x = THREE.MathUtils.lerp(scattered.pos[0], assembled.pos[0], eased);
    meshRef.current.position.y = THREE.MathUtils.lerp(scattered.pos[1], assembled.pos[1], eased);
    meshRef.current.position.z = THREE.MathUtils.lerp(scattered.pos[2], assembled.pos[2], eased);

    meshRef.current.rotation.x = THREE.MathUtils.lerp(scattered.rot[0], assembled.rot[0], eased);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(scattered.rot[1], assembled.rot[1], eased);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(scattered.rot[2], assembled.rot[2], eased);
  });

  return (
    <group ref={meshRef}>
      <RoundedBox args={[2.6, 1.5, 0.06]} radius={0.08} smoothness={4}>
        <meshPhysicalMaterial
          color="#131316"
          transmission={0.55}
          roughness={0.25}
          thickness={0.4}
          transparent
          opacity={0.85}
          emissive="#2997FF"
          emissiveIntensity={0.04}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.04]}
        fontSize={0.16}
        color="#F5F5F7"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.02}
      >
        {data.label}
      </Text>
    </group>
  );
}