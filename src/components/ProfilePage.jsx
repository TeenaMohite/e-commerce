import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUserId = localStorage.getItem("loggedInUserId");

      if (loggedInUserId && users.length > 0) {
        const currentUser = users.find(
          (u) => String(u.id) === String(loggedInUserId)
        );
        if (currentUser) {
          setUser(currentUser);
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserId");
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="p-6 text-xl text-center text-gray-600">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">
          Welcome, {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-700">📧 Email: {user.email}</p>
        <p className="text-gray-700">📱 Phone: {user.phone}</p>
        <button
          onClick={handleLogout}
          className="mt-4 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Section title="Wishlist" items={user.wishlist || []} />
        <Section title="Cart" items={user.cart || []} />
        <Section title="Orders" items={user.orders || []} />
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div className="bg-white border rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {items.length > 0 ? (
      <ul className="list-disc pl-4 space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-800">{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500 italic">No items in {title.toLowerCase()}.</p>
    )}
  </div>
);

export default ProfilePage;
