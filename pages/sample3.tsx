import React, { useEffect } from "react";
import * as THREE from "three";
import styles from '../styles/Sample3.module.css'

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
    createShadow();
    /* createGroup(); */
  }, []);
  return (
    <>
      
      <canvas id="perspectiveCamera" />
      {/* <br />
      <br />
      <br />
      <h3>
        case2 - pointer
        <br />
        grouping
      </h3>
      <canvas id="groupRotating" />
      <br /> */}
    </>
  );
}
