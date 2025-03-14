"use client";

import Link from "next/link";
import { FiAlertTriangle } from "react-icons/fi";
import { useEffect, useState } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Particle = ({ index }: { index: number }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute h-1 w-1 rounded-full bg-yellow-400/30 animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.5}s`,
      }}
    />
  );
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const particles = Array.from({ length: 30 }, (_, i) => (
    <Particle key={i} index={i} />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 px-4 animate-gradient bg-[300%]">
      {particles}
      
      <div className="max-w-md w-full bg-gray-800/90 backdrop-blur-sm shadow-xl rounded-lg p-6 text-center relative z-10">
        <div className="flex flex-col items-center">
          <FiAlertTriangle className="text-yellow-400 text-7xl mb-4 animate-pulse" />
          <h1 className="text-3xl font-bold text-yellow-400">
            Something Went Wrong
          </h1>
        </div>

        <p className="text-gray-400 my-4 text-lg">
          We encountered an unexpected issue. <br />
          <span className="font-semibold text-gray-300">Error:</span> {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:to-red-400 text-black font-bold py-2 px-4 rounded-md shadow-lg transition-all hover:scale-[1.02]"
        >
          Try Again
        </button>

        <Link 
          href="/" 
          className="mt-6 inline-block text-yellow-400 hover:text-yellow-300 text-lg underline hover:scale-105 transition-transform"
        >
          Back to Home Page
        </Link>

        <div className="mt-6">
          <a
            href="mailto:support@example.com"
            className="text-sm text-gray-500 hover:text-gray-300 hover:scale-105 transition-transform"
          >
            Report this issue to support
          </a>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20vh) translateX(10vw); opacity: 0.6; }
          100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        }
        
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;