"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Character = ({ characterPath, scale, position }) => {
  let mixer = null;
  const { scene, animations } = useLoader(GLTFLoader, characterPath);

  if (animations.length !== 0) {
    mixer = new THREE.AnimationMixer(scene);
    void mixer.clipAction(animations[0]).play();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFrame((state, delta) => {
      mixer.update(delta);
    });
  }

  return <primitive object={scene} scale={scale} position={position} />;
};

const CharacterViewer = ({ characterPath, scale, position }) => {
  return (
    <div>
      <Canvas camera={{ position: [20, 5, -8] }}>
        {/* <OrbitControls /> */}
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <group rotation-y={Math.PI / 2}>
          <Character
            scale={scale}
            characterPath={characterPath}
            position={position}
          />
        </group>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  );
};

export default CharacterViewer;
