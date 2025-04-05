import React,{ useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import CustomerService from '../Service/CustomerService'

const CustomerList = () => {

  
  const [ loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
      try{
        const response = await CustomerService.getCustomers();
      setCustomers(response.data);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  };
  fetchData();
  }, []);

const deleteCustomer = (e, id) => {
  e.preventDefault();
  CustomerService.deleteCustomersById(id)
  .then(() => {
    if(customers){
      setCustomers((prevElement)=>{
        return prevElement.filter((customer) => customer.id !== id);
      })
    }
    })
  };

  const editCustomer = (e, id) => {
    e.preventDefault();
    navigate(`/editCustomer/${id}`);
  };

  
    const navigate = useNavigate();
    return (

    <div className="container mx-auto my-8">

    <div>
      <button 
      onClick={()=> navigate("/addCustomer")}
       className="px-20 py-3 text-3xl font-semibold rounded bg-slate-600 hover:bg-blue-700 my-14">
       Add Customer</button>
    </div>
    <div>
    <table className="bg-black shadow">
      <thead className="bg-slate-600">
          <th className="px-6 py-3 tracking-wide uppercase">Name</th>
          <th className="px-6 py-3 tracking-wide uppercase">lastname</th>
          <th className="px-6 py-3 tracking-wide uppercase">username</th>
          <th className="px-6 py-3 tracking-wide uppercase">password</th>
          <th className="px-6 py-3 tracking-wide uppercase">Action</th>
          <th className="px-6 py-3 tracking-wide uppercase">Plan Name</th>
          <th className="px-6 py-3 tracking-wide uppercase">Expire-Date</th>
          <th className="px-6 py-3 tracking-wide uppercase">Running-Date</th>
      </thead>
      {!loading &&(
      <tbody>
        {customers.map((customer) => (
        <tr key={customer.id} className="hover:bg-white hover:text-black" >
        <td className="px-6 py-4 text-left whiterspace-nowrap">{customer.name}</td>
        <td className="px-6 py-4 text-left whiterspace-nowrap">{customer.lastname}</td>
        <td className="px-6 py-4 text-left whiterspace-nowrap">{customer.username}</td>
        <td className="px-6 py-4 text-left whiterspace-nowrap">{customer.password}</td>
        <td className="px-6 py-4 text-left whiterspace-nowrap">
          <button 
          onClick={(e) => editCustomer(e, customer.id)}
          className='hover:text-green-500 hover:cursor-pointer bg-transparent border-none p-0'>Edit</button>
          
          <button
          onClick={(e) => deleteCustomer(e, customer.id)}
          className='hover:text-red-500 hover:cursor-pointer bg-transparent border-none p-0'>Delete</button>
        </td>
        </tr>
        ))}
        </tbody>
        )}
      </table>  
    </div>
    </div>
  )
}

export default CustomerList