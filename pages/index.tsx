import React, { useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";
import Layout from "../coponents/layout";

export default function() {
  /** case1 */
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample1") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  /** case2 */
  const createBox2 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample2") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  /** case3 */
  const createBox3 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample3") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.1;
      box.rotation.x += 0.1;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  /** case4 */
  const createBox4 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample4") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 1;
      box.rotation.x += 1;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };

  /** case5 */
  // ここでは箱をたくさん作りたいので、箱を作っている処理のみ、関数化する。
  /** 箱をつくる */
  const createBoxFunc = (): THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshNormalMaterial
  > => {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    return box;
  };

  const createBox5 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample5") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    let boxes: THREE.Mesh<
      THREE.BoxGeometry,
      THREE.MeshNormalMaterial
    >[] = new Array(10).fill(null).map((_) => createBoxFunc());

    boxes.forEach((v, i) => {
      v.position.x = Math.floor(Math.random() * 1200 - 600);
      v.position.y = Math.floor(Math.random() * 1200 - 600);
      v.position.x = Math.floor(Math.random() * 1200 - 600);
    });
    scene.add(...boxes);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      boxes.forEach((v) => {
        v.rotation.y += 0.01;
        v.rotation.x += 0.01;
      });
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  };

  // didMountの後で描画しないと、Cannot read property 'width' of nullというエラーが出る
  // canvasが表示される前だから？
  useEffect(() => {
    createBox();
    createBox2();
    createBox3();
    createBox4();
    createBox5();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    
      <Layout>
        
        <h2>three.js</h2>
        <h3>case1</h3>
        <canvas id="nyumon-sample1" />
        <h3>case2 - ローテーションz軸方向追加</h3>
        <canvas id="nyumon-sample2" />
        <h3>case3 - ローテーション速度up</h3>
        <canvas id="nyumon-sample3" />
        <h3>case4 - さらにローテーション速度up</h3>
        <canvas id="nyumon-sample4" />
        <h3>case5 - 箱増殖(200個)</h3>
        <canvas id="nyumon-sample5" />
      </Layout>
    
  );
};
