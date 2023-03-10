"use client";

import {
  Environment,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { Model } from "./BerthaModel";
import { Canvas } from "@react-three/fiber";
import { round } from "lodash";
import { useState } from "react";

const Scene = () => {
  const [dpr, setDpr] = useState(1);
  const [loading, setLoading] = useState(true);
  return (
    <Canvas shadows dpr={dpr}>
      <PerformanceMonitor
        onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 8, 0]}
        intensity={1.5}
        shadow-mapSize={1024}
      ></directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <SoftShadows focus={0} samples={50} size={25} />
      <PerspectiveCamera
        makeDefault
        position={[
          8 * (window.innerWidth / window.innerHeight),
          4 * (window.innerWidth / window.innerHeight),
          4 * (window.innerWidth / window.innerHeight),
        ]}
        fov={25}
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableDamping
        enablePan={false}
        enableZoom={false}
        minPolarAngle={1}
        maxPolarAngle={1}
      />
      <mesh
        receiveShadow
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[5, 5]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
      <Environment files={"hdri.hdr"} path={"/"} />
      <Model />
    </Canvas>
  );
};

export default Scene;
