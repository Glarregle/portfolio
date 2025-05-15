'use client'

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelScene = ({ modelPath }) => {
  const containerRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(light);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        scene.add(gltf.scene);
        const model = gltf.scene;
        modelRef.current = model;
        model.position.set(0, 1, 0); // adjust position if needed
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

    // Camera position
    camera.position.set(0, 1, 3);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005; // 🎠 Slow spin
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ModelScene;
