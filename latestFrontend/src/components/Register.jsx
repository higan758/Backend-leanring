import React, { useState } from 'react';
import { Eye, EyeOff, Gamepad2, Mail, Lock, User, Github, Chrome, Apple, Check, X } from 'lucide-react';

const Register = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Simulate successful registration
      if (formData.username && formData.email && formData.password && formData.agreeToTerms && passwordValidation.match) {
        const userData = {
          username: formData.username,
          email: formData.email,
          registrationTime: new Date().toISOString()
        };
        
        // Call the onRegister prop function passed from App component
        if (props.onRegister) {
          props.onRegister(userData);
        }
        
        console.log('Registration successful:', userData);
      } else {
        alert('Please fill all fields correctly and agree to terms');
      }
    }, 2000);
  };

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: '#dc2626' },
    { name: 'GitHub', icon: Github, color: '#4b5563' },
    { name: 'Apple', icon: Apple, color: '#1f2937' }
  ];

  // Password strength validation
  const passwordValidation = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    match: formData.password === formData.confirmPassword && formData.confirmPassword !== ''
  };

  const getPasswordStrength = () => {
    const validations = Object.values(passwordValidation);
    const validCount = validations.filter(Boolean).length;
    if (validCount === 0) return { strength: 0, label: '', color: '' };
    if (validCount <= 2) return { strength: 25, label: 'Weak', color: '#ef4444' };
    if (validCount <= 3) return { strength: 50, label: 'Fair', color: '#eab308' };
    if (validCount <= 4) return { strength: 75, label: 'Good', color: '#3b82f6' };
    return { strength: 100, label: 'Strong', color: '#10b981' };
  };

  const strengthInfo = getPasswordStrength();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    backgroundEffects: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    },
    backgroundInner: {
      position: 'absolute',
      inset: '-40px',
      opacity: 0.5
    },
    backgroundCircle1: {
      position: 'absolute',
      top: '25%',
      left: '25%',
      width: '288px',
      height: '288px',
      backgroundColor: '#7c3aed',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(64px)',
      animation: 'pulse 2s infinite'
    },
    backgroundCircle2: {
      position: 'absolute',
      top: '75%',
      right: '25%',
      width: '288px',
      height: '288px',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(64px)',
      animation: 'pulse 2s infinite',
      animationDelay: '1s'
    },
    backgroundCircle3: {
      position: 'absolute',
      bottom: '25%',
      left: '33%',
      width: '288px',
      height: '288px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(64px)',
      animation: 'pulse 2s infinite',
      animationDelay: '2s'
    },
    cardWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '448px'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      padding: '32px',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    logoIcon: {
      padding: '12px',
      background: 'linear-gradient(to right, #7c3aed, #ec4899)',
      borderRadius: '50%'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #c084fc, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#d1d5db'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#d1d5db',
      marginBottom: '8px'
    },
    inputContainer: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '20px',
      height: '20px'
    },
    input: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      borderRadius: '8px',
      paddingLeft: '44px',
      paddingRight: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      color: 'white',
      outline: 'none',
      backdropFilter: 'blur(4px)',
      transition: 'all 0.3s',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    inputWithIcon: {
      paddingRight: '44px'
    },
    inputError: {
      borderColor: 'rgba(239, 68, 68, 0.5)'
    },
    eyeButton: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s'
    },
    strengthContainer: {
      marginTop: '8px'
    },
    strengthHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '4px'
    },
    strengthLabel: {
      fontSize: '12px',
      color: '#9ca3af'
    },
    strengthValue: {
      fontSize: '12px',
      fontWeight: '500'
    },
    strengthBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#374151',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    strengthFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.3s'
    },
    errorText: {
      color: '#f87171',
      fontSize: '12px',
      marginTop: '4px'
    },
    requirementsCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '8px',
      padding: '12px',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      marginTop: '8px'
    },
    requirementsTitle: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#d1d5db',
      marginBottom: '8px'
    },
    requirementsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    requirementItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    requirementText: {
      fontSize: '12px'
    },
    termsContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    checkbox: {
      width: '16px',
      height: '16px',
      accentColor: '#7c3aed',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      borderRadius: '4px',
      marginTop: '4px'
    },
    termsText: {
      fontSize: '14px',
      color: '#d1d5db'
    },
    termsLink: {
      color: '#c084fc',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    registerButton: {
      width: '100%',
      background: 'linear-gradient(to right, #7c3aed, #ec4899)',
      color: 'white',
      fontWeight: '600',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      transition: 'all 0.3s',
      cursor: 'pointer',
      fontSize: '16px'
    },
    registerButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    spinner: {
      width: '20px',
      height: '20px',
      border: '2px solid white',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '8px'
    },
    divider: {
      margin: '24px 0'
    },
    dividerInner: {
      position: 'relative'
    },
    dividerLine: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center'
    },
    dividerBorder: {
      width: '100%',
      borderTop: '1px solid rgba(168, 85, 247, 0.3)'
    },
    dividerText: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      fontSize: '14px'
    },
    dividerTextSpan: {
      padding: '0 8px',
      backgroundColor: '#0f172a',
      color: '#9ca3af'
    },
    socialButtons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px'
    },
    socialButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    loginLink: {
      marginTop: '32px',
      textAlign: 'center'
    },
    loginText: {
      color: '#d1d5db'
    },
    loginLinkText: {
      color: '#c084fc',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    footer: {
      marginTop: '32px',
      textAlign: 'center',
      color: '#9ca3af',
      fontSize: '14px'
    }
  };

  const requirements = [
    { key: 'length', label: 'At least 8 characters', valid: passwordValidation.length },
    { key: 'uppercase', label: 'One uppercase letter', valid: passwordValidation.uppercase },
    { key: 'lowercase', label: 'One lowercase letter', valid: passwordValidation.lowercase },
    { key: 'number', label: 'One number', valid: passwordValidation.number }
  ];

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.backgroundEffects}>
        <div style={styles.backgroundInner}>
          <div style={styles.backgroundCircle1}></div>
          <div style={styles.backgroundCircle2}></div>
          <div style={styles.backgroundCircle3}></div>
        </div>
      </div>

      <div style={styles.cardWrapper}>
        {/* Register Card */}
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.logoContainer}>
              <div style={styles.logoIcon}>
                <Gamepad2 style={{ width: '32px', height: '32px', color: 'white' }} />
              </div>
            </div>
            <h1 style={styles.title}>Join GameVault</h1>
            <p style={styles.subtitle}>Create your gaming account</p>
          </div>

          {/* Register Form */}
          <div style={styles.form}>
            {/* Username Field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="username" style={styles.label}>Username</label>
              <div style={styles.inputContainer}>
                <User style={styles.inputIcon} />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Choose a username"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <div style={styles.inputContainer}>
                <Mail style={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <div style={styles.inputContainer}>
                <Lock style={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ ...styles.input, ...styles.inputWithIcon }}
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  {showPassword ? 
                    <EyeOff style={{ width: '20px', height: '20px' }} /> : 
                    <Eye style={{ width: '20px', height: '20px' }} />
                  }
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div style={styles.strengthContainer}>
                  <div style={styles.strengthHeader}>
                    <span style={styles.strengthLabel}>Password Strength</span>
                    <span style={{
                      ...styles.strengthValue,
                      color: strengthInfo.color
                    }}>
                      {strengthInfo.label}
                    </span>
                  </div>
                  <div style={styles.strengthBar}>
                    <div 
                      style={{
                        ...styles.strengthFill,
                        width: `${strengthInfo.strength}%`,
                        backgroundColor: strengthInfo.color
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div style={styles.fieldGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
              <div style={styles.inputContainer}>
                <Lock style={styles.inputIcon} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={{
                    ...styles.input,
                    ...styles.inputWithIcon,
                    ...(formData.confirmPassword && !passwordValidation.match ? styles.inputError : {})
                  }}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeButton}
                >
                  {showConfirmPassword ? 
                    <EyeOff style={{ width: '20px', height: '20px' }} /> : 
                    <Eye style={{ width: '20px', height: '20px' }} />
                  }
                </button>
              </div>
              {formData.confirmPassword && !passwordValidation.match && (
                <p style={styles.errorText}>Passwords do not match</p>
              )}
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div style={styles.requirementsCard}>
                <h4 style={styles.requirementsTitle}>Password Requirements:</h4>
                <div style={styles.requirementsList}>
                  {requirements.map((req) => (
                    <div key={req.key} style={styles.requirementItem}>
                      {req.valid ? (
                        <Check style={{ width: '16px', height: '16px', color: '#10b981' }} />
                      ) : (
                        <X style={{ width: '16px', height: '16px', color: '#ef4444' }} />
                      )}
                      <span style={{
                        ...styles.requirementText,
                        color: req.valid ? '#10b981' : '#9ca3af'
                      }}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms Agreement */}
            <div style={styles.termsContainer}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                style={styles.checkbox}
                required
              />
              <label htmlFor="agreeToTerms" style={styles.termsText}>
                I agree to the{' '}
                <a href="#" style={styles.termsLink}>Terms of Service</a>
                {' '}and{' '}
                <a href="#" style={styles.termsLink}>Privacy Policy</a>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || !formData.agreeToTerms || !passwordValidation.match}
              style={{
                ...styles.registerButton,
                ...(isLoading || !formData.agreeToTerms || !passwordValidation.match ? styles.registerButtonDisabled : {})
              }}
              onMouseEnter={(e) => {
                if (!isLoading && formData.agreeToTerms && passwordValidation.match) {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading && formData.agreeToTerms && passwordValidation.match) {
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              {isLoading ? (
                <div style={styles.loadingContainer}>
                  <div style={styles.spinner}></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {/* Divider */}
          <div style={styles.divider}>
            <div style={styles.dividerInner}>
              <div style={styles.dividerLine}>
                <div style={styles.dividerBorder}></div>
              </div>
              <div style={styles.dividerText}>
                <span style={styles.dividerTextSpan}>Or sign up with</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div style={styles.socialButtons}>
            {socialLogins.map((social) => (
              <button
                key={social.name}
                style={styles.socialButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <social.icon style={{ width: '20px', height: '20px', color: 'white' }} />
              </button>
            ))}
          </div>

          {/* Login Link */}
          <div style={styles.loginLink}>
            <p style={styles.loginText}>
              Already have an account?{' '}
              <a 
                href="#" 
                style={styles.loginLinkText}
                onClick={(e) => {
                  e.preventDefault();
                  if (props.onNavigateToLogin) {
                    props.onNavigateToLogin();
                  }
                }}
              >
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>© 2025 GameVault. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        input:focus {
          ring: 2px solid #7c3aed !important;
          border-color: transparent !important;
        }
        input::placeholder {
          color: #9ca3af;
        }
        a:hover {
          color: #a855f7 !important;
        }
      `}</style>
    </div>
  );
};

export default Register;