import { Link } from "react-router-dom";

const SummaryPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      <p>Items: 2</p>
      <p>Total Price: $250</p>
      <Link to="/congrats" className="inline-block px-4 py-2 mt-4 text-white bg-green-500">
        Place Order
      </Link>
    </div>
  );
};

export default SummaryPage;
