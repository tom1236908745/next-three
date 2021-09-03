import React, { useEffect } from "react";
import * as THREE from "three";
import Layout from "../coponents/layout";

export default function Sample3() {
  const createShadow = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#shodowObj') as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // レンダラー：シャドウを有効にする
    renderer.shadowMap.enabled = true;

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(25, 25, 25);
    camera.lookAt(new THREE.Vector3());

    // 床を作成
    const meshFloor = new THREE.Mesh(
      new THREE.BoxGeometry(2000, 0.1, 2000),
      new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
    );
    // 影を受け付ける
    meshFloor.receiveShadow = true;
    scene.add(meshFloor);

    // オブジェクトを作成
    const meshKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(3, 1, 100, 16),
      new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.0 })
    );
    meshKnot.position.set(0, 5, 0);
    // 影を落とす
    meshKnot.castShadow = true;
    scene.add(meshKnot);
    

    // 照明を作成
    const light = new THREE.SpotLight(0xffffff, 2, 100, Math.PI / 4, 1);
    // ライトに影を有効にする
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      // レンダリング
      renderer.render(scene, camera);

      // 照明の位置を更新
      const t = Date.now() / 500;
      const r = 20.0;
      const lx = r * Math.cos(t);
      const lz = r * Math.sin(t);
      const ly = 20.0 + 5.0 * Math.sin(t / 3.0);
      light.position.set(lx, ly, lz);

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createShadow();
    
  }, []);
  return (
    <Layout>
      <h2>three.js</h2>
      <br />
      <h3>
        case1 - shadow
        <br />
        ⚽️ please notice... the ball is rotating 🎱
      </h3>
      <canvas id="shodowObj"></canvas>
      <br />
      <h3>
        case2 - the earth
        <br />
        🌎 Actually, the earth is rotating like this! 🌏
      </h3>
      <canvas id="earth-rotate" />
      <br />
      <h3>
        case3 - geometory ball
        <br />
        🏐Ewww...🏀
      </h3>
      <canvas id="geometory-ball" />
      <br />
      <h3>
        case4 - topologie not ball
        <br />
        👨‍🎓 Mathematical 🍩
      </h3>
      <canvas id="topologie-ball" />
      <br />
    </Layout>
  );
}
