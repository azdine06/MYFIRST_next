"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const RegisterForm = () => {
  interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, ease: "linear" }}
          />
        ))}
      </motion.div>
      
      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-xl shadow-md w-full max-w-lg mx-auto border border-gray-200 z-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Create an Account</h1>
        <p className="text-gray-600 mb-6 text-center">Join us and get full access to our app's exclusive features.</p>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Firstname</label>
            <input id="firstname" type="text" required value={formData.firstname} onChange={handleChange} className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex-1">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Lastname</label>
            <input id="lastname" type="text" required value={formData.lastname} onChange={handleChange} className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="email" type="email" required value={formData.email} onChange={handleChange} className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input id="password" type="password" required value={formData.password} onChange={handleChange} className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input id="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:opacity-90 transition duration-200 focus:outline-none focus:ring focus:ring-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create Account
        </motion.button>

        <p className="mt-6 text-gray-600 text-sm text-center">
          Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </motion.form>
    </div>
  );
};

export default RegisterForm;
