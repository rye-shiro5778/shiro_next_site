import { CanvasSize } from "@/utils/types/canvasSize";
import { useEffect, useRef } from "react";
import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
type Props = CanvasSize;

export const Cloud: React.FC<Props> = ({ cWidth, cHeight }) => {
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
    scene.background = new Color(0x1e293b);

    //　レンダラーの設定
    const renderer = new WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    // renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    element.appendChild(renderer.domElement);

    // カメラ
    const camera = new PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(7, 7, 7);

    const controls = new OrbitControls(camera, element);
    controls.enableDamping = true;

    const loader = new GLTFLoader();
    const url = "/Cloud.glb";

    loader.load(url, (gltf) => {
      const model = gltf.scene;
      model.traverse((obj) => {
        console.log(obj);
        if (obj.name === "grand") {
          obj.visible = true;
        }
        if (obj.type === "Mesh") {
          obj.receiveShadow = true;
          obj.castShadow = true;
        } else if (obj.type === "DirectionalLight") {
          obj.castShadow = true;
        } else {
        }
      });
      scene.add(model);
    });

    function tick() {
      // mesh.rotation.y += 0.01;
      renderer.render(scene, camera);

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
  }, [cHeight, cWidth]);

  return <div ref={mountRef} />;
};
