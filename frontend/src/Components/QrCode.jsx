import React, { useState } from "react";
import QRCode from "qrcode";

const QrCodePage = () => {
  const [productID, setProductID] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  // Generate QR Code
  const generateQRCode = () => {
    if (productID) {
      QRCode.toDataURL(productID, { width: 200, margin: 2 }, (err, url) => {
        if (err) {
          console.error("Failed to generate QR code:", err);
        } else {
          setQrCodeUrl(url);
        }
      });
    } else {
      alert("Please enter a valid Product ID");
    }
  };

  // Download QR Code
  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `Product-${productID}-QRCode.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">Generate QR Code</h2>
          <p className="text-gray-600">Enter the Product ID to generate and download its QR code.</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          onClick={generateQRCode}
          className="mt-6 w-full py-3 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600"
        >
          Generate QR Code
        </button>

        {qrCodeUrl && (
          <div className="text-left mt-4">
            <img src={qrCodeUrl} alt="QR Code" />
            <button
              onClick={downloadQRCode}
              className="mt-4 ml-4 py-2 px-4 bg-green-400 text-white rounded-md hover:bg-green-600"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodePage;
