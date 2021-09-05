import React, { useEffect } from "react";
import * as THREE from "three";
import Layout from "../coponents/layout";
import "../styles/Sample4.module.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GeometryUtils } from "three";

export default function Sample4() {
  const createShadow = () => {
    
    // canvas
    const canvas = document.querySelector('#webgl')
  };
  useEffect(() => {
    createShadow();
  }, []);
  return (
    <Layout>
      <h2>three.js</h2>
      <br />
      <h3>
        case1 - The real world
        <br />
        🌏 === 🖥
      </h3>

      <canvas id="webgl"></canvas>
    </Layout>
  );
}
