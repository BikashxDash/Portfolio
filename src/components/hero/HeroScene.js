"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Panel from "./Panel";

const PANELS = [
  {
    label: "Taskline",
    scattered: { pos: [-2.4, 1.1, -1.2], rot: [0.3, 0.5, 0.1] },
    assembled: { pos: [0, 0, 0.18], rot: [0, 0, 0] },
  },
  {
    label: "Habitual",
    scattered: { pos: [2.2, -0.8, -0.4], rot: [-0.2, -0.4, 0.15] },
    assembled: { pos: [0, 0, 0.06], rot: [0, 0, 0] },
  },
  {
    label: "Ledger",
    scattered: { pos: [-1.6, -1.3, 1.1], rot: [0.15, 0.6, -0.1] },
    assembled: { pos: [0, 0, -0.06], rot: [0, 0, 0] },
  },
  {
    label: "College Management System",
    scattered: { pos: [1.9, 1.4, 0.6], rot: [-0.3, -0.5, -0.2] },
    assembled: { pos: [0, 0, -0.18], rot: [0, 0, 0] },
  },
];

function RigGroup({ progressRef, isMobile, reducedMotion }) {
  const groupRef = useRef(null);
  const { pointer } = useThree();
  const currentTilt = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      groupRef.current.rotation.set(0, 0, 0);
      return;
    }

    if (isMobile) {
      groupRef.current.rotation.y += 0.0015;
      return;
    }

    const targetX = THREE.MathUtils.clamp(-pointer.y * 0.1, -0.1, 0.1);
    const targetY = THREE.MathUtils.clamp(pointer.x * 0.1, -0.1, 0.1);
    currentTilt.current.x = THREE.MathUtils.lerp(currentTilt.current.x, targetX, 0.05);
    currentTilt.current.y = THREE.MathUtils.lerp(currentTilt.current.y, targetY, 0.05);
    groupRef.current.rotation.x = currentTilt.current.x;
    groupRef.current.rotation.y = currentTilt.current.y;
  });

  return (
    <group ref={groupRef}>
      {PANELS.map((p) => (
        <Panel key={p.label} data={p} progressRef={progressRef} staticAssembled={isMobile || reducedMotion} />
      ))}
    </group>
  );
}

export default function HeroScene({ progressRef, isMobile, reducedMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={isMobile ? 1 : [1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#F5F5F7" />
      <pointLight position={[-3, -2, 2]} intensity={0.4} color="#2997FF" />
      <RigGroup progressRef={progressRef} isMobile={isMobile} reducedMotion={reducedMotion} />
    </Canvas>
  );
}