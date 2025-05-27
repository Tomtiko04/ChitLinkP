import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    emailPhone: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold mr-2">
            1
          </div>
          <h1 className="text-2xl font-bold">ChitLink</h1>
        </div>

        <h2 className="text-xl mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email/Phone no.</label>
            <input
              type="text"
              name="emailPhone"
              value={formData.emailPhone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-gray-50"
              placeholder="sample@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-gray-50"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-4">Login with socials</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 border rounded-full">
              <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 border rounded-full">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-amber-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
