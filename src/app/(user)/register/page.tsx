// components/RegisterForm.js

import React from 'react';

const RegisterForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto border border-gray-300">
      <p className="text-2xl font-bold mb-4">Register</p>
      <p className="mb-6 text-gray-600">Signup now and get full access to our app.</p>
      <div className="flex gap-4 mb-4">
        <label className="flex-1">
          <input
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Firstname"
            required
          />
        </label>

        <label className="flex-1">
          <input
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Lastname"
            required
          />
        </label>
      </div>

      <label className="block mb-4">
        <input
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
          required
        />
      </label>

      <label className="block mb-4">
        <input
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          required
        />
      </label>

      <label className="block mb-4">
        <input
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Confirm password"
          required
        />
      </label>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
        Submit
      </button>

      <p className="mt-4 text-gray-600">
        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Signin</a>
      </p>
    </form>
  );
};

export default RegisterForm;
