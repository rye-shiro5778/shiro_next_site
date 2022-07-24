import { useEffect, useRef } from "react";
import {
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

export const ThreeSample: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const element = mountRef.current;

    if (!element) {
      return;
    }

    // シーン
    const scene = new Scene();

    //　レンダラーの設定
    const renderer = new WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    element.appendChild(renderer.domElement);

    // カメラ
    const camera = new PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 1000);

    // geometory
    const geometry = new SphereGeometry(300, 30, 30);
    const material = new MeshStandardMaterial({ color: 0xff0000 });

    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const directionalLight = new DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    function tick() {
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }

    window.addEventListener("resize", handleResize);
    tick();

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    return () => {
      element.removeChild(renderer.domElement);
      window.removeEventListener("resize", () => handleResize);
    };
  }, []);

  return <div ref={mountRef} />;
};
