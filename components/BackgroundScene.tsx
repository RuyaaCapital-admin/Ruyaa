"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Particles() {
  // minimal placeholder geometry. We'll later replace with shader-based field.
  const ref = useRef<THREE.Points>(null);
  const points = new Float32Array(
    Array.from({ length: 500 }).flatMap(() => [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
    ])
  );

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color={"white"} transparent opacity={0.4} />
    </points>
  );
}

export default function BackgroundScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        <ambientLight intensity={0.3} />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none" />
    </div>
  );
}
