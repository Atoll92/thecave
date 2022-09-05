import React from 'react';
import Header from '../Header';
import Dice from 'react-dice-roll';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react'
import { useMemo } from 'react';
import * as THREE from "three";
import { useState } from 'react';
import { animated } from '@react-spring/three';
import { useSpring } from '@react-spring/three';
import { config } from '@react-spring/three';




const Ritual = (value) => {

    const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      filter:invert(100%)
    }
    &:active {
        filter:invert(100%)
      color: red;
    }
`;


    function DisplayResult (value) {
        // const navigate = useNavigate();
        // const user = auth.currentUser;
        // const UserModelRef = doc(db, "users", (user.uid));
        // var destiny= document.getElementById("name").value;
        var result = document.getElementById("dice_result");
        var destiny =""
  
        if(value === 1) {
          destiny = "Failed"
        } if(value === 2) {
          destiny = "Failed"
        } if(value === 3) {
          destiny = "Failed"
        } if(value === 4) {
          destiny = "Failed"
        } if(value === 5) {
          destiny = "Failed"
        } if(value === 6) {
          destiny = "Success"

        }
        result.innerHTML = destiny
        // show_results()
        // const destiny = destiny ;
        console.log(destiny)

        return destiny;
  
        // function show_results(value) {
        //    var result = document.getElementById("dice_result");
        //    if(value == 1) {
        //     destiny = "Failed"
        //   } if(value == 2) {
        //     destiny = "Failed"
        //   } if(value == 3) {
        //     destiny = "Failed"
        //   } if(value == 4) {
        //     destiny = "Failed"
        //   } if(value == 5) {
        //     destiny = "Failed"
        //   } if(value == 6) {
        //     destiny = "Success"
  
        //   }

        //    result.innerHTML = destiny
        //    console.log("destinée = " + destiny)

    
        //   }
  
        // updateDoc(UserModelRef, {
        //   destiny: destiny
        // });
        // console.log(destiny)
       
        // navigate("/third_step")

    
        
        }

        function TetraBox() {
            const [active, setActive] = useState(false);
            const texture_2 = useMemo(() => new THREE.TextureLoader().load('mammoth.jpg'), []);
            const mesh = useRef()
            useFrame(() => {
              mesh.current.rotation.x = mesh.current.rotation.y += 0.01
            })

            useFrame(() => {
                if (active) {
                  mesh.current.rotation.y += mesh.current.rotation.y  += 0.01;
                  mesh.current.rotation.x += mesh.current.rotation.x  += 0.01;
                }
              });
            // const {rotateZ} = useSpring({
            //     from: {
            //       rotateZ: 0
            //     },
            //     to: {
            //       rotateZ: 360
            //     },
            //   });
            // const [flip, set] = useState(false)
            const props = useSpring({
              to: { opacity: 1 },
              from: { opacity: 0 },
              reset: true,
            //   reverse: flip,
              delay: 200,
              config: config.molasses,
            //   onRest: () => set(!flip),
            })

              const springs = useSpring({ scale: active ? 1.5 : 1, config: config.wobbly });
            return (
              <animated.mesh style={props}  ref={mesh} position={[-8, 0, 0]} scale={springs.scale}
              onClick={() => setActive(!active)}
               >
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                <tetrahedronBufferGeometry attach="geometry" args={[2, 0]} />
                <meshStandardMaterial  transparent opacity={0.6} map={texture_2}  />
              </animated.mesh>
            )
          }


        function IcoBox() {
            const texture_2 = useMemo(() => new THREE.TextureLoader().load('mammoth.jpg'), []);
            const mesh = useRef()
            useFrame(() => {
              mesh.current.rotation.x = mesh.current.rotation.y += 0.01
            })
            return (
              <mesh ref={mesh} position={[8, 0, 0]} >
                {/* <boxGeometry args={[1, 1, 1]} /> */}
               
                <icosahedronBufferGeometry roughness={6} attach="geometry" args={[2, 0]} />
                <meshStandardMaterial wireframe map={texture_2}  />

              </mesh>
            )
          }
          function IcoBoxW() {
            const texture_2 = useMemo(() => new THREE.TextureLoader().load('mammoth.jpg'), []);
            const mesh3 = useRef()
            useFrame(() => {
              mesh3.current.rotation.x = mesh3.current.rotation.y += 0.01
            })
            return (
              <mesh ref={mesh3} position={[8, 0, 0]} >
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                
                <icosahedronBufferGeometry roughness={6} attach="geometry" args={[3, 0]}  />
                <meshStandardMaterial transparent opacity={0.5} map={texture_2}  />

              </mesh>
            )
          }

          function DodeBox() {
            const texture_3 = useMemo(() => new THREE.TextureLoader().load('lion-cave.jpg'), []);
            const mesh2 = useRef()
            
            useFrame(() => {
              mesh2.current.rotation.x = mesh2.current.rotation.y += 0.001
            })
            return (
              <mesh ref={mesh2} position={[0, 0, 0]} >
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                <dodecahedronBufferGeometry attach="geometry" position={[-5, 100, 0]}sssssss args={[2, 2]} />
                <meshStandardMaterial   map={texture_3} attach="material" />
    {/* <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" /> */}
              </mesh>
            )
          }

          function DodeBoxW() {
            const [hovered, setHover] = useState(false)

            const texture_3 = useMemo(() => new THREE.TextureLoader().load('lion-cave.jpg'), []);
            const mesh4 = useRef()
            
            // useFrame(() => {
            //   mesh4.current.rotation.x = mesh4.current.rotation.y += 0.001
            // })

            useFrame(() => {
                if (hovered) {
                    mesh4.current.rotation.x = mesh4.current.rotation.y += 0.1
                }
              });
            
            return (
              <mesh ref={mesh4} position={[0, 0, 0]}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}>
                 
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                <dodecahedronBufferGeometry attach="geometry" position={[-5, 100, 0]}sssssss args={[2, 2]} />
                <meshStandardMaterial   wireframe attach="material" />
    {/* <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" />
    <meshStandardMaterial attach="material" /> */}
              </mesh>
            )
          }


          

    return (
        <div>
            <Header/>
            <div id="ritual">
          <h1>Célebrez l'origine du monde </h1> 
<div id="buttons_flex">
    <Button>Hand ritual</Button>
    <Button>Art ritual</Button>
    <Button>Hunt ritual</Button>
          
          </div>

          <div id="dices_cont">
          <div id="dice_cont">
          <Dice sound="https://doublegeste.com/TheCave/media/mystic.wav" onRoll={(value) =>  DisplayResult (value)} />
        
          </div>
         
    </div>
    <Canvas style={ {backgroundColor:"rgba(0, 0, 0, 0.8)"}} camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 12] }} >
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}></Suspense>
      <IcoBox />
      <IcoBoxW/>
      <DodeBox />
      <DodeBoxW/>
      <TetraBox/>
    </Canvas>
            <p id="dice_result">Hello there</p>
          </div>
            
        </div>


    );
};

export default Ritual;