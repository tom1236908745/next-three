import { Canvas } from "@react-three/fiber";

export default function Sample4() {
  return (
    <div id="canvas-container">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}
