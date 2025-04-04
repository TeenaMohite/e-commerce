import axios from 'axios';
const CUSTOMER_SERVICE_URL = "http://localhost:9090/customers";
class CustomerService {
  SaveCustomer(customer) {
    return axios.post(CUSTOMER_SERVICE_URL, customer);
  }
  getCustomers() {
    return axios.get(CUSTOMER_SERVICE_URL);
  }
  getCustomerById(id) {
    return axios.get(CUSTOMER_SERVICE_URL + "/" + id);
  }
  deleteCustomersById(id) {
    return axios.delete(CUSTOMER_SERVICE_URL + "/" + id);
  }
  updateCustomer(customer, id) {
    return axios.put(CUSTOMER_SERVICE_URL + "/" + id, customer);
  }
}
export default new CustomerService();