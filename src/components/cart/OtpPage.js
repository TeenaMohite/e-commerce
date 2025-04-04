import { Link } from "react-router-dom";

const OtpPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Enter OTP</h2>
      <input type="text" placeholder="Enter OTP" className="w-full p-2 border" />
      <Link to="/payment" className="inline-block px-4 py-2 mt-4 text-white bg-blue-500">
        Proceed to Payment
      </Link>
    </div>
  );
};

export default OtpPage;
