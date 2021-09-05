import React, { useEffect } from "react";
import * as THREE from "three";
import Layout from "../coponents/layout";
import styles from "../styles/Sample3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Sample4() {
  /* const createGroup = () => {
    // サイズを指定
    const width = 960;
    const height = 540;
    let rot = 0;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#groupRotating") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(100, 150, 500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 地面を作成
    const plane2 = new THREE.GridHelper(600);
    scene.add(plane2);
    const plane = new THREE.AxesHelper(900);
    scene.add(plane);

    const group = new THREE.Group();
    scene.add(group);

    let targetMesh = new THREE.Mesh();

    for (let i = 0; i < 10; i++) {
      // 直方体を作成
      const material = new THREE.MeshNormalMaterial();
      const geometry = new THREE.SphereGeometry(30, 30, 30);
      const mesh = new THREE.Mesh(geometry, material);
      const radian = (i / 10) * Math.PI * 2;
      mesh.position.set(200 * Math.cos(radian), 0, 200 * Math.sin(radian));
      group.add(mesh);

      if (i === 0) {
        targetMesh = mesh;
      }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(50, 50, 0),
    ]);
    const line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0xffdbff })
    );
    scene.add(line);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      group.rotation.x += 0.03;
      group.rotation.y += 0.05;

      // ワールド座標を取得
      const world = targetMesh.getWorldPosition(new THREE.Vector3());

      // ラインを更新
      const positions = line.geometry.attributes.position.array;
      positions[0] = 0; // 1番目頂点のX座標
      positions[1] = 0; // 1番目頂点のY座標
      positions[2] = 0; // 1番目頂点のZ座標
      positions[3] = world.x; // 2番目頂点のX座標
      positions[4] = world.y; // 2番目頂点のY座標
      positions[5] = world.z; // 2番目頂点のZ座標
      line.geometry.attributes.position.needsUpdate = true;

      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  }; */
  useEffect(() => {
    /* createGroup(); */
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

      {/* <h3>
        case2 - pointer
        <br />
        grouping
      </h3>
      <canvas id="groupRotating" />
      <br />  */}
    </Layout>
  );
}
