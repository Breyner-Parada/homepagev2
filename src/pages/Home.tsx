/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { HomeInfo } from "../components/HomeInfo";
import IslandModel from "../models/Island";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(sakura));
  audioRef.current.loop = true;
  audioRef.current.volume = 0.4;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<any>(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const rotation = [0.1, 4.7, 0];
    const screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <IslandModel
            position={islandPosition as [number, number, number]}
            scale={islandScale as [number, number, number]}
            rotation={rotation as [number, number, number]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition as [number, number, number]}
            scale={planeScale as [number, number, number]}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlaying ? soundoff : soundon}
          alt="Sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(prev => !prev)}
        />
      </div>
    </section>
  );
};
