import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!username.trim()) {
      setError("Username is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Replace this with your actual API call
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Optionally redirect or clear form
        // window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const InputField = ({ icon: Icon, type, value, onChange, placeholder, label, showToggle = false }) => (
    <div className="relative group">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          required
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:bg-white"
          placeholder={placeholder}
        />
        {showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8">
        <div className="relative w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
              Account Created!
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome aboard! Your account has been successfully created.
            </p>
            <button
              onClick={() => window.location.href = '/login'}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Continue to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Create an Account
            </h2>
            <p className="text-gray-600">Sign up to get started</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-6">
            <InputField
              icon={User}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              label="Username"
            />

            <InputField
              icon={Mail}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              label="Email"
            />

            <InputField
              icon={Lock}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              label="Password"
              showToggle={true}
            />

            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing up...
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;