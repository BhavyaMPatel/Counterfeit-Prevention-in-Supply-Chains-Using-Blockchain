import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Customer = () => {
  const [productID, setProductID] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initBlockchain = async () => {
      const supplyChainContract = await loadBlockchainData();
      setContract(supplyChainContract);
    };

    initBlockchain();
  }, []);

  const getProductDetails = async () => {
    if (!contract) {
      alert("Contract not loaded");
      return;
    }

    try {
      setLoading(true);
      console.log("Fetching product details for ID:", productID);
      // Convert productID to string
      const details = await contract.getProduct(String(productID));
      console.log("Product details:", details);
      setProductDetails(details);
    } catch (error) {
      console.error("Error getting product details:", error);
      alert("Failed to get product details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        {/* Introduction Section */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">Verify Product</h2>
          <p className="text-gray-600">
            Ensure the authenticity of your product by verifying its details on the blockchain.
          </p>
        </div>

        {/* Step-by-Step Instruction */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner text-blue-700">
          <h3 className="font-bold mb-2">How to Verify a Product:</h3>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Enter the product's unique ID in the input box below.</li>
            <li>Click "Verify" to fetch product details from the blockchain.</li>
            <li>Review the product information to verify its authenticity.</li>
          </ol>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={getProductDetails}
          className={`mt-6 w-full py-3 rounded-md text-white font-semibold ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Fetching Details..." : "Verify"}
        </button>

        {/* Product Details Section */}
        {productDetails && (
          <div className="bg-gray-100 mt-6 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Product Details:</h3>
            <p><strong>Product Name:</strong> {productDetails[0]}</p>
            <p><strong>Product ID:</strong> {productDetails[1]}</p>
            <p><strong>Date of Manufacture:</strong> {productDetails[2]}</p>
            <p><strong>Current Location:</strong> {productDetails[3]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
