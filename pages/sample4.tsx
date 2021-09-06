import React, { useEffect } from "react";
import Link from "next/link";
import * as THREE from "three";
import Layout from "../coponents/layout";
import styles from "../styles/Sample3.module.css";

export default function Sample3() {
  const createCircle = () => {
    // サイズを指定
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#raibowCircle") as HTMLCanvasElement,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x69b0ff, 1.0);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    var sphere_geometry = new THREE.SphereGeometry(300, 128, 128);
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);

    renderer.render(scene, camera); // レンダリング
    
  };

  useEffect(() => {
    createCircle();
  }, []);
  return (
    <Layout>
      <canvas id="raibowCircle"></canvas>
    </Layout>
    
  );
}
