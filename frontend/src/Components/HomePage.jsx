import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center py-16">
            <h1 className="text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Revolutionizing Supply Chain with Blockchain
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Discover the power of decentralized supply chain management. Track, verify, and manage your products securely and transparently with blockchain technology.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/manufacturer"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Key Roles
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it Works
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Manufacturer Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Manufacturer
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Manufacturers create and add products to the blockchain, ensuring authenticity and transparency in the supply chain.
              </p>
              <div className="mt-4">
                <Link
                  to="/manufacturer"
                  className="text-blue-600 hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Customer Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Customer
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Customers can verify the authenticity of their products by scanning QR codes and checking records on the blockchain.
              </p>
              <div className="mt-4">
                <Link to="/customer" className="text-blue-600 hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Supplier Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Supplier
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Suppliers manage the logistics and transfer of products, ensuring they maintain integrity from the manufacturer to the end customer.
              </p>
              <div className="mt-4">
                <Link to="/supplier" className="text-blue-600 hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
