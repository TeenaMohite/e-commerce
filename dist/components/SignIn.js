import React, { useState } from 'react';
import './Signin.css';
function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // Simple validation
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    // Handle sign-in logic (e.g., API request)
    console.log('User signed in with:', {
      username,
      password
    });
    setError('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center min-h-screen bg-black",
    style: {
      backgroundImage: "url('/images/sign-in.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-auto p-8 bg-white rounded-lg shadow-md w-96"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-6 text-5xl font-bold text-center text-amber-950"
  }, "Sign In"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username",
    className: "block text-sm font-semibold text-gray-700"
  }, "Username"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "username",
    value: username,
    onChange: e => setUsername(e.target.value),
    placeholder: "Enter your username",
    className: "w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-semibold text-gray-700"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter your password",
    className: "w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  })), error && /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-sm text-center text-red-500"
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, "Sign In"))));
}
export default SignInForm;