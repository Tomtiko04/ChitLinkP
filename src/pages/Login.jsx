import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { Icon } from '@iconify/react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-12 gap-4 h-screen place-items-center">
        {/* Left column - smaller */}
        <div className="col-span-2 flex items-center justify-center bg-green-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <span className="text-white font-semibold">I</span>
            </div>
            <span className="text-xl font-semibold text-[#05243F]">ChitLink</span>
          </div>
        </div>

        {/* Middle column - larger, contains form */}
        <div className="col-span-8 flex items-center justify-center bg-red-200">
          <div className="w-full max-w-md">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              {/* Title and Signup */}
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-medium text-[#05243F]">Login</h1>
                <span className="text-sm text-[#9E9E9E]">Don't have an account?</span>
                <Link to="/signup" className="text-sm font-medium text-[#D4AF37] hover:text-[#B08E2D]">
                  Signup
                </Link>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#05243F] mb-2">
                  Email/Phone no.
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sample@gmail.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#FFFDE7] border border-transparent text-[#05243F] placeholder-[#9E9E9E] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#05243F] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="********"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#E0E0E0] text-[#05243F] placeholder-[#9E9E9E] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded border-[#E0E0E0] text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <span className="ml-2 text-sm text-[#05243F]">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-[#D32F2F] hover:text-[#B71C1C]">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-white py-3 rounded-lg hover:bg-[#B08E2D] transition-colors font-medium"
              >
                Login
              </button>

              {/* Social Login Section */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E0E0E0]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm text-[#9E9E9E]">or</span>
                </div>
              </div>

              <div>
                <p className="text-center text-sm text-[#9E9E9E] mb-4">Login with socials</p>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
                  >
                    <Icon icon="flat-color-icons:google" className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
                  >
                    <Icon icon="logos:facebook" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right column - smaller */}
        <div className="col-span-2 flex items-center justify-center bg-amber-200">
          <div>
            <span>Right section</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
