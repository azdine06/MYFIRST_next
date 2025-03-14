"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

type Inputs = {
  title: string;
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gradientPos, setGradientPos] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const floatingShapes = Array(12).fill(null);

  return (
    <div 
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
      style={{ 
        background: `linear-gradient(${gradientPos * 3.6}deg, #7c3aed 0%, #ec4899 50%, #ef4444 100%)`,
        transition: 'background 0.5s ease-out'
      }}
    >
      {floatingShapes.map((_, index) => (
        <div
          key={index}
          className="absolute w-6 h-6 bg-white/10 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${15 + index}s infinite linear`,
            transform: `scale(${0.5 + Math.random()})`
          }}
        />
      ))}

      <div 
        className={`bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${isHovered ? 'shadow-3xl' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-6 animate-pulse-slow">
          Log In
        </h1>
        <p className="text-center text-gray-600 mb-4 animate-fade-in-up">
          Welcome back! Please enter your credentials.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <input
            {...register("title")}
            className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all hover:scale-[1.01] focus:scale-[1.02]"
            placeholder="Title"
          />

          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all hover:scale-[1.01] focus:scale-[1.02]"
          />
          {errors.email && (
            <span className="text-sm text-red-500 animate-shake">
              {errors.email.message}
            </span>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full pr-12 transition-all hover:scale-[1.01] focus:scale-[1.02]"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} 
                className="hover:scale-110 transition-transform"
              />
            </button>
          </div>
          {errors.password && (
            <span className="text-sm text-red-500 animate-shake">
              {errors.password.message}
            </span>
          )}

          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 relative overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0 0';
            }}
            style={{
              backgroundSize: '200% 100%',
              transition: 'background-position 0.5s, transform 0.2s'
            }}
          >
            Log In
            <div className="absolute inset-0 animate-shimmer opacity-25 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6 animate-fade-in-up">
          Don't have an account?{" "}
          <a href="/register" className="text-purple-500 hover:text-purple-700 underline transition-colors">
            Sign Up
          </a>
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
}