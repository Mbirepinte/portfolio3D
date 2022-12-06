import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css'
import { Model } from './Model';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <button> Test</button>
      <div className="avatar">
         <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
            }}
            >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <Model position={[0.025, -0.9, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
         </div>
    </div>
  )
} 

export default App
