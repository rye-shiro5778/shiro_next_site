import { CanvasSize } from "@/utils/types/canvasSize";
import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
type Props = {
  size?: number;
  count?: number;
} & CanvasSize;

export const Cube: React.FC<Props> = ({
  size = 0.02,
  count = 90000,
  cWidth,
  cHeight,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = cWidth === "windowWidth" ? window.innerWidth : cWidth;
    const height = cHeight === "windowHeight" ? window.innerHeight : cHeight;
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
    const camera = new PerspectiveCamera(75, width / height, 0.1, 200000);
    camera.position.set(0, 0, 7.5);
    scene.add(camera);

    // geometory
    const position = new Float32Array(count).map(() => {
      return (Math.random() - 0.5) * 5;
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(position, 3));

    const material = new PointsMaterial({
      size: size,
      sizeAttenuation: true,
      color: "#" + Math.floor(Math.random() * 0xffffff).toString(16),
    });

    const point = new Points(geometry, material);
    scene.add(point);

    const controls = new OrbitControls(camera, element);
    controls.enableDamping = true;

    let colorTimer: NodeJS.Timeout | null;

    function tick() {
      controls.update();
      renderer.render(scene, camera);

      if (!colorTimer) {
        colorTimer = setInterval(() => {
          material.setValues({
            color: "#" + Math.floor(Math.random() * 0xffffff).toString(16),
          });
        }, 2000);
      }
      point.rotation.x += 0.003;
      point.rotation.y += -0.003;
      requestAnimationFrame(tick);
    }

    window.addEventListener("resize", handleResize);
    tick();

    function handleResize() {
      const width = cWidth === "windowWidth" ? window.innerWidth : cWidth;
      const height = cHeight === "windowHeight" ? window.innerHeight : cHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    return () => {
      element.removeChild(renderer.domElement);
      colorTimer && clearInterval(colorTimer);
      window.removeEventListener("resize", () => handleResize);
    };
  }, [cWidth, cHeight, count, size]);

  return <div ref={mountRef} />;
};
