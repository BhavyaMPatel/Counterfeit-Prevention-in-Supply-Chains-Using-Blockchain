import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Supplier = () => {
  const [productID, setProductID] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [contract, setContract] = useState(null);

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
      // Convert both values to string
      const tx = await contract.updateProductLocation(
        String(productID), 
        String(newLocation)
      );
      await tx.wait();

      alert("Product location updated!");
    } catch (error) {
      console.error("Error updating product location:", error);
      alert("Failed to update product location. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Product Location</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productID}
        onChange={(e) => setProductID(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="New Location"
        value={newLocation}
        onChange={(e) => setNewLocation(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={updateLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Location
      </button>
    </div>
  );
};

export default Supplier;
