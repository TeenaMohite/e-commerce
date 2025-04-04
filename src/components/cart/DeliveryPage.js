import { Link } from "react-router-dom";

const DeliveryPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Delivery Details</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Address" className="w-full p-2 border" />
        <input type="text" placeholder="City" className="w-full p-2 border" />
        <input type="text" placeholder="Zip Code" className="w-full p-2 border" />
        <Link to="/otp" className="px-4 py-2 text-white bg-blue-500">
          Continue to OTP
        </Link>
      </form>
    </div>
  );
};

export default DeliveryPage;
