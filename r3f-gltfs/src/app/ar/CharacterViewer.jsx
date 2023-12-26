import React, { Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Character = ({ scene }) => {
  return <primitive object={scene} />;
};

const CharacterViewer = ({ characterPath }) => {
  const { scene } = useLoader(GLTFLoader, characterPath);

  return (
    <div>
      <Canvas camera={{ position: [20, 5, -8] }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <group rotation-y={Math.PI / 2}>
          <Character scene={scene} />
        </group>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  );
};

export default CharacterViewer;
