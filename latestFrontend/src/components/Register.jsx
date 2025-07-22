import { useState, useEffect } from "react"
import { FaUserAlt, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [fieldErrors, setFieldErrors] = useState({})
  const [authState, setAuthState] = useState({
    loading: false,
    error: null,
    success: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const { loading, error, success } = authState

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" })
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.username.trim()) errors.username = "Username is required"
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required"
    if (!formData.password.trim()) errors.password = "Password is required"
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setAuthState({ loading: true, error: null, success: false })

      // Simulate API call
      setTimeout(() => {
        if (formData.email === "test@example.com") {
          setAuthState({ loading: false, error: "User already exists", success: false })
        } else {
          setAuthState({ loading: false, error: null, success: true })
        }
      }, 1500)
    }
  }

  if (success) {
    return (
      <div className="page">
        <style>{`
          .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom right, #d1fae5, #6ee7b7);
            padding: 1rem;
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 text-center border border-white/20"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaUserAlt className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-green-700 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">Welcome aboard, {formData.username}.</p>
          <button
            onClick={() => alert("Navigate to Login")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go to Login
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="register-page">
      <style>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top right, #ede9fe, #c7d2fe, #e0e7ff);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .blur-circle {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 6s infinite;
        }
        .top-right {
          top: -10rem;
          right: -10rem;
          background: linear-gradient(to bottom right, #c084fc66, #f472b666);
        }
        .bottom-left {
          bottom: -10rem;
          left: -10rem;
          background: linear-gradient(to bottom right, #60a5fa66, #818cf866);
          animation-delay: 1s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      <div className="blur-circle top-right" />
      <div className="blur-circle bottom-left" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 relative z-10 border border-white/20"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FaUserAlt className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-2">Create Account</h2>
          <p className="text-gray-500">Sign up to get started</p>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6"
            >
              <span className="font-medium">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaUserAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-indigo-400/20 focus:border-indigo-500 ${
                  fieldErrors.username ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200`}
              />
            </div>
            {fieldErrors.username && <p className="text-sm text-red-500 mt-2 font-medium">{fieldErrors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-indigo-400/20 focus:border-indigo-500 ${
                  fieldErrors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200`}
              />
            </div>
            {fieldErrors.email && <p className="text-sm text-red-500 mt-2 font-medium">{fieldErrors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-xl focus:ring-4 focus:ring-indigo-400/20 focus:border-indigo-500 ${
                  fieldErrors.password ? "border-red-500 bg-red-50" : "border-gray-200 focus:bg-white"
                } transition-all duration-200`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-indigo-600"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {fieldErrors.password && <p className="text-sm text-red-500 mt-2 font-medium">{fieldErrors.password}</p>}
          </div>

          {/* Register Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl"
              } flex items-center justify-center`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Creating Account...
                </>
              ) : (
                <span>Register</span>
              )}
            </button>
          </motion.div>

          <div className="text-center text-sm text-gray-600 pt-4">
            Already have an account?{" "}
            <button
              onClick={() => alert("Navigate to Login")}
              className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Register
