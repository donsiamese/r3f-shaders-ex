import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  shaderMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef, FC } from "react";
import { useGLTF } from "@react-three/drei";
import fragmentShaderLogo from "../../shaders/logo_c2dh/fragment.glsl";
import vertexShaderLogo from "../../shaders/logo_c2dh/vertex.glsl";
import { useControls } from "leva";

interface LogoC2dhProps {
  position: [number, number, number];
}

const LogoC2dh: FC<LogoC2dhProps> = (props) => {
  const logoMaterial = useRef();
  const { nodes } = useGLTF("./c2dh_logo.glb");

  // Use useControls to create a color picker for uColor
  const { uColor } = useControls({
    uColor: "#70c1ff", // Default color
  });

  useFrame((state, delta) => {
    if (logoMaterial.current) {
      logoMaterial.current.uTime += delta;
      // Update the uColor uniform with the value from useControls
      logoMaterial.current.uColor = new THREE.Color(uColor);
    }
  });
  console.log("logoMaterial", logoMaterial);
  return (
    <group scale={3} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.logo.geometry}>
        <logoMaterial ref={logoMaterial} />
      </mesh>
    </group>
  );
};

useGLTF.preload("./c2dh_logo.glb");

const CanvasViz: FC = () => {
  return (
    <Canvas
      shadows
      gl={{ pixelRatio: Math.min(window.devicePixelRatio, 2), antialias: true }}
    >
      <color attach="background" args={["black"]} />
      {/* <directionalLight
        shadow-mapSize={1024}
        shadow-normalBias={0.03}
        castShadow
        position={[-5, 1, 5]}
        intensity={6}
      /> */}
      <LogoC2dh position={[0, 0, 0]} />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        // autoRotate
        // autoRotateSpeed={0.05}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
    </Canvas>
  );
};

const LogoMaterial = shaderMaterial({
  uTime: 0,
  uColor: new THREE.Color("#70c1ff"),
  vertexShader: vertexShaderLogo,
  fragmentShader: fragmentShaderLogo,
  transparent: true,
  side: THREE.DoubleSide,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

extend({ LogoMaterial });

export default CanvasViz;
