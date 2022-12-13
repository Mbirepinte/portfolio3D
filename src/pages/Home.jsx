import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Cylinder, OrbitControls } from '@react-three/drei';
import './App.css'
import { Model } from './components/Model';
import Cylinder3d from './components/Cylinder3d';

function Home() {
  return (
    <div>
      <button onClick={()=>setWire(!wire)}> Test</button>
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
         <Cylinder3d position={[1,2,1]} wireframe={wire}/>
         <Cylinder3d position={[3,1,0]} wireframe={!wire}/>
         </Suspense>
         <OrbitControls />
      </Canvas>
         </div>
    </div>
  )
}

export default Home