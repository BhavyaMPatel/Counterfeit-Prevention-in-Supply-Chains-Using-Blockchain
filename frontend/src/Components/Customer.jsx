import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Customer = () => {
  const [productID, setProductID] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [contract, setContract] = useState(null);

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
      console.log("Fetching product details for ID:", productID);
      // Convert productID to string
      const details = await contract.getProduct(String(productID));
      console.log("Product details:", details);
      setProductDetails(details);
    } catch (error) {
      console.error("Error getting product details:", error);
      alert("Failed to get product details. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Verify Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productID}
        onChange={(e) => setProductID(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={getProductDetails}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Verify
      </button>

      {productDetails && (
        <div className="bg-gray-100 mt-4 p-4 rounded">
          <p><strong>Product Name:</strong> {productDetails[0]}</p>
          <p><strong>Product ID:</strong> {productDetails[1]}</p>
          <p><strong>Date of Manufacture:</strong> {productDetails[2]}</p>
          <p><strong>Current Location:</strong> {productDetails[3]}</p>
        </div>
      )}
    </div>
  );
};

export default Customer;
