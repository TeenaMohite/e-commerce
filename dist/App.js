import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import CustomerList from './components/CustomerList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admine from './components/Admine';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
//import Home from './components/Home';

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(SignIn, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/SignIn",
    element: /*#__PURE__*/React.createElement(SignIn, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Header, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Header",
    element: /*#__PURE__*/React.createElement(Header, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Admine",
    element: /*#__PURE__*/React.createElement(Admine, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
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
  })), /*#__PURE__*/React.createElement(Footer, null)));
}
export default App;