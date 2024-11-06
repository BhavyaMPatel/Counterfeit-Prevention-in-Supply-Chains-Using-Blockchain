import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
          <Link to="/" ><h1 className="text-2xl font-bold text-gray-800">Supply Chain</h1></Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/manufacturer"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Manufacturer
            </Link>
            <Link
              to="/supplier"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Supplier
            </Link>
            <Link
              to="/customer"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Customer
            </Link>
          
          <Link to="/qrcode" className="text-gray-600 hover:text-blue-500 transition duration-300">QR Code Generator</Link>
        

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/manufacturer"
            className="block text-gray-600 hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Manufacturer
          </Link>
         
          <Link
            to="/supplier"
            className="block text-gray-600 hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Supplier
          </Link>
        
          <Link
            to="/customer"
            className="block text-gray-600 hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Customer
          </Link>

          <Link to="/qrcode" className="block text-gray-600 hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">QR Code Generator</Link>
        


        </div>
      </div>
    </nav>
  );
}
