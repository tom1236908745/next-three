import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import Layout from "../coponents/layout";
import styles from "../styles/Sample5.module.css";

const Scene = () => {
  const fbx = useLoader(FBXLoader, "others/Creeper.fbx");
  return <primitive object={fbx} scale={0.005} />;
};

export default function Sample6() {
  return (
    <>
      <Layout>
        <Canvas className={styles.root} >
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </Layout>
    </>
  );
}
