import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cylinder, OrbitControls } from '@react-three/drei';
import './App.css'
import { Model } from './components/Model';
import Cylinder3d from './components/Cylinder3d';
import Stack from './pages/Stack';


function App() {
  const [count, setCount] = useState(0)
   const[wire, setWire] = useState(false)
   const[stack, setStack] = useState(false)

  return (
   <div>
      <div>
      <button onClick={()=>setWire(!wire)}> Test cylinder</button>
      <button onClick={()=>setStack(!stack)}> Test stack</button>
      </div>
      {stack && <div className="avatar">
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
         </div>}
   {!stack && <Stack/>}

    </div>
  )
} 

export default App
