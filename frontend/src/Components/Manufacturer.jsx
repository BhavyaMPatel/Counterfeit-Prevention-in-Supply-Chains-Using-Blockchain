import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Manufacturer = () => {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [dateOfManufacture, setDateOfManufacture] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initBlockchain = async () => {
      const supplyChainContract = await loadBlockchainData();
      setContract(supplyChainContract);
    };

    initBlockchain();
  }, []);

  const addProduct = async () => {
    if (!contract) {
      alert("Contract not loaded");
      return;
    }

    try {
      // Convert everything to string
      const tx = await contract.addProduct(
        String(productName),
        String(productID),
        String(dateOfManufacture), 
      );
      await tx.wait();

      alert("Product added to blockchain!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Product ID"
        value={productID}
        onChange={(e) => setProductID(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        value={dateOfManufacture}
        onChange={(e) => setDateOfManufacture(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={addProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </div>
  );
};

export default Manufacturer;
