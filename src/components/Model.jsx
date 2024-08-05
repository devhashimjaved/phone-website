import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Modelview from './Modelview'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models } from '../constants'


const Model = () => {

  const [size,setSize]=useState('small');
  const [model,setModel]=useState({
    title:'I phone 15 pro in natural Titanium Color',
    color:['#8F8A81','#FFE77B9','#6F6C64'],
    img:yellowImg,
});
// Camera Control for the Model View
const cameraControlSmall=useRef();
const cameraControlLarge=useRef();

//Model Control
const small = useRef(new THREE.Group());
const large = useRef(new THREE.Group());

//Rotation

const [smallRotation,setSmallRotation]=useState(0)
const [largeRotation,setLargeRotation]=useState(0)
  
  useGSAP(()=>{
    gsap.to('#heading',{opacity:1,y:0})
  },[])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 id='heading' className='section-heading'>Take a Closer Look</h1>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
            <Modelview
            index={1}
            groupRef={small}
            gsapType='view1'
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
            />
            <Modelview
            index={2}
            groupRef={large}
            gsapType='view2'
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
            />
            <Canvas
            className='w-full h-full'
            style={{
              position:'fixed',
              top:0,
              bottom:0,
              left:0,
              right:0,
              overflow:'hidden'
            }}
            eventSource={document.getElementById('root')}
            >
              <View.Port/>
            </Canvas>
          </div>
          <div className='mx-auto'>
            <p className='text-sm text-center font-light mb-5'>{model.title}</p>
            <div className='flex-center'>
              <ul className='color-container'>
                  {models.map((item,i)=>(
                    <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer' style={{backgroundColor:item.color[0]}}
                    onClick={()=>setModel(item)}
                    >

                    </li>
                  ))}
              </ul>

            </div>

          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Model
