import React, { useEffect } from "react";
import Link from "next/link";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Layout from "../coponents/layout";
import styles from "../styles/Sample3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Sample3() {
  const createShadow = () => {
    // サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#perspectiveCamera") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0xf8eaff, 1.0);

    // シーンを作成
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf8eaff, 200, 300);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);

    // マテリアルを作成する
    const material = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load("images/socialMedia.png"),
    });
    // フォグ（霞）を有効にする
    material.fog = true;

    // ビルボードを作成
    for (let i = 0; i < 1000; i++) {
      const sprite = new THREE.Sprite(material);
      // ランダムな座標に配置
      sprite.position.x = 500 * (Math.random() - 0.5);
      sprite.position.y = 100 * Math.random() - 40;
      sprite.position.z = 500 * (Math.random() - 0.5);
      // 必要に応じてスケールを調整
      sprite.scale.set(10, 10, 10);

      scene.add(sprite);
    }

    // 地面を作成
    const plane = new THREE.GridHelper(300, 10, 0xf89eff, 0x00e7ff);
    plane.position.y = -70;
    scene.add(plane);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      // カメラの自動移動
      camera.position.x = 100 * Math.sin(Date.now() / 2000);
      camera.position.z = 100 * Math.cos(Date.now() / 2000);
      camera.position.y = 50 * Math.sin(Date.now() / 1000) + 50;
      camera.lookAt(new THREE.Vector3(200, 0, 20));

      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
  };
  const createCircle = () => {
    // サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#raibowCircle") as HTMLCanvasElement,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    var sphere_geometry = new THREE.SphereGeometry(200, 128, 128);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);

    renderer.render(scene, camera); // レンダリング
  };
  const createEarth = () => {
    // サイズを指定
    const width = window.innerWidth;
    const height = 540;

    const canvasElement = document.querySelector("#earthRotate") as HTMLCanvasElement
    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);

    // カメラコントローラーを作成
    const controls = new OrbitControls(camera, canvasElement);

    // 滑らかにカメラコントローラーを制御する
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;
    controls.enableZoom = false

    // 球体を作成
    const geometry = new THREE.SphereGeometry(350, 30, 30);
    // 画像を読み込む
    const loader = new THREE.TextureLoader();

    const texture = loader.load("/images/earthcloudmap.jpg");
    // マテリアルにテクスチャーを設定
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });
    // メッシュを作成
    const mesh = new THREE.Mesh(geometry, material);
    // 3D空間にメッシュを追加
    scene.add(mesh);
    mesh.scale.set(1,1,1);    
    
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
      mesh.rotation.y += 0.01;
      
      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };
  useEffect(() => {
    createShadow();
    createCircle();
    createEarth();
  }, []);
  return (
    <Layout>
      <div className={styles.intro}>
        <h2 className={styles.font}>three.js</h2>
        <h3 className={styles.centerPosi}>
          case1 - The real world
          {/* <br />
          <span>🌏 === 🖥</span> */}
        </h3>

        <Link href="https://www.instagram.com/_._thatnt_._/?hl=ja" passHref>
          <div className={styles.socialMedia}>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </div>
        </Link>
      </div>
      f
      <br />
      <p className={styles.webgl}>hello</p>
      <canvas id="perspectiveCamera" className={styles.webgl}></canvas>
      <Link href="https://github.com/tom1236908745" passHref>
        <canvas id="raibowCircle"></canvas>
      </Link>
      
      <canvas id="earthRotate" />
    </Layout>
  );
}
