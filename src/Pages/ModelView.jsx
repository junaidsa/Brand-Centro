import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = () => {
  const obj = useLoader(OBJLoader, "/OBJ.obj"); // Ensure the path is correct

  return (
    <Center>
      <primitive object={obj} scale={0.06} /> 
    </Center>
  );
};

const ModelView = () => (
  <Canvas
    camera={{ position: [0, 2, 5], fov: 50 }} // Adjust camera position and field of view
    style={ {height: "100vh"}} // Full-screen canvas
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <pointLight position={[10, 10, 10]} />
    <Model />
    <OrbitControls />
  </Canvas>
);

export default ModelView;
