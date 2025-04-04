import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../Service/CustomerService'
const AddCustomer = () => {
    const [customer, setCustomer] = useState({
       id: "",
        name: " ",
        lastname: " ",
        username: " ",
        password: " ",
    });
const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({...customer, [e.target.name]: value})
}



const saveCustomer = (e) => {
    e.preventDefault();

    CustomerService.SaveCustomer(customer)
    .then((response)=> {
        console.log("Saved",response);
        navigator("/customerList");
    })
    .catch((error) => {
        console.log(error);
    })
}


const reset = (e) => {
e.preventDefault(); 
setCustomer({
    id: "",
    name: " ",
    lastname: " ",
    username: " ",
    password: " ",
});
}


    const navigator = useNavigate();
  return (
    <div className='max-w-xl px-5 py-4 mx-10 my-10 rounded shadow bg-slate-800'>
        <div className='px-5 py-4 text-4xl tracking-wider text-center font-bould'>
            <p>Add Customer</p>
            </div>

            <div className='mx-5 my-2'>
        <input
         name='name' 
         value={customer.name}
         onChange={(e) => handleChange(e)}
         className='w-full py-2 my-4 text-slate-800' placeholder="Name" type='text'/>
        
        <input
        onChange={(e) => handleChange(e)}
        name='lastname' 
        value={customer.lastname}
        className='w-full py-2 my-4 text-slate-800'  placeholder="Lastname" type='text' />
        
        <input
         onChange={(e) => handleChange(e)}
         name='username' 
         value={customer.username}
         className='w-full py-2 my-4 text-slate-800' placeholder='Username' type='text' />
        
        <input
        onChange={(e) => handleChange(e)}
         name='password'
        value={customer.password}
          className="w-full py-2 my-4 text-slate-800" placeholder='Password' type='text'>
            </input>
        </div>

        <div className= 'flex px-20 my-5 space-x-8'>

        <button 
        onClick={saveCustomer}
        className='px-6 py-2 bg-green-400 rounded hover:bg-green-700'>Save</button>
        <button 
         onClick={reset}
        className='px-6 py-2 bg-blue-400 rounded hover:bg-blue-700'>clear</button>
        <button 
         onClick={()=> navigator("/")}
        className='px-6 py-2 bg-red-400 rounded hover:bg-red-700'>Cancel</button>
</div >
        
        </div>
  )
}

export default AddCustomer;