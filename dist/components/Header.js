import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
const products = [{
  id: 1,
  image: "./images/affortable.png",
  name: "Affordable Plans"
}, {
  id: 2,
  image: "./images/family.png",
  name: "Family Insurance Plans"
}, {
  id: 3,
  image: "./images/early.png",
  name: "Early Insurance Plans"
}, {
  id: 4,
  image: "./images/total.png",
  name: "Total Courage"
}, {
  id: 5,
  image: "./images/premium.png",
  name: "Premium Plans"
}, {
  id: 6,
  image: "./images/international.png",
  name: "International Plans"
}, {
  id: 7,
  image: "./images/old-age.png",
  name: "Old Age Plans"
}, {
  id: 8,
  image: "./images/life-insurance.png",
  name: "Life Saver Plane"
}];
const facilitiesData = [{
  img: "/images/facilities1.jpeg",
  title: "Quality Plans",
  description: "A reputable insurance should offer a wide range of high-quality Service..."
}, {
  img: "/images/facilities2.png",
  title: "Trained and Knowledgeable Staff",
  description: "A good insurance should have a team of trained and knowledgeable staff 24/7..."
}, {
  img: "/images/facilities3.png",
  title: "Convenient Services",
  description: "24/7* Service, Online Serive, One Call Service..."
}, {
  img: "/images/image.png ",
  title: "Hospitalization Expenses",
  description: "Just like every other health insurance plan, we also cover your hospitalization expenses such as room rent, ICU, investigations, surgery, doctor consultations etc due to illnesses and injuries seamlessly."
}, {
  img: "/images/pre-post.png ",
  title: "Pre & Post Hospitalisation",
  description: "It means all your pre hospitalization expenses up to 60 days before the date of admission and post-hospitalization expenses up to 180 days after discharge from the hospital are covered."
}, {
  img: "/images/recovery.png ",
  title: "Recovery Benefit",
  description: "If you stay in a hospital for more than 10 days at a stretch, then we pay for other financial losses. It helps to take care of other expenses during your hospitalization."
}];
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "py-10 text-center bg-gray-100 contact-section"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold text-slate-700"
  }, "Contact US"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "p-10 mx-auto bg-white rounded-lg shadow-lg max-w-fit"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Your name",
    className: "w-full p-3 mb-3 border rounded",
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Your email",
    className: "w-full p-3 mb-3 border rounded",
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "phone",
    placeholder: "Your phone",
    className: "w-full p-3 mb-3 border rounded",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    placeholder: "Your message",
    className: "w-full h-32 p-3 mb-3 border rounded",
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
  }, "Send")));
};
function Header() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "py-6 text-center main-logo"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold text-gray-700"
  }, "WELCOME TO SANTH INSURANCE"), /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold text-red-400"
  }, "Affordable Plans for Every Family's Needs! Get health insurance starting at just \u20B927/day*")), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "my-4 text-5xl font-bold text-center"
  }, "INSURANCE PLANS"), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-wrap justify-center gap-6"
  }, products.map(product => /*#__PURE__*/React.createElement("li", {
    key: product.id,
    className: "p-6 text-center border rounded-lg shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-box"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    className: "object-cover w-40 h-40 mx-auto"
  })), /*#__PURE__*/React.createElement("span", {
    className: "block mt-2 text-lg text-5xl font-semibold"
  }, product.name))))), /*#__PURE__*/React.createElement("section", {
    className: "py-10 text-center bg-gray-100 facilities"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-6 text-5xl font-bold text-slate-700"
  }, "Our Facilities"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-10"
  }, facilitiesData.map((facility, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "max-w-md p-6 bg-white rounded-lg shadow-lg"
  }, /*#__PURE__*/React.createElement("img", {
    src: facility.img,
    alt: facility.title,
    className: "object-cover w-full h-48 rounded-md"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 mb-4 text-xl font-semibold text-slate-600"
  }, facility.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-gray-600"
  }, facility.description))))), /*#__PURE__*/React.createElement(ContactUs, null));
}
export default Header;