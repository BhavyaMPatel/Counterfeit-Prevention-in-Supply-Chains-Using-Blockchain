import React, { useState, useEffect } from "react";
import { loadBlockchainData } from "../web3"; // Import ethers.js setup

const Manufacturer = () => {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [dateOfManufacture, setDateOfManufacture] = useState("");
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const tx = await contract.addProduct(
        String(productName),
        String(productID),
        String(dateOfManufacture)
      );
      await tx.wait();

      alert("Product added to blockchain!");
      setProductName("");
      setProductID("");
      setDateOfManufacture("");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        {/* Introduction Section */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Manufacturer Dashboard
          </h2>
          <p className="text-gray-600">
            Add your products to the blockchain for secure and verifiable tracking.
            Ensure transparency and authenticity by leveraging decentralized technology.
          </p>
        </div>

        {/* Step-by-Step Instruction */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner text-blue-700">
          <h3 className="font-bold mb-2">How to Add a Product:</h3>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Enter the product name that you want to register on the blockchain.</li>
            <li>Provide the unique product ID.</li>
            <li>Select the manufacturing date.</li>
            <li>Click "Add Product" to finalize the transaction.</li>
          </ol>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="date"
            value={dateOfManufacture}
            onChange={(e) => setDateOfManufacture(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={addProduct}
          className={`mt-6 w-full py-3 rounded-md text-white font-semibold ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default Manufacturer;
