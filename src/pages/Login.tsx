import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        <FadeInUp>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">
              Welcome Back
            </h1>
            <p className="text-[#ECE8E3]/80">
              Sign in to your Gallaa account to continue
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={100}>
          <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#ECE8E3]/50" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-[#ECE8E3] placeholder-[#ECE8E3]/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#ECE8E3]/50" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-[#ECE8E3]/10 border border-[#ECE8E3]/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-[#ECE8E3] placeholder-[#ECE8E3]/50"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ECE8E3]/50 hover:text-[#D4AF37] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#D4AF37] bg-[#ECE8E3]/10 border-[#ECE8E3]/20 rounded focus:ring-[#D4AF37] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-[#ECE8E3]/70">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-[#D4AF37] hover:text-[#FFD777] transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300 flex items-center justify-center"
              >
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#ECE8E3]/70">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#D4AF37] hover:text-[#FFD777] transition-colors font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ECE8E3]/10">
              <div className="text-center mb-4">
                <span className="text-[#ECE8E3]/50 text-sm">Or continue with</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-2 border border-[#ECE8E3]/20 rounded-lg hover:border-[#D4AF37]/50 transition-colors">
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
                  <span className="text-sm">Google</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-[#ECE8E3]/20 rounded-lg hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-5 h-5 bg-blue-600 rounded mr-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-sm">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="mt-8 text-center text-sm text-[#ECE8E3]/60">
            <p>
              By signing in, you agree to our{' '}
              <Link to="/terms" className="text-[#D4AF37] hover:text-[#FFD777] transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#D4AF37] hover:text-[#FFD777] transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default Login;