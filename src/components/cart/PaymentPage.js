import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Payment Details</h2>
      <input type="text" placeholder="Card Number" className="w-full p-2 border" />
      <input type="text" placeholder="Expiry Date" className="w-full p-2 border" />
      <Link to="/summary" className="inline-block px-4 py-2 mt-4 text-white bg-green-500">
        Review Order
      </Link>
    </div>
  );
};

export default PaymentPage;
