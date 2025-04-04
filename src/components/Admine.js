import React from 'react'

import {  Routes, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer';
import UpdateCustomer from './UpdateCustomer';
import CustomerList from './CustomerList';

function Admine() {
  return (
  
    <>
 
    <Routes> 
    <Route index element={<CustomerList/>} />
    <Route path="/customerList" element={<CustomerList/>} />
    <Route path="/addCustomer" element={<AddCustomer/>} />
    <Route path="/editCustomer/:id" element={<UpdateCustomer/>} />
    </Routes>
 
    </>
  );
}

export default Admine;