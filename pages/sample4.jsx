import React, { Suspense, useState } from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import Layout from "../coponents/layout";
import {
  OrbitControls,
  Environment,
  Effects,
  Loader,
  useTexture,
} from "@react-three/drei";
import { LUTPass } from "three/examples/jsm/postprocessing/LUTPass";
import { LUTCubeLoader } from "three/examples/jsm/loaders/LUTCubeLoader";
import styles from "../styles/Sample4.module.css";

extend({ LUTPass });

function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, "images/cubicle-99.CUBE");
  return (
    <Effects>
      children={<lUTPass attachArray="passes" lut={texture3D} />}
    </Effects>
  );
}

function Sphere(props) {
  const texture = useTexture("images/terrazo.png");
  

  return (
    <mesh {...props} >
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0.9}
      />
    </mesh>
  );
}

export default function App() {
  const [active, setActive] = useState(false)
  return (
    <>
      <Layout>
        <h3 className={styles.character}> react - three - fieber </h3>{" "}
        <Canvas
          className={styles.root}
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 20 }}
        >
          <spotLight
            intensity={0.5}
            angle={0.2}
            penumbra={1}
            position={[5, 15, 10]}
          />
          <pointLight
            position={[-20, -5, -10]}
            color="purple"
            intensity={2.0}
          />
          <Suspense fallback={null}>
            <Sphere />
            <Grading />
            <Environment preset="warehouse" />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Loader />
      </Layout>
    </>
  );
}

/* 
extend({ LUTPass });

function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, "images/cubicle-99.CUBE");
  return (
    <Effects><lUTPass attachArray="passes" lut={texture3D} /></Effects>
  );
}

function Sphere(props) {
  const texture = useTexture("images/terrazo.png");
  return (
    <>
      <mesh {...props}>
        <sphereBufferGeometry args={[0.5, 64, 64]} />{" "}
        <meshPhysicalMaterial
          envMapIntensity={0.4}
          map={texture}
          clearcoat={0.8}
          clearcoatRoughness={0}
          roughness={1}
          metalness={0.9}
        />{" "}
      </mesh>{" "}
    </>
  );
}

export default function Sample4() {
  return (
    <>
      <Layout>
        <h3 className={styles.character}> react - three - fieber </h3>{" "}
        <Canvas
          className={styles.root}
          frameloop="demand"
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 20 }}
        >
          <spotLight
            intensity={0.5}
            angle={0.2}
            penumbra={1}
            position={[5, 15, 10]}
          />{" "}
          <pointLight position={[-20, -5, -10]} color="blue" intensity={0.8} />{" "}
          <Suspense fallback={null}>
            <Sphere />
            <Grading />
            <Environment preset="warehouse" />
          </Suspense>{" "}
          <OrbitControls />
        </Canvas>{" "}
        <Loader />
      </Layout>{" "}
    </>
  );
}
 */
