import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerService from '../Service/CustomerService';
const CustomerList = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomers();
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const deleteCustomer = (e, id) => {
    e.preventDefault();
    CustomerService.deleteCustomersById(id).then(() => {
      if (customers) {
        setCustomers(prevElement => {
          return prevElement.filter(customer => customer.id !== id);
        });
      }
    });
  };
  const editCustomer = (e, id) => {
    e.preventDefault();
    navigate(`/editCustomer/${id}`);
  };
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto my-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate("/addCustomer"),
    className: "px-20 py-3 text-3xl font-semibold rounded bg-slate-600 hover:bg-blue-700 my-14"
  }, "Add Customer")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "bg-black shadow"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-600"
  }, /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "lastname"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "username"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "password"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "Action"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "Plan Name"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "Expire-Date"), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 tracking-wide uppercase"
  }, "Running-Date")), !loading && /*#__PURE__*/React.createElement("tbody", null, customers.map(customer => /*#__PURE__*/React.createElement("tr", {
    key: customer.id,
    className: "hover:bg-white hover:text-black"
  }, /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-left whiterspace-nowrap"
  }, customer.name), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-left whiterspace-nowrap"
  }, customer.lastname), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-left whiterspace-nowrap"
  }, customer.username), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-left whiterspace-nowrap"
  }, customer.password), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-left whiterspace-nowrap"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: (e, id) => editCustomer(e, customer.id),
    className: "hover:text-green-500 hover:cursor-pointer"
  }, "Edit    "), /*#__PURE__*/React.createElement("a", {
    onClick: (e, id) => deleteCustomer(e, customer.id),
    className: "hover:text-red-500 hover:cursor-pointer"
  }, "Delete"))))))));
};
export default CustomerList;