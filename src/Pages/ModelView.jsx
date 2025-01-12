import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/MiConv.com__BUILDING MODEL.glb"); // Replace with the actual path
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const hoveredMesh = useRef(null);

  // Event listener to update mouse position
  const onMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useFrame(({ camera }) => {
    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObjects(gltf.scene.children, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;

      if (intersectedObject.name === "floor 005_$AssimpFbx$_Translation") {
        if (hoveredMesh.current !== intersectedObject) {
          if (hoveredMesh.current) {
            hoveredMesh.current.material.emissive = new THREE.Color(0x000000); // Reset previous
          }
          hoveredMesh.current = intersectedObject;
          hoveredMesh.current.material.emissive = new THREE.Color(0xffcc00); // Highlight current
        }
      } else if (hoveredMesh.current) {
        // Reset when the hover moves away from the target mesh
        hoveredMesh.current.material.emissive = new THREE.Color(0x000000);
        hoveredMesh.current = null;
      }
    } else if (hoveredMesh.current) {
      // Reset when no object is hovered
      hoveredMesh.current.material.emissive = new THREE.Color(0x000000);
      hoveredMesh.current = null;
    }
  });

  return <primitive object={gltf.scene} scale={0.06} position={[0, 0, 0]} />;
};

const ModelView = () => (
  <Canvas
    camera={{ position: [0, 1.5, 10], fov: 50 }}
    style={{ height: "100vh" }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <pointLight position={[10, 10, 10]} />
    <Model />
    <OrbitControls
      enablePan={false}
      enableRotate
      enableZoom
      minPolarAngle={Math.PI / 2.5} // Restrict vertical rotation
      maxPolarAngle={Math.PI / 2.5} // Restrict vertical rotation
    />
  </Canvas>
);

export default ModelView;
