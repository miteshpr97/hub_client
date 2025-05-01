import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const user = {
    address: [
      {
        street: "123 Main St",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110001",
        country: "India"
      },
      {
        street: "456 Park Ave",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400001",
        country: "India"
      }
    ]
  };

  const [selectedAddress, setSelectedAddress] = useState(user.address[0]);
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState(5);

  const totalAmount = cartItems.reduce((acc, curr) => {
    const numericPrice = parseFloat(curr.price.replace(/[^0-9.]/g, ""));
    return acc + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);
  

  console.log("Cart Prices:", cartItems.map(item => item.price));
  console.log("Total Amount:", totalAmount);
  

  const isOutOfStock = cartItems.some(item => item.stock === 0);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleAddressChange = (e) => {
    const selected = user.address.find(addr =>
      `${addr.street}, ${addr.city}, ${addr.state}, ${addr.postalCode}, ${addr.country}` === e.target.value
    );
    setSelectedAddress(selected);
  };

  const orderPlace = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Order placed successfully!\n\nShipping to:\n${selectedAddress.street}, ${selectedAddress.city}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((cart) => (
                  <div key={cart._id} className="flex items-center justify-between p-4 bg-white shadow rounded">
                    <div className="flex items-center gap-4">
                      <img
                        src={cart.image}
                        alt={cart.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="w-[300px]">
                        <h3 className="font-semibold text-lg">{cart.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{cart.description}</p>
                      </div>
                    </div>
                    <p className="font-bold text-lg">₹{cart.price}</p>
                    {cart.stock === 0 && (
                      <span className="text-red-600 ml-4">Out of Stock</span>
                    )}
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleRemove(cart.id)}
                    >
                      ✕ Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-6">
                Your cart is empty!<br />
                Explore our wide selection and find something you like.
              </p>
            )}
            <Link to="/" className="text-blue-600 hover:underline mt-6 block">
              ← Back to shop
            </Link>
          </div>

          {/* Summary Section */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Items:</p>
                <p>{cartItems.length}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal:</p>
                <p>₹{totalAmount.toFixed(2)}</p>
              </div>

              {/* Address Selection */}
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
                  Select Address
                </label>
                <select
                  id="address"
                  className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleAddressChange}
                >
                  {user.address.map((addr, index) => (
                    <option
                      key={index}
                      value={`${addr.street}, ${addr.city}, ${addr.state}, ${addr.postalCode}, ${addr.country}`}
                    >
                      {`${addr.street}, ${addr.city}, ${addr.state}, ${addr.postalCode}, ${addr.country}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Shipping Options */}
              <div>
                <label htmlFor="shipping" className="block text-gray-600 mb-2">
                  Shipping:
                </label>
                <select
                  id="shipping"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setShipping(Number(e.target.value))}
                  value={shipping}
                >
                  <option value="5">Standard Delivery - ₹5.00</option>
                  <option value="10">Express Delivery - ₹10.00</option>
                </select>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <p>Total:</p>
                <p>₹{(totalAmount + shipping).toFixed(2)}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold ${
                  isOutOfStock
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => {
                  if (isOutOfStock) {
                    alert("Please remove out-of-stock items before proceeding to checkout.");
                  } else {
                    orderPlace();
                  }
                }}
                disabled={isOutOfStock}
              >
                {loading ? "Loading..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
