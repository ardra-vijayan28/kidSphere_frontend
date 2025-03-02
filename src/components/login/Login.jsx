// import React from 'react';
import image from '../../assets/loginbg5.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const goToDashboard = () => {
    navigate('/dashboard');
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      if (username === 'admin' && password === 'admin123') {
        goToDashboard();
      } else {
        setError('Invalid username or password.');
      }
    }, 1000);
  };


  return (
    <>
      <div className="min-h-screen flex justify-center items-center relative">

        {/* Background Image */}
        <div
          className="absolute inset-0" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}    >

        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

        {/* Login Card */}
        <div className="relative z-10 bg-transparent bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
          <img
            alt="Your Company"
            src={image}
            className="h-15 w-15 w-auto"
          />
          <h2 className="text-center text-2xl font-bold text-white mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className="absolute right-3 top-2 text-white font-normal not-italic">👤</i>
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="absolute right-3 top-2 text-white font-normal not-italic">🔒</i>
            </div>
            <div className="flex justify-between items-center text-white text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue 0 hover:bg-blue-400 text-white p-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-white text-sm mt-4">
            Don't have an account? <a href="#" className="underline hover:text-purple-300">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
