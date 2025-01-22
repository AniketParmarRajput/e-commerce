import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Firebase';
import Googlesvg from '../SVGS/Googlesvg';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [error, setError] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');

  const navigate = useNavigate();

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setGoogleEmail(data.user.email);
        localStorage.setItem('email', data.user.email);
        navigate('/home');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Fetch email from localStorage for Google login
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setGoogleEmail(savedEmail);
    }
  }, []);

  // Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    // Reset error and disable submit button
    setError('');
    setSubmitDisabled(true);

    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = res.user;

      // Update user profile with name
      await updateProfile(user, { displayName: formData.name });

      // Optionally send user data to a server (API)
      const userData = { name: formData.name, email: formData.email, password: formData.password };
      await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      // Save user data to localStorage and navigate
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/home');
    } catch (err) {
      setError(err.message);
      setSubmitDisabled(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-10 sm:p-20">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          {/* Display error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 bg-primary-black text-white rounded-lg ${submitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-Camel'}`}
            disabled={submitDisabled}
          >
            Sign Up
          </button>
        </form>

        {/* Google Sign-In */}
        <div className="flex justify-center items-center mt-4">
          <button onClick={handleGoogleSignIn} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-100">
            <Googlesvg />
            <span>Sign up with Google</span>
          </button>
        </div>

        {/* Link to Login */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-green hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
