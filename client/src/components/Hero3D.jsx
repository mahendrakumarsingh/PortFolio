import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

// Custom hook component to sync scroll with slight camera movement
function ScrollSync() {
  useFrame((state) => {
    // Get scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    // Target position based on scroll - very subtle
    const targetY = -scrollY * 0.002;
    
    // Smooth interpolation with linear interpolation (lerp)
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      0.05
    );
  });
  return null;
}

function MinimalShape() {
  const meshRef = useRef();

  // Slow, smooth continuous rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float 
      speed={1.5}          // Object floating speed
      rotationIntensity={0.2} // Subtle rotation from floating
      floatIntensity={1.5}    // Subtle floating amplitude
    >
      <mesh ref={meshRef}>
        {/* Icosahedron provides a clean, abstract geometric aesthetic */}
        <icosahedronGeometry args={[2, 1]} />
        {/* 
          A clean wireframe look matching the green/teal accent 
          Using opacity to make it feel light and glass-like without complex shaders
        */}
        <meshStandardMaterial
          color="#10b981" // Primary green accent from your theme
          wireframe={true}
          transparent={true}
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
        
        {/* Adds a slight inner glow core for extra visual depth */}
        <mesh scale={0.8}>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial
            color="#34d399"
            wireframe={false}
            transparent={true}
            opacity={0.1}
          />
        </mesh>
      </mesh>
    </Float>
  );
}

const Hero3D = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Optimize pixel ratio
      >
        <ScrollSync />

        {/* Soft, clean lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#10b981" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#34d399" />

        {/* 
          PresentationControls allows very limit user interaction (slight tilt)
          Returns to center when let go. 
        */}
        <PresentationControls
          global={false} // Only reacts when hovering the object area
          cursor={true}
          snap={true} // Snaps back to center
          speed={1}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-0.2, 0.2]} // Vertical rotation limits
          azimuth={[-0.2, 0.2]} // Horizontal rotation limits
        >
          <MinimalShape />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Hero3D;
