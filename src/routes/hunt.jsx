import React, { useRef, useState, useMemo } from "react";

import * as THREE from "three";

import { Canvas } from '@react-three/fiber'
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { config } from "@react-spring/three";
import { animated } from "@react-spring/three";
import { useDepthBuffer } from "@react-three/drei";
import { CubeTextureLoader, IcosahedronGeometry } from 'three'
import { IcosahedronBufferGeometry } from 'three'
import Dice from "react-dice-roll";
import { TextureLoader } from "three";
import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";

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


  // const ref = useRef(null);
  // const user = auth.currentUser;
    // const UserModelRef = doc(db, "users", (user.uid));

    function RollPredator (value) {
      // const navigate = useNavigate();
      // const user = auth.currentUser;
      // const UserModelRef = doc(db, "users", (user.uid));
      // var destiny= document.getElementById("name").value;
      var predators = ["Tigre dents de sabre","Ours des cavernes","Loup des cavernes","Hyène","Lion","Mammoth"];
var randomPredator = predators[Math.floor(Math.random()*predators.length)];
      let predator = randomPredator;

      // if(value == 1) {
      //   predator = "Tigre dents de sabre"
      // } if(value == 2) {
      //   predator = "Ours des cavernes"
      // } if(value == 3) {
      //   predator = "Loup des cavernes"
      // } if(value == 4) {
      //   predator = "Hyène"
      // } if(value == 5) {
      //   predator = "Lion"
      // } if(value == 6) {
      //   predator = "Mammoth"
      // }
      


      // updateDoc(UserModelRef, {
      //   predator: predator
      // });
      console.log(predator)
     
     
      
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
  // This reference will give us direct access to the mesh
  const texture_1 = useLoader(TextureLoader, 'mammoth.jpg');
  const texture_2 = useMemo(() => new THREE.TextureLoader().load('backdice.jpeg'), []);
  // const texture_2 = useLoader(TextureLoader, 'backdice.jpeg');
  const texture_6 = useLoader(TextureLoader, 'lion-cave.jpg');
  const texture_4 = useLoader(TextureLoader, 'tiger.jpeg');
  const texture_5 = useLoader(TextureLoader, 'ours.jpg');
  const texture_3 = useLoader(TextureLoader, 'loup.jpg');
  const mesh = useRef();

  // Set up state for the hovered and active state 
  const [active, setActive] = useState(false);
  const [rolled, setRolled] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y += 0.02;

    
  });

  useFrame(() => {
    
    if (rolled) {
      mesh.current.rotation.y += 0.1;
      mesh.current.rotation.x +=  0.1;
      console.log("isrolling")
      
     
    }
  });


//   const loader = new THREE.TextureLoader();
//   const cubeMaterials = [
//     new THREE.MeshBasicMaterial({ map: loader.load(img) }), //right side
//     new THREE.MeshBasicMaterial({ map: loader.load(img1)}), //left side
//     new THREE.MeshBasicMaterial({ map: loader.load(img2)}), //top side
//     new THREE.MeshBasicMaterial({ map: loader.load(img3)}), //bottom side
//     new THREE.MeshBasicMaterial({ map: loader.load(img4)}), //front side
//     new THREE.MeshBasicMaterial({ map: loader.load(img)}), //back side
// ]



// const loader = new THREE.CubeTextureLoader(); 
// loader.setPath( '/' );

// const textureCube = loader.load( [
// 	'backdice.jpeg', 'mammoth.jpg',
// 	'mammoth.jpg', 'mammoth.jpg',
// 	'mammoth.jpg', 'mammoth.jpg'
// ] );

// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
  
  
 
  
  function startdice() {

    setActive(!active);
    setRolled(!rolled)
    RollPredator();
   

  }
  
  // return (
  //   <mesh
  //   {...props}
  //   ref={mesh}
  //   scale={active ? [5, 5, 5] : [3, 3, 3]}
  //   onClick={(event) => startdice() }
  //   // envMap={material}
  //     >
  //     <boxBufferGeometry args={[1, 1, 1]} />
  //     <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
  //       <primitive attach="map" object={texture1} />
  //     </meshBasicMaterial>
  //   </mesh>
  // );


  

  return (
    <mesh  {...props}
    ref={mesh}
    scale={active ? [5, 5, 5] : [3, 3, 3]}
    onClick={(event) => startdice() }>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  )
}

const Hunt = () => {
  return (
    <div>
    <Canvas
    orthographic camera={{ zoom: 50 }} colorManagement={false} style={{ background : "black" }}>
      
    <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
       
    
      <Box position={[-5, 0, 0]} />
      <Box position={[5, 0, 0]} />
      </Suspense>
      <CoreDice/>
      <BoxMultiple/>
    </Canvas>
    {/* <Dice sound="https://doublegeste.com/TheCave/media/mystic.wav" onRoll={(value) =>  RollPredator (value)} /> */}
    </div>
  );
}

export default Hunt;
