

import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { IcosahedronGeometry } from 'three'
import { IcosahedronBufferGeometry } from 'three'
import { GradientTexture, MeshDistortMaterial, MeshReflectorMaterial, PresentationControls, Trail, TransformControls, useDepthBuffer } from '@react-three/drei'

import { useSpring, animated, config } from '@react-spring/three'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { easings } from '@react-spring/three'
import { useMemo } from 'react'



function Box(props) {
  const [active, setActive] = useState(0);
  // const { spring } = useSpring({
  //   spring: active,
  //   config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  // });
  
 
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
  // const { rotateZ } = useSpring({
  //   from: {
     
  //     rotateZ: 0,
  //   },
  //   to: {
    
  //     rotateZ: 225,
  //   },
  //   config: {
  //     duration: 2000,
  //     easing: easings.easeInOutQuart,
  //   },
  //   loop: { reverse: true },
  // })

  const { scale , rotated } = useSpring({ scale: props.rolled ? 1.5 : 1 , rotated: props.rolled ? 180 : 0, config: config.wobbly})
  const { y } = useSpring({ y: props.rolled ? 20 : 0 , config: config.wobbly})

  const {springProps} = useSpring({
    loop: { reverse: true },
    from: { y: 0, rotate: 0 },
    to: { y: 100, rotate: 180 },
    config: { duration: 2500 }
  });
  // const { color } = useSpring({ color: active ? "blue" : "red" , config: config.wobbly,})
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
      scale-y={scale}
      scale-z={scale}
      rotate ={rotated}
      y={y}
      // color={color}
      
      style={springProps}
      ref={mesh}
      
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronGeometry args={[2, 3]} roughness={6} transmission={1} thickness={2} />
      <meshStandardMaterial emissive={"white"} wireframe depthBuffer={depthBuffer}  color={hovered ? 'hotpink' : 'orange'} />
      {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
    </animated.mesh>
    
    // </PresentationControls>
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
      
      onClick={(event) => startdice()}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
     
      <icosahedronGeometry args={[1, 0]} roughness={6} transmission={1} thickness={20} />
      <meshPhongMaterial   depthBuffer={depthBuffer}  color={hovered ? 'hotpink' : 'orange'} />
      {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
    </animated.mesh>
    
    // </PresentationControls>
  )
}
function Box4(props) {

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    // the value will be 0 at scene initialization and grow each frame
  })
  
 
  
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
  
  const mesh4 = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const position = useMousePosition();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh4.current.rotation.x += 0.001))
  useFrame((state, delta) => (mesh4.current.rotation.y += 0.002))
  // if (hover) {
  //   boxRef.current.rotation.y += 0.05;
  // }
  useFrame(() => {
    if (hovered) {
      mesh4.current.rotation.y += (position.y * 0.00001);
      mesh4.current.rotation.x += (position.x * 0.00001);
    }
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <PresentationControls
    global={false} // Spin globally or by dragging the model
    cursor={true} // Whether to toggle cursor style on drag
    snap={false} // Snap-back to center (can also be a spring config)
    speed={1} // Speed factor
    zoom={1} // Zoom factor when half the polar-max is reached
    rotation={[0, 0, 0]} // Default rotation
    polar={[0, Math.PI / 2]} // Vertical limits
    azimuth={[-Infinity, Infinity]} // Horizontal limits
    config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
  >
    
    <mesh
      {...props}
      ref={mesh4}
      scale={active ? 1.5 : 1}
      
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronGeometry args={[2, 3]} roughness={6} transmission={1} thickness={2} />
      <meshStandardMaterial emissive={"white"}  depthBuffer={depthBuffer} wireframe color={hovered ? 'hotpink' : 'orange'} />
      {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
    </mesh>
    
    </PresentationControls>
  )
}


function Box2(props) {


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
 
  const img = '/backdice.jpeg'
  const texture = useLoader(THREE.TextureLoader, img)
  
  const mesh2 = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // const { spring } = useSpring({
  //   spring: active,
  //   config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  // });
  
  // const { scale } = useSpring({ scale: props.rolled ? 1.5 : 1  , config: config.wobbly,})
  const {opacity} = useSpring({opacity: props.rolled ? 1 : 0.5 })
  const {y} = useSpring({y: props.rolled ? 20 : 0})
 
  const position = useMousePosition();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh2.current.rotation.x += 0.001))
  useFrame((state, delta) => (mesh2.current.rotation.y += 0.002))
  // if (hover) {
  //   boxRef.current.rotation.y += 0.05;
  // }
  useFrame(() => {
    if (hovered) {
      mesh2.current.rotation.y += (position.y * 0.00001);
      mesh2.current.rotation.x += (position.x * 0.00001);
    }
  });
  // const texture_1 = useLoader(TextureLoader, 'public/homme.jpg');


console.log(opacity);

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <animated.mesh
      {...props}
      ref={mesh2}
      // scale={scale}
      // scale-x={scale}
      // scale-z={scale}
      opacity={opacity}
      y={y}
     
    
      
      // onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronBufferGeometry attach="geometry" args={[2, 3]} roughness={6} transmission={1} thickness={2} />
     
      
      {/* <meshStandardMaterial wireframe color={hovered ? 'hotpink' : 'orange'} /> */}
      <meshLambertMaterial   map={texture} flatShading={true} reflectivity={1} shininess={150} metalness="1" distort={0.3} speed={1}  transparent   mirror={1} blur={[50,20]} >
   </meshLambertMaterial>
      {/* <meshPhongMaterial transparent depthBuffer={depthBuffer} emissive={"green"} metalness="1" color="darkblue" opacity={0.5} /> */}
    </animated.mesh>
  

 
   
  )
}

function Moon(props) {
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

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    // the value will be 0 at scene initialization and grow each frame
  })

  useFrame(({ clock }) => {
    moon.current.position.x = (Math.sin(clock.getElapsedTime())*2)
  })
  
  const moon = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const position = useMousePosition();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (moon.current.position.x += 0.1))
  useFrame((state, delta) => (moon.current.rotation.y += 0.002))
  // if (hover) {
  //   boxRef.current.rotation.y += 0.05;
  // }
  useFrame(() => {
    if (hovered) {
      moon.current.rotation.y += (position.y * 0.00001);
      moon.current.rotation.x += (position.x * 0.00001);
    }
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    
    <mesh
      {...props}
      ref={moon}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronGeometry args={[2, 3]} roughness={6} transmission={1} thickness={2} />
      {/* <meshStandardMaterial wireframe color={hovered ? 'hotpink' : 'orange'} /> */}
      <meshPhongMaterial transparent opacity={0.5} flatShading={true} color={"darkgreen"}   reflectivity={1} shininess={150} metalness="1"  mirror={1}  >
         </meshPhongMaterial>
      {/* <meshPhongMaterial transparent depthBuffer={depthBuffer} emissive={"green"} metalness="1" color="darkblue" opacity={0.5} /> */}
    </mesh>
  

 
   
  )
}

const roundedSquareWave = (t, delta, a, f) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots(props) {
  const dots = useRef()
  const { vec, transform, positions, distances } = useMemo(() => {
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place in a grid
      position.x = (i % 100) - 50
      position.y = Math.floor(i / 100) - 50

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5

      // Add some noise
      position.x += Math.random() * 0.3
      position.y += Math.random() * 0.3
      return position
    })

    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0)
    const distances = positions.map((pos) => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
    })
    return { vec, transform, positions, distances }
  }, [])

  

  useFrame(({ clock  }) => {
    for (let i = 0; i < 10000; ++i) {
      const dist = distances[i]

      // Distance affects the wave phase
      const t = clock.elapsedTime - dist / 25

      // Oscillates between -0.4 and +0.4
      const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 1.3)

      // Apply the Vector3 to a Matrix4
      transform.setPosition(vec)

      // Update Matrix4 for this instance
      dots.current.setMatrixAt(i, transform)
    }
    // const activedots = props.rolled ? true : false;
    dots.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh  ref={dots} args={[null, null, 100000]}>
      <circleBufferGeometry args={[0.05]} />
      <meshBasicMaterial />
    </instancedMesh>
  )
}

function Box3(props) {

  const [active, setActive] = useState(0);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
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

  
  const mesh3 = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)
  const { scale } = useSpring({ scale: active ? 1.5 : 1 , config: config.wobbly,})
 
  const [rolled, setRolled] = useState(false)
  const position = useMousePosition();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh3.current.rotation.x += 0.001))
  useFrame((state, delta) => (mesh3.current.rotation.y += 0.002))
  // if (hover) {
  //   boxRef.current.rotation.y += 0.05;
  // }
  useFrame(() => {
    if (hovered) {
      mesh3.current.rotation.y += (position.y * 0.00001);
      mesh3.current.rotation.x += (position.x * 0.00001);
    }
  });

  function startdice() {

    setActive(!active);
    setRolled(!rolled)

  }
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <Trail
  width={2} // Width of the line
  color={'hotpink'} // Color of the line
  length={1} // Length of the line
  decay={0} // How fast the line fades away
  local={true} // Wether to use the target's world or local positions
  stride={0} // Min distance between previous and current point
  interval={1} // Number of frames to wait before next calculation
  // target={undefined} // Optional target. This object will produce the trail.
  attenuation={(width) => width} // A function to define the width in each point along it.
>
    <mesh
      {...props}
      ref={mesh3}
      scale-x={scale}
      scale-z={scale}
     
      onClick={(event) => startdice() }
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronGeometry args={[1, 0]} roughness={6} transmission={1} thickness={20} />
      <meshPhongMaterial   depthBuffer={depthBuffer}  color={hovered ? 'hotpink' : 'orange'} />
      {/* <meshPhongMaterial wireframe transparent color="red" opacity={0.5} /> */}
    </mesh>
    </Trail>
  )
}

function Image() {
  const img = '/homme.jpg'
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

const CanvasArt = () => {

  const [rolled, setRolled] = useState(false);

  return (<Canvas
    orthographic camera={{ zoom: 50 }} colorManagement={false}>
      {/* <color attach="background" args={['black']} /> */}
    {/* <ambientLight /> */}
    <pointLight position={[10, 10, 10]} />
 <Box position={[-1.2, 0, 0]} rolled={rolled} />
 {/* <pointLight position={[60, 20, 20]} /> */}
 
 <Box2 rolled={rolled} position={[-1.2, 0, 0]}/>
 {/* <Suspense fallback={null}>
  <Image/>
 </Suspense> */}
{/* <Box4 position={[-1.2, 0, 0]}/>  */}
 
  {/* <Box3 position={[4, 0, 0]}/>  */}
  <CoreDice position={[4,0,0]} rolled={rolled} setRolled={setRolled}/>

 <Dots/>
 {/* <Moon position={[-1.2, 0, 0]}/>   */}
    
 {/* <icosahedronBufferGeometry/>
 <mesh
 <IcosahedronBufferGeometry attach="geometry" args={[1, 0]}/> */}
  {/* <mesh>
  <meshPhysicalMaterial color={'blue'} roughness={0} transmission={1} thickness={2} />
      <icosahedronGeometry attach="geometry" args={[2, 0]} />
      </mesh> */}
  </Canvas>
)}

export default CanvasArt;

