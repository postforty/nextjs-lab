"use client";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clone, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Character = ({ characterPath, scale }) => {
  const { scene, animations } = useGLTF(characterPath);

  let mixer = null;

  // 애니메이션 재생
  if (animations.length !== 0) {
    mixer = new THREE.AnimationMixer(scene);
    void mixer.clipAction(animations[0]).play();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFrame((state, delta) => {
      mixer.update(delta);
    });
  }

  return (
    <Clone object={scene} scale={scale} /> // 애니메이션 재생 안됨
    // <primitive object={scene} scale={scale} /> // 애니메이션 재생됨
  );
};

const CharacterViewer = ({ characterPath }) => {
  return (
    <div>
      <Canvas key={characterPath} camera={{ position: [20, 0, -8] }}>
        <OrbitControls />
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <group {...characterPath} dispose={null} rotation-y={Math.PI / 2}>
          <Character scale={[15, 15, 15]} characterPath={characterPath} />
        </group>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  );
};

export default CharacterViewer;
