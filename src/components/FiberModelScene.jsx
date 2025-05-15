'use client'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment, useGLTF } from "@react-three/drei";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

const FiberModelScene = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }} style={{ backgroundColor: "#0a0a0a" }}>
      {/* 🌌 Deep space starfield */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

      {/* 💡 Atmospheric lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#00ffff" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        intensity={1.2}
        penumbra={0.8}
        color="#ff00ff"
      />

      <Environment preset="night" />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls enablePan={false} />

      <fog attach="fog" args={["#0a0a0a", 5, 15]} /> 
    </Canvas>
  );
};

export default FiberModelScene;
