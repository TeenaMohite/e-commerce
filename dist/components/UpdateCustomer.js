import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import CustomerService from "../Service/CustomerService";
const UpdateCustomer = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    id: id,
    name: " ",
    lastname: " ",
    username: " ",
    password: " "
  });
  const handleChange = e => {
    const value = e.target.value;
    setCustomer({
      ...customer,
      [e.target.name]: value
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerService.getCustomerById(customer.id);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const updateCustomer = e => {
    e.preventDefault();
    CustomerService.updateCustomer(customer, id).then(response => {
      console.log("Customer updated successfully", response);
      navigate("/");
    }).catch(error => {
      console.log(error);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl px-8 py-4 mx-40 my-20 rounded shadow bg-slate-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-8 py-4 text-4xl font-bold tracking-wider text-center"
  }, /*#__PURE__*/React.createElement("p", null, "Update \uD83E\uDDD1\uD83C\uDFFC Customer")), /*#__PURE__*/React.createElement("div", {
    className: "mx-10 my-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: customer.name,
    onChange: e => handleChange(e),
    className: "w-full py-2 my-4 text-slate-800",
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "lastname",
    value: customer.lastname,
    onChange: e => handleChange(e),
    className: "w-full py-2 my-4 text-slate-800",
    placeholder: "Lastname"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "username",
    value: customer.username,
    onChange: e => handleChange(e),
    className: "w-full py-2 my-4 text-slate-800",
    placeholder: "Username"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "password",
    value: customer.password,
    onChange: e => handleChange(e),
    className: "w-full py-2 my-4 text-slate-800",
    placeholder: "Password"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex px-20 my-4 space-x-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: updateCustomer,
    className: "px-6 py-2 bg-green-400 rounded hover:bg-green-700"
  }, " Update "), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate("/"),
    className: "px-6 py-2 bg-red-400 rounded hover:bg-red-700"
  }, "  Cancel ")));
};
export default UpdateCustomer;