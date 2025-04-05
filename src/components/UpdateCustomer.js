import React,{ useState , useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import CustomerService from "../Service/CustomerService";

const UpdateCustomer = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        id: id,
        name: " ",
        lastname: " ",
        username: " ",
        password: " ",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setCustomer({ ...customer, [e.target.name]: value });
    }

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await CustomerService.getCustomerById(customer.id);
                setCustomer(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, [customer.id]);

    const updateCustomer = (e) => {
        e.preventDefault();
        CustomerService.updateCustomer(customer,id)
        .then((response) => {
            console.log("Customer updated successfully", response);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(

        <div className='max-w-xl px-8 py-4 mx-40 my-20 rounded shadow bg-slate-800'>
        <div className='px-8 py-4 text-4xl font-bold tracking-wider text-center'>
             <p>Update 🧑🏼 Customer</p>
        </div>

        <div className='mx-10 my-2'>
            <input 
            type='text'
            name="name"
            value={customer.name}
            onChange={(e)=> handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Name'></input>
           
            <input
            type='text'
            name='lastname'
            value={customer.lastname}
            onChange={(e)=> handleChange(e)}
             className="w-full py-2 my-4 text-slate-800" placeholder='Lastname'></input>
            
            <input 
            type='text'
            name='username'
            value={customer.username}
            onChange={(e)=> handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Username'></input>


        <input 
        type="text"
        name='password'
        value={customer.password}
        onChange={(e)=> handleChange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder='Password' ></input>

</div>
        <div className='flex px-20 my-4 space-x-4'>
            <button
             onClick={updateCustomer}
            className='px-6 py-2 bg-green-400 rounded hover:bg-green-700'> Update </button>
           <button 
              onClick={()=> navigate("/")}
              className='px-6 py-2 bg-red-400 rounded hover:bg-red-700'>  Cancel </button>
        </div>
    </div>
  )
}

export default UpdateCustomer;