import React, { useEffect } from "react";
import * as THREE from "three";
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

  useEffect(() => {
    createShadow();
  }, []);
  return (
    <Layout>
      <div className={styles.intro}>
        <h2 className={styles.font}>three.js</h2>
        <h3 className={styles.centerPosi}>
          case1 - The real world
          <br />
          <span>🌏 === 🖥</span>
        </h3>

        <div className={styles.socialMedia}>
          <a
            target="_blank"
            href="https://www.instagram.com/_._thatnt_._/?hl=ja"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <br />
      <p className={styles.webgl}>hello</p>
      <canvas id="perspectiveCamera" className={styles.webgl}></canvas>
    </Layout>
  );
}
