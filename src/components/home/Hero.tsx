"use client";
import Image from "next/image";
import CloudImage from '../../../public/cloud-hosting .png';
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";
import styles from './hero.module.css';

const FloatingShape = ({ index }: { index: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-float`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 50 + 20}px`,
        height: `${Math.random() * 50 + 20}px`,
        animationDelay: `${index * 0.5}s`,
        filter: 'blur(20px)'
      }}
    />
  );
};

const Hero = () => {
  const [shapes, setShapes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setShapes(Array.from({ length: 15 }, (_, i) => (
      <FloatingShape key={i} index={i} />
    )));
  }, []);

  return (
    <div className={`${styles.hero} relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900`}>
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 opacity-30 animate-gradient">
        {shapes}
      </div>

      <div className={`${styles.heroLeft} relative z-10`}>
        <h1 className={styles.title}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Cloud Hosting
          </span>
        </h1>
        <p className={styles.desc}>
          The best web hosting solution for your online success
        </p>
        <div className={styles.services}>
          {["Easy To Use Control Panel", "Secure Hosting", "Website Maintenance"].map((service) => (
            <div key={service} className={`${styles.serviceItem} hover:bg-white/10 transition-all`}>
              <TiTick className="text-green-400" /> {service}
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-96 hover:scale-105 transition-transform duration-300">
        <Image 
          loading="lazy"  
          src={CloudImage} 
          alt='cloud' 
          width={500} 
          height={500} 
          className="drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Hero;