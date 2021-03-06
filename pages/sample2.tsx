import React, { useEffect } from "react";
import * as THREE from "three";
import Layout from "../coponents/layout";

export default function Sample2() {
  const createBall = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#ball1") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    // 平行光源
    /* const directionalLight = new THREE.DirectionalLight(0X00FFFF, 2); */

    const light = new THREE.HemisphereLight(0xc1b6ff, 0x0000ff, 1.0);
    const environmentalLight = new THREE.AmbientLight(0x404040);

    light.position.set(1, 1, 1);
    // シーンに追加
    scene.add(light, environmentalLight);

    // 球を作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const material = new THREE.MeshStandardMaterial({ color: 0xfff8f0 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      mesh.rotation.x += 0.01;

      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };
  const createEarth = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#earth-rotate") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);

    // 球体を作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    // 画像を読み込む
    const loader = new THREE.TextureLoader();

    const texture = loader.load("/images/earthmap1k.jpg");
    // マテリアルにテクスチャーを設定
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });
    // メッシュを作成
    const mesh = new THREE.Mesh(geometry, material);
    // 3D空間にメッシュを追加
    scene.add(mesh);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    // 環境光
    const environmentalLight = new THREE.AmbientLight(0x404040);
    // スポットライト光源
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(1000, 1000, 1000);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    // シーンに追加
    scene.add(environmentalLight, spotLight);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      // メッシュを回転させる
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      mesh.rotation.z += 0.01;
      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };
  const createGeomeryBall = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#geometory-ball") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xdcf8ff);
    // 環境光
    const environmentalLight = new THREE.AmbientLight(0x404040);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight, environmentalLight);

    const geometry = new THREE.SphereGeometry(350, 9, 9);
    const material = new THREE.MeshLambertMaterial({ color: 0x6699ff });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };
  const createTopologieBall = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#topologie-ball") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(55, width / height);
    camera.position.set(0, 0, +1000);
    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xdcf8ff);
    // 環境光
    const environmentalLight = new THREE.AmbientLight(0x404040);
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight, environmentalLight);

    const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
    const material = new THREE.MeshNormalMaterial();
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBall();
    createEarth();
    createGeomeryBall();
    createTopologieBall();
  }, []);
  return (
    <Layout>
      <h2>three.js</h2>
      <br />
      <h3>
        case1 - ball
        <br />
        ⚽️ please notice... the ball is rotating 🎱
      </h3>
      <canvas id="ball1" />
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
