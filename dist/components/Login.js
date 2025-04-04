import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center text-left bg-gray-100 h-fit"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./images/sign-up2.jpg",
    alt: "Sign-up user",
    className: "object-cover mx-auto h-30 w-50"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between w-full h-full h-screen max-w-6xl p-4 bg-white rounded-lg shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full p-8 md:w-1/2"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-2 text-4xl font-bold text-gray-800"
  }, "Create New Account"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Sign up to create a new account.", /*#__PURE__*/React.createElement("br", null), "Already have an account?", " ", /*#__PURE__*/React.createElement(Link, {
    to: "/SignIn",
    className: "text-2xl text-blue-500"
  }, "Log in here")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-gray-700"
  }, "First Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "firstName",
    className: "w-full p-2 border rounded",
    placeholder: "Enter your first name",
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-gray-700"
  }, "Last Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "lastName",
    className: "w-full p-2 border rounded",
    placeholder: "Enter your last name",
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-gray-700"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    className: "w-full p-2 border rounded",
    placeholder: "Enter your email",
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-gray-700"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    className: "w-full p-2 border rounded",
    placeholder: "Enter your password",
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
  }, "Sign Up")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-sm text-gray-600"
  }, "By signing up, you agree to our", " ", /*#__PURE__*/React.createElement(Link, {
    to: "#",
    className: "text-blue-500"
  }, "Terms and Conditions"), " ", "and", " ", /*#__PURE__*/React.createElement(Link, {
    to: "#",
    className: "text-blue-500"
  }, "Privacy Policy"), ".")), /*#__PURE__*/React.createElement("img", {
    src: "./images/signup-icon.png",
    alt: "Sign-up user",
    className: "object-cover w-1/2 h-auto"
  })));
};
export default Register;