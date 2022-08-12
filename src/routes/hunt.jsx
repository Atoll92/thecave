import React, { useRef, useState, useMemo } from "react";

import * as THREE from "three";

import { Canvas } from '@react-three/fiber'
import { useFrame } from "@react-three/fiber";
import {  useSpring } from "@react-spring/three";
import { config } from "@react-spring/three";
import { animated } from "@react-spring/three";
import { useDepthBuffer } from "@react-three/drei";
import { CubeTextureLoader, IcosahedronGeometry } from 'three'
import { IcosahedronBufferGeometry } from 'three'
import Dice from "react-dice-roll";
import { TextureLoader } from "three";
import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";
import Header from "../Header";
import "../hunt.css"

import { Trail } from "@react-three/drei";

function CoreDiceW(props) {
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  
 
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
     // the value will be 0 at scene initialization and grow each frame
  })

 
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

  const { scale } = useSpring({ scale: active ? 1.5 : 1 , config: config.wobbly,})
  const { color } = useSpring({ color: active ? "blue" : "red" , config: config.wobbly,})
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

    
    <animated.mesh
    {...props}
    
    scale-x={scale}
    scale-z={scale}
    color={color}
    
    
    ref={mesh}
    
    onClick={(event) => startdice()}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}>
   
    <icosahedronGeometry args={[2, 0]} roughness={6} transmission={1} thickness={2} />
    <meshPhongMaterial  opacity={0.6} transparent depthBuffer={depthBuffer}  color={hovered ? 'hotpink' : 'orange'} />
    {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
  </animated.mesh>
    

  )
}

function CoreDice(props) {
  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  
 
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
     // the value will be 0 at scene initialization and grow each frame
  })

 
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

  const { scale } = useSpring({ scale: active ? 1.5 : 1 , config: config.wobbly,})
  const { color } = useSpring({ color: active ? "blue" : "red" , config: config.wobbly,})
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

    
    <animated.mesh
    {...props}
    
    scale-x={scale}
    scale-z={scale}
    color={color}
    
    
    ref={mesh}
    
    onClick={(event) => startdice()}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}>
   
    <icosahedronGeometry args={[2, 0]} roughness={6} transmission={1} thickness={2} />
    <meshPhongMaterial wireframe opacity={0.6} transparent depthBuffer={depthBuffer}  color={"white"} />
    {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
  </animated.mesh>
    

  )
}





    function RollPredator () {
   

      var predators = ["Tigre dents de sabre","Ours des cavernes","Loup des cavernes","Hyène","Lion","Mammoth"];
var randomPredator = predators[Math.floor(Math.random()*predators.length)];
      return randomPredator;

     
      
      }


      const BoxMultiple = (props) => {
        const loader = new THREE.CubeTextureLoader(); 
loader.setPath( '/' );

const textureCube = loader.load( [
	'backdice.jpeg', 'mammoth.jpg',
	'mammoth.jpg', 'mammoth.jpg',
	'mammoth.jpg', 'mammoth.jpg'
] );

const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
      }
    
   

const Box = (props) => {
 
  const texture_1 = useMemo(() => new THREE.TextureLoader().load('backdice.jpeg'), []);
  const texture_2 = useMemo(() => new THREE.TextureLoader().load('mammoth.jpg'), []);
  const texture_3 = useMemo(() => new THREE.TextureLoader().load('lion-cave.jpg'), []);
  const texture_4 = useMemo(() => new THREE.TextureLoader().load('tiger.jpeg'), []);
  const texture_5 = useMemo(() => new THREE.TextureLoader().load('backdice.jpeg'), []);
  const texture_6 = useMemo(() => new THREE.TextureLoader().load('loup.jpg'), []);
  const [stopped, setStopped] = useState(false)

  const [active, setActive] = useState(false);
  const [rolled, setRolled] = useState(false)
  const [predator, setPredator] = useState("")
 

  const mesh = useRef(props);

 

  
  useFrame((state, delta) => {
    // if (mesh.current) {
      mesh.current.rotation.x += delta / 2;
      mesh.current.rotation.y += delta;
    // } else
    if (rolled) {
      mesh.current.rotation.x += delta * 10;
      mesh.current.rotation.y += delta * 2;
      // window.cancelAnimationFrame();;
    }

    if (stopped) {
      // window.cancelAnimationFrame();

      if (predator == "Lion") {
      mesh.current.rotation.x = Math.PI/2;
      mesh.current.rotation.y = 0;
      }
      if (predator == "Mammoth") {
        mesh.current.rotation.x = 3 * Math.PI;
        mesh.current.rotation.y = 0;
      }
      if (predator == "Tigre dents de sabre") {
        mesh.current.rotation.x = Math.PI;
        mesh.current.rotation.y = Math.PI;
      }

      if (predator == "Hyène") {
        mesh.current.rotation.x = 3 * Math.PI/2;
        mesh.current.rotation.y = 3 * Math.PI/2;
      }
      if (predator == "Ours des cavernes") {
        mesh.current.rotation.x = Math.PI;
        mesh.current.rotation.y = 0;
      }
      if (predator == "Loup des cavernes") {
        mesh.current.rotation.x = 3 * Math.PI/2;
        mesh.current.rotation.y = 0;
      }
    }
   
  });


 
  function startdice(props) {
    var rolledpred = RollPredator();
    setActive(!active);
    setRolled(!rolled)
    // RollPredator();
    setPredator(rolledpred)

    if (rolled) {
      // stopdice()
      setStopped(!stopped)
      setRolled(!rolled)
    }

    
   

  }
  
  
  

  

  return (
   
    <Trail
    width={2} // Width of the line
    color={'hotpink'} // Color of the line
    length={1} // Length of the line
    decay={8} // How fast the line fades away
    local={true} // Wether to use the target's world or local positions
    stride={0} // Min distance between previous and current point
    interval={1} // Number of frames to wait before next calculation
    // target={undefined} // Optional target. This object will produce the trail.
    attenuation={(width) => width} // A function to define the width in each point along it.
  >
    <animated.mesh  {...props}
    
    ref={mesh}
    scale={active ? [5, 5, 5] : [3, 3, 3]}
    onClick={(event) => startdice() }>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial transparent opacity={0.9}    reflectivity={1} shininess={150} metalness="1"  mirror={1} map={texture_1} attach="material-0" />
      <meshPhongMaterial transparent opacity={0.9}    reflectivity={1} shininess={150} metalness="1"  mirror={1} map={texture_2} attach="material-1" />
      <meshPhongMaterial  transparent opacity={0.9}    reflectivity={1} shininess={150} metalness="1"  mirror={1} map={texture_3} attach="material-2" />
      <meshPhongMaterial  transparent opacity={0.9}     reflectivity={1} shininess={150} metalness="1"  mirror={1} map={texture_4} attach="material-3" />
      <meshPhongMaterial  transparent opacity={0.9}   reflectivity={1} shininess={150} metalness="1"  mirror={1} map={texture_5} attach="material-4" />
      <meshPhongMaterial   transparent opacity={0.9}     reflectivity={1} shininess={150} metalness="1"  mirror={1}map={texture_6} attach="material-5" />
    </animated.mesh>
    </Trail>
  )
}
const BoxW = (props) => {
 
  // const texture_1 = useMemo(() => new THREE.TextureLoader().load('backdice.jpeg'), []);
  // const texture_2 = useMemo(() => new THREE.TextureLoader().load('mammoth.jpg'), []);
  // const texture_3 = useMemo(() => new THREE.TextureLoader().load('lion-cave.jpg'), []);
  // const texture_4 = useMemo(() => new THREE.TextureLoader().load('tiger.jpeg'), []);
  // const texture_5 = useMemo(() => new THREE.TextureLoader().load('backdice.jpeg'), []);
  // const texture_6 = useMemo(() => new THREE.TextureLoader().load('loup.jpg'), []);
  const [stopped, setStopped] = useState(false)

  const [active, setActive] = useState(false);
  const [rolled, setRolled] = useState(false)
  const [predator, setPredator] = useState("")
 

  const mesh = useRef(props);

  
  useFrame((state, delta) => {
    // if (mesh.current) {
      mesh.current.rotation.x += delta / 2;
      mesh.current.rotation.y += delta;
    // } else
    if (rolled) {
      mesh.current.rotation.x += delta * 10;
      mesh.current.rotation.y += delta * 2;
      // window.cancelAnimationFrame();;
    }

    if (stopped) {
      // window.cancelAnimationFrame();

      if (predator == "Lion") {
      mesh.current.rotation.x = Math.PI/2;
      mesh.current.rotation.y = 0;
      }
      if (predator == "Mammoth") {
        mesh.current.rotation.x = 3 * Math.PI;
        mesh.current.rotation.y = 0;
      }
      if (predator == "Tigre dents de sabre") {
        mesh.current.rotation.x = Math.PI;
        mesh.current.rotation.y = Math.PI;
      }

      if (predator == "Hyène") {
        mesh.current.rotation.x = 3 * Math.PI/2;
        mesh.current.rotation.y = 3 * Math.PI/2;
      }
     
    }
   
  });


  function startdice(props) {
    var rolledpred = RollPredator();
    setActive(!active);
    setRolled(!rolled)
    // RollPredator();
    setPredator(rolledpred)

    if (rolled) {
      // stopdice()
      setStopped(!stopped)
    }

    
   

  }
  

  
  

  

  return (
    <mesh  {...props}
    ref={mesh}
    scale={active ? [5, 5, 5] : [3, 3, 3]}
    onClick={(event) => startdice() }
    >
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshStandardMaterial wireframe attach="material" />
      <meshStandardMaterial wireframe attach="material" />
      <meshStandardMaterial wireframe attach="material" />
      <meshStandardMaterial wireframe attach="material" />
      <meshStandardMaterial wireframe attach="material" />


      <meshStandardMaterial wireframe attach="material" />

     
     
    </mesh>
  )
}


const Hunt = () => {

  const springProps = useSpring({
    from: { x:10 },
    to: { x: 100}
  })


  return (
    <div >
    <h1>Hunting Area</h1>
      <div id="huntcontainer">
    <Canvas
   colorManagement={false}  camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 12] }} style={{ background : "transparent" }}>
      
    <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
       
    
      <Box style={{springProps}} position={[-5, 0, 0]} />
  
      <Box style={{springProps}} position={[5, 0, 0]} />
      </Suspense>
      <CoreDice/>
      <CoreDiceW  />
      <BoxMultiple/>
    </Canvas>
    </div>
    </div>
  );
}

export default Hunt;
