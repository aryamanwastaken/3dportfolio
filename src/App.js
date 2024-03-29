import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import "./style.css";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Room() {
  return (
    <>
      <OrbitControls target = {[0, 0, 0]} maxPolarAngle={1.45 }/>

      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Room />
      </Canvas>
    </Suspense>
  );
}

export default App;
