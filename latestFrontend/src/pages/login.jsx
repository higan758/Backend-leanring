import { useState, useEffect } from "react"
import { FaUserAlt, FaEnvelope, FaLock, FaCheckCircle, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Register = () => {
  // Mock Redux state for demonstration
  const [authState, setAuthState] = useState({ loading: false, error: null, success: false })
  const { loading, error, success } = authState

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [fieldErrors, setFieldErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/\d/.test(password)) strength += 25
    return strength
  }

  const getPasswordStrengthColor = (strength) => {
    if (strength < 25) return 'bg-red-500'
    if (strength < 50) return 'bg-yellow-500'
    if (strength < 75) return 'bg-blue-500'
    return 'bg-green-500'
  }

  const getPasswordStrengthText = (strength) => {
    if (strength < 25) return 'Weak'
    if (strength < 50) return 'Fair'
    if (strength < 75) return 'Good'
    return 'Strong'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value))
    }

    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" })
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.username.trim()) {
      errors.username = "Username is required"
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setAuthState({ loading: true, error: null, success: false })
      
      // Simulate API call
      setTimeout(() => {
        setAuthState({ loading: false, error: null, success: true })
      }, 2000)
    }
  }

  if (success) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 px-4">

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="bg-blue/80 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-4xl" />
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3"
          >
            Welcome Aboard!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-600 mb-6"
          >
            Your account has been created successfully. Get ready to explore!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <button 
              onClick={() => setAuthState({ loading: false, error: null, success: false })}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue to Dashboard
            </button>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 px-4 py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 relative z-10 border border-white/20"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", bounce: 0.6 }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <FaUserAlt className="text-white text-2xl" />
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">Create Account</h2>
          <p className="text-gray-500">Join our community today</p>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">{typeof error === "string" ? error : "An error occurred during registration"}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          {/* Username */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaUserAlt className="text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                  fieldErrors.username ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200 placeholder:text-gray-400`}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-focus-within:opacity-100 -z-10 blur transition-opacity duration-200"></div>
            </div>
            <AnimatePresence>
              {fieldErrors.username && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500 mt-2 font-medium"
                >
                  {fieldErrors.username}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                  fieldErrors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200 placeholder:text-gray-400`}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-focus-within:opacity-100 -z-10 blur transition-opacity duration-200"></div>
            </div>
            <AnimatePresence>
              {fieldErrors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500 mt-2 font-medium"
                >
                  {fieldErrors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                  fieldErrors.password ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200 placeholder:text-gray-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-purple-500 transition-colors duration-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-focus-within:opacity-100 -z-10 blur transition-opacity duration-200"></div>
            </div>
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Password strength</span>
                  <span className={`text-xs font-medium ${
                    passwordStrength < 25 ? 'text-red-500' :
                    passwordStrength < 50 ? 'text-yellow-500' :
                    passwordStrength < 75 ? 'text-blue-500' : 'text-green-500'
                  }`}>
                    {getPasswordStrengthText(passwordStrength)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${passwordStrength}%` }}
                    transition={{ duration: 0.3 }}
                    className={`h-2 rounded-full ${getPasswordStrengthColor(passwordStrength)}`}
                  />
                </div>
              </motion.div>
            )}
            
            <AnimatePresence>
              {fieldErrors.password && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-500 mt-2 font-medium"
                >
                  {fieldErrors.password}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="text-xs text-gray-500 mt-2">Password must be at least 6 characters long</p>
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="pt-2"
          >
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
              } flex items-center justify-center relative overflow-hidden`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Creating Account...
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-sm text-gray-600 pt-4"
          >
            Already have an account?{" "}
            <button 
              onClick={() => alert('Navigate to login page')}
              className="text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-200 hover:underline"
            >
              Sign in
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Register