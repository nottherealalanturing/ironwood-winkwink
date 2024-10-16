'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // If you're using Next.js
import '../../globals.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill out both fields.');
      toast.error(`Invalid username or password`, {
        autoClose: 1000,
      });
      return;
    }

    // Check if email and password are both 'admin'
    if (email === 'admin' && password === 'admin') {
      // Redirect to the dashboard (update this to match your routing setup)
      toast.success(`Signin succesful`, {
        autoClose: 1000,
      });
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="w-screen h-screen bg-[#CCD3DA] flex items-center justify-center">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-[#FEFBF9] border border-2-[#DBE1E7] p-10 gap-10">
        <div className="flex flex-col items-start justify-start w-full">
          <p className="font-campton text-2xl font-bold text-[#002448]">
            Sign In
          </p>
          <p className="font-campton text-base font-semi text-[#002448]">
            Login to access your dashboard
          </p>
        </div>

        <select className="w-full px-6 py-4 font-campton text-base font-semi text-[#002448]">
          <option
            value="admin"
            className="px-6 py-4 font-campton text-base font-semi text-[#002448]"
          >
            Admin Officer
          </option>
          <option
            value="loan"
            className="w-full px-6 py-4 font-campton text-base font-semi text-[#002448]"
          >
            Loan Officer
          </option>
        </select>

        <div className="relative w-full">
          <label
            htmlFor="email"
            className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white block w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full bg-white">
          <label
            htmlFor="password"
            className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="block w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex items-start ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 lg:text-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a
                href="#"
                className="text-blue-600 lg:text-nowrap hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <a href="#" className="lg:text-nowrap">
            Forgotten Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="font-campton text-base font-bold w-2/3 bg-[#002448] text-[#ffffff] border border-[#002448] py-4 px-6"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
