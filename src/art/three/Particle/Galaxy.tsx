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

type Props = {
  size?: number;
  count?: number;
} & CanvasSize;

export const Galaxy: React.FC<Props> = ({
  size = 0.02,
  count = 2100,
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
    const camera = new PerspectiveCamera(75, width / height, 0.1, 2000);
    camera.position.set(0, 0, 2.5);
    scene.add(camera);

    // geometory
    const position = new Float32Array(count).map(() => {
      return (Math.random() - 0.5) * 10;
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(position, 3));

    const material = new PointsMaterial({
      size: size,
      sizeAttenuation: true,
      color: 0xffff9e,
    });

    const point = new Points(geometry, material);
    scene.add(point);

    function tick() {
      renderer.render(scene, camera);
      point.rotation.x += 0.001;
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
      window.removeEventListener("resize", () => handleResize);
    };
  }, [cWidth, cHeight, count, size]);

  return <div ref={mountRef} />;
};
