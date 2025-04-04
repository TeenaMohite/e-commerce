import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer';
import UpdateCustomer from './UpdateCustomer';
import CustomerList from './CustomerList';
function Admine() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(CustomerList, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/customerList",
    element: /*#__PURE__*/React.createElement(CustomerList, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/addCustomer",
    element: /*#__PURE__*/React.createElement(AddCustomer, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/editCustomer/:id",
    element: /*#__PURE__*/React.createElement(UpdateCustomer, null)
  })));
}
export default Admine;