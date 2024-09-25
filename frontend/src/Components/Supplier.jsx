import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Supplier = () => {
  const [productID, setProductID] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initBlockchain = async () => {
      const supplyChainContract = await loadBlockchainData();
      setContract(supplyChainContract);
    };
    initBlockchain();
  }, []);

  const updateLocation = async () => {
    if (!contract) {
      alert("Contract not loaded");
      return;
    }

    try {
      setLoading(true);
      // Convert both values to string
      const tx = await contract.updateProductLocation(
        String(productID),
        String(newLocation)
      );
      await tx.wait();

      alert("Product location updated!");
      setProductID("");
      setNewLocation("");
    } catch (error) {
      console.error("Error updating product location:", error);
      alert("Failed to update product location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        {/* Introduction Section */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Supplier Dashboard
          </h2>
          <p className="text-gray-600">
            Manage and update the location of your products as they move through
            the supply chain. Ensure accurate tracking with every update.
          </p>
        </div>

        {/* Step-by-Step Instruction */}
        <div className="bg-green-50 p-4 rounded-lg shadow-inner text-green-700">
          <h3 className="font-bold mb-2">How to Update Product Location:</h3>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Enter the product's unique ID.</li>
            <li>Provide the new location details.</li>
            <li>Click "Update Location" to save the changes on the blockchain.</li>
          </ol>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="New Location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={updateLocation}
          className={`mt-6 w-full py-3 rounded-md text-white font-semibold ${
            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Updating Location..." : "Update Location"}
        </button>
      </div>
    </div>
  );
};

export default Supplier;
