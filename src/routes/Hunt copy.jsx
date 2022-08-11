// import { Canvas } from '@react-three/fiber';
// import React from 'react';
// import D8 from '../D8';
// import Header from '../Header';

// const Hunt = () => {
//     return (
//         <div>
//             <Header/>
//             <h1>Welcome to the hunt</h1>
//             <D8/>
//             {/* <Canvas>

//             </Canvas> */}
//         </div>
//     );
// };

import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import { useState } from 'react'
import { useRef } from 'react'
import { useDepthBuffer } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import React from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Octahedron } from '@react-three/drei'
import { Physics, usePlane, useConvexPolyhedron } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'
import '../hunt.css'
import Header from '../Header'
import { OctahedronGeometry } from 'three'

const Plane = ({ color, ...props }) => {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}

function CoreDice(props) {
   
    const [active, setActive] = useState(0);
    const octahedronGeometry = new THREE.OctahedronGeometry
    const { spring } = useSpring({
      spring: active,
      config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
    });
    const [ref, api] = useConvexPolyhedron(() => {
        return {
          args: octahedronGeometry,
          mass: 1,
          ...props
        }
      })
   
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime()
       // the value will be 0 at scene initialization and grow each frame
    })
  
    // useFrame(({ clock }) => {
    //   mesh.current.position.y = Math.sin(clock.getElapsedTime())
    // })
    
    
    // This reference will give us direct access to the mesh
    const useMousePosition = () => {
      const [position, setPosition] = React.useState({ x: 0, y: 0 });
    
      React.useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);
        console.log("position mouse recorded")
       
    
        return () => {
          window.removeEventListener("mousemove", setFromEvent);
          console.log(position)
        };
      }, []);
    
      return position;
    };
    
  
    const depthBuffer = useDepthBuffer({
      size: 156, // Size of the FBO, 256 by default
      frames: Infinity, // How many frames it renders, Infinity by default
    })
    
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    const [rolled, setRolled] = useState(false)
    const { scale } = useSpring({ scale: active ? 1.5 : 1 })
    const { color } = useSpring({ color: active ? "blue" : "red" })
    const position = useMousePosition();
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.001))
    useFrame((state, delta) => (mesh.current.rotation.y += 0.002))
    // if (hover) {
    //   boxRef.current.rotation.y += 0.05;
    // }
    useFrame(() => {
      if (hovered) {
        mesh.current.rotation.y += (position.y * 0.00001);
        mesh.current.rotation.x += (position.x * 0.00001);
      }
    });
  
    function startdice() {
  
      setActive(!active);
      props.setRolled(!props.rolled)
      
  
    }
    // Return view, these are regular three.js elements expressed in JSX
    return (
    //   <PresentationControls
    //   global={false} // Spin globally or by dragging the model
    //   cursor={true} // Whether to toggle cursor style on drag
    //   snap={false} // Snap-back to center (can also be a spring config)
    //   speed={1} // Speed factor
    //   zoom={1} // Zoom factor when half the polar-max is reached
    //   rotation={[0, 0, 0]} // Default rotation
    //   polar={[0, Math.PI / 2]} // Vertical limits
    //   azimuth={[-Infinity, Infinity]} // Horizontal limits
    //   config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
    // >
      
      <animated.mesh
        {...props}
        
        scale-x={scale}
        scale-z={scale}
        color={color}
        
        
        ref={mesh}
        onClick={() => api.applyImpulse([0, 20, 0], [0, 0, 0])} castShadow receiveShadow
        // onClick={(event) => startdice()}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
       
        <OctahedronGeometry ref={ref}  roughness={6} transmission={1} thickness={20} />
        <meshPhongMaterial   depthBuffer={depthBuffer}  color={hovered ? 'hotpink' : 'orange'} />
        {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
      </animated.mesh>
      
      // </PresentationControls>
    )
  }

const D8 = (props) => {
  const radius = [4]
  const octahedronGeometry = new THREE.OctahedronGeometry(radius)
  const [ref, api] = useConvexPolyhedron(() => {
    return {
      args: octahedronGeometry,
      mass: 1,
      ...props
    }
  })

  return (
    <Octahedron args={radius} ref={ref} onClick={() => api.applyImpulse([0, 20, 0], [0, 0, 0])} castShadow receiveShadow>
      <meshNormalMaterial attach="material" />
    </Octahedron>
  )
}

const Box = (props) => {
    const mesh = useRef();
  
    const [active, setActive] = useState(false);
  
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
  
    const texture = useMemo(() => new THREE.TextureLoader().load(five), []);
    
    return (
      <Box />
    );
  }

const Hunt = () => {

    const [rolled, setRolled] = useState(false);

    return (
        <div>
        {/* <Header/> */}
  <Canvas concurrent shadowMap srgb zoom={20} gl={{ alpha: false }} camera={{ position: [0, -12, 16] }}>
    <hemisphereLight intensity={0.35} />
    <spotLight position={[30, 0, 30]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    <pointLight position={[-30, 0, -30]} intensity={0.5} />
  
    {/* <D8></D8> */}
   
    
    <Physics gravity={[0, 0, -30]}>
      <Plane color={niceColors[17][4]} />
      <Plane color={niceColors[17][1]} position={[-10, 0, 0]} rotation={[0, 1, 0]} />
      <Plane color={niceColors[17][2]} position={[10, 0, 0]} rotation={[0, -1, 0]} />
      <Plane color={niceColors[17][3]} position={[0, 10, 0]} rotation={[1, 0, 0]} />
      <Plane color={niceColors[17][0]} position={[0, -10, 0]} rotation={[-1, 0, 0]} />
      <Box rolled={rolled} setRolled={setRolled}/>

    </Physics>
    </Canvas> 
  
  </div>
  );
};

export default Hunt;
