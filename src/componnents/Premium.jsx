import React, {  useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const fullName = user?.name || "";
  const [firstName = "", lastName = ""] = fullName.split(" ");
  const [isUserPremium, setIsUserPremium] = useState(false);
  useEffect(() => {
    verifyPremiumUser();
  }, []);
  

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

  // /payment/webhook

  const handleBuyClick = async (membershipType) => {
    try {
      const orderDetails = {
        firstName,
        lastName,
        emailId: user.email,
        userId: user._id,
        membershipType,
      };

      console.log(orderDetails);

      const order = await axios.post(
        BASE_URL + "/payment/create",
        orderDetails
      );

      const { amount, keyId, currency, notes, orderId } = order.data;

      const options = {
        key: keyId,
        amount,
        currency,
        name: "Hack-hub",
        description: "Connect to other developers",
        order_id: orderId,
        prefill: {
          name: notes.firstName + " " + notes.lastName,
          email: notes.emailId,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        handler: verifyPremiumUser,
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment request failed:", error);
      console.error("Details:", error.response?.data || error.message || error);
      alert("Something went wrong. Please try again later.");
    }
  };

  if (!user || !user.name)
    return <div>Please login to view membership options.</div>;

  return isUserPremium ? (
    "You're are already a premium user"
  ) : (
    <div className="m-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Silver Membership Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:max-w-md transition-transform transform hover:scale-105 duration-300">
          <h1 className="font-bold text-3xl text-center mb-4 text-gray-800">
            Silver Membership
          </h1>
          <ul className="text-gray-700 text-left list-disc pl-6 space-y-1 mb-6">
            <li>Chat with other people</li>
            <li>100 connection requests per day</li>
            <li>Blue Tick</li>
            <li>3 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("Silver")}
            className="btn btn-secondary w-full cursor-pointer"
            aria-label="Buy Silver Membership"
          >
            Buy Silver
          </button>
        </div>

        {/* OR Divider */}
        <div className="hidden md:block text-xl font-bold text-gray-500">
          OR
        </div>

        {/* Gold Membership Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:max-w-md transition-transform transform hover:scale-105 duration-300">
          <h1 className="font-bold text-3xl text-center mb-4 text-yellow-700">
            Gold Membership
          </h1>
          <ul className="text-gray-700 text-left list-disc pl-6 space-y-1 mb-6">
            <li>Chat with other people</li>
            <li>Unlimited connection requests per day</li>
            <li>Blue Tick</li>
            <li>6 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("Gold")}
            className="btn btn-primary w-full cursor-pointer"
            aria-label="Buy Gold Membership"
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  )


};

export default Premium;
