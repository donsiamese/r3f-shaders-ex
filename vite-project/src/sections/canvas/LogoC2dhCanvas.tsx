import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  shaderMaterial,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { useRef, FC } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import fragmentShaderLogo from "../../shaders/logo_c2dh/fragment.glsl";
import vertexShaderLogo from "../../shaders/logo_c2dh/vertex.glsl";

// Define the shader material
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

// LogoC2dh Component
const LogoC2dh: FC<{ position: [number, number, number] }> = (props) => {
  const logoMaterial = useRef();
  const { nodes } = useGLTF("./c2dh_logo.glb");

  const { uColor } = useControls({
    uColor: "#70c1ff", // Default color
  });

  useFrame((state, delta) => {
    if (logoMaterial.current) {
      logoMaterial.current.uTime += delta;
      logoMaterial.current.uColor = new THREE.Color(uColor);
    }
  });

  return (
    <group scale={2.5} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.logo.geometry}>
        <logoMaterial ref={logoMaterial} />
      </mesh>
    </group>
  );
};

useGLTF.preload("./c2dh_logo.glb");

// CubeAnnualReport Component
const CubeAnnualReport: FC<{ position: [number, number, number] }> = (
  props
) => {
  const { nodes, materials } = useGLTF("/cubeAnnualReport.glb");
  const logoMaterial = useRef();

  materials.White.roughness = 0.1;

  const { uColor } = useControls({
    uColor: "#70c1ff", // Default color
  });

  useFrame((state, delta) => {
    if (logoMaterial.current) {
      logoMaterial.current.uTime += delta;
      logoMaterial.current.uColor = new THREE.Color(uColor);
    }
  });

  return (
    <group scale={0.5} position={[0, -1, 0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2022ARai-White"].geometry}
        material={materials.White}
        position={[1.005, 1.125, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.291}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.White}
        position={[0, 1.051, 0.956]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={9.193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2022ARai-Red"].geometry}
        position={[0.001, 1.119, 0.002]}
      >
        <logoMaterial ref={logoMaterial} />
      </mesh>
    </group>
  );
};

useGLTF.preload("./cubeAnnualReport.glb");

// Main Canvas Component
const CanvasViz: FC = () => {
  // Use leva to create a dropdown for selecting the 3D object
  const { selectedObject, uColor } = useControls({
    selectedObject: {
      value: "LogoC2dh",
      options: ["LogoC2dh", "CubeAnnualReport"],
      label: "3D Object", // Label for the dropdown
    },
    uColor: {
      value: "#70c1ff", // Default color
      label: "Color",
    },
  });

  return (
    <Canvas
      shadows
      gl={{ pixelRatio: Math.min(window.devicePixelRatio, 2), antialias: true }}
    >
      <color attach="background" args={["black"]} />
      <directionalLight
        shadow-mapSize={1024}
        shadow-normalBias={0.03}
        castShadow
        position={[-1.5, 0, 3]}
        intensity={9}
      />
      <directionalLight
        shadow-mapSize={1024}
        shadow-normalBias={0.03}
        castShadow
        position={[1.5, 0, -3]}
        intensity={9}
      />

      {selectedObject === "LogoC2dh" && <LogoC2dh position={[0, 0, 0]} />}
      {selectedObject === "CubeAnnualReport" && (
        <CubeAnnualReport position={[0, -0.5, 0]} />
      )}
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" /> */}
    </Canvas>
  );
};

export default CanvasViz;
