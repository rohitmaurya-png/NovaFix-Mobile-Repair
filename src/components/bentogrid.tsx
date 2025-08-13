"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const icons = [
  "/assets/battery.png",        // Battery replacement
  "/assets/screen_repair.png",  // Screen repair
  "/assets/Water_Damage.png",   // Water damage
];

// Animated counter component
const DevicesFixedCounter = ({ targetNumber = 1200, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, targetNumber, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => controls.stop(); // cleanup
  }, [targetNumber, duration, motionValue]);

  return <div className="text-3xl font-bold text-white mt-4">{count}+</div>;
};

const IconCard = ({
  src,
  title,
  description,
  devicesFixed,
}: {
  src: string;
  title: string;
  description: string;
  devicesFixed: number;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={`relative bg-[#000] rounded-xl border border-white/30 p-6 overflow-hidden transition-shadow duration-300
      ${isHovered ? "shadow-[0_0_30px_5px_#5D2CA8]" : "shadow-none"}
      w-full md:flex-1 flex flex-col items-center text-center`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
          }}
        />
      )}
      <img
        src={src}
        alt={title}
        className="w-16 h-16 object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <h1 className="text-white text-2xl font-bold mb-2 mt-4">{title}</h1>
      <p className="text-white/70 text-lg max-w-xs">{description}</p>
      <DevicesFixedCounter targetNumber={devicesFixed} duration={2} />
      <p className="text-white/70 text-sm mt-1">Devices Fixed</p>
    </div>
  );
};

const BentoBox1 = () => {
  return (
    <div className="bg-[#000000] flex justify-center items-center p-5 rounded-lg sm:py-12">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
        <IconCard
          src={icons[1]}
          title="Screen Repair"
          description="Incredible growth in screen repair technology ensures your devices look and work like new."
          devicesFixed={2500}
        />
        <IconCard
          src={icons[0]}
          title="Battery Replacement"
          description="Battery replacement powered by multiple technologies for longer-lasting power."
          devicesFixed={1800}
        />
        <IconCard
          src={icons[2]}
          title="Water Damage"
          description="Expert water damage repair to save your device from unexpected accidents."
          devicesFixed={1200}
        />
      </div>
    </div>
  );
};

export default function Bentodemo() {
  return <BentoBox1 />;
}
