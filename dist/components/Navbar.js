import React from 'react';
const Navbar = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center px-20 h-30 bg-slate-800"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/icon2.png",
    className: "h-[80px] w-[80px] mr-4",
    alt: "Favicon"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-6xl font-bold hover:text-white-800"
  }, " SANTH INSURANCE"), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto space-x-8"
  }, /*#__PURE__*/React.createElement("a", {
    className: "text-4xl text-gray-200 hover:text-cyan-800",
    href: "/Header"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    className: "text-4xl text-gray-200 hover:text-cyan-800",
    href: "/Admine"
  }, "Admin"), /*#__PURE__*/React.createElement("a", {
    className: "text-4xl text-gray-200 hover:text-cyan-800",
    href: "/About"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    className: "text-4xl text-gray-200 hover:text-cyan-800",
    href: "/Login"
  }, "Login")));
};
export default Navbar;