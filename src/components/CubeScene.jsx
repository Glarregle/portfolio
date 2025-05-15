'use client'

import { useEffect, useRef } from "react";
import * as THREE from "three";

const CubeScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    // === Setup scene, camera, renderer ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // === Cube ===
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Hot pink
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // === Light ===
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    // === Camera position ===
    camera.position.z = 5;

    // === Animation loop ===
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // === Clean-up ===
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default CubeScene;
