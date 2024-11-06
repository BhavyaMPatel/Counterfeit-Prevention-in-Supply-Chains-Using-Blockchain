pragma solidity ^0.8.0;

contract SupplyChain {
    
    struct Product {
        string name;
        string id;
        string manufactureDate;
        string[] locations;
    }

    mapping(string => Product) public products;
    mapping(string => bool) public productExists;

    // Event for location updates
    event LocationUpdated(string indexed productId, string newLocation);

    // Add a new product to the blockchain
    function addProduct(
        string memory _name,
        string memory _id,
        string memory _manufactureDate
    ) public {
        require(!productExists[_id], "Product already exists"); // Check if the product already exists

        Product storage newProduct = products[_id];
        newProduct.name = _name;
        newProduct.id = _id;
        newProduct.manufactureDate = _manufactureDate;
        newProduct.locations.push("At Manufacturer");

        productExists[_id] = true; // Mark product as added
    }

    // Update the location of an existing product
    function updateProductLocation(string memory _id, string memory _newLocation) public {
        require(productExists[_id], "Product does not exist"); // Check if the product exists

        Product storage product = products[_id];
        product.locations.push(_newLocation); // Append the new location to the locations array

        emit LocationUpdated(_id, _newLocation); // Emit event for the location update
    }

    // Get product details including all location history
    function getProduct(string memory _id) public view returns (
        string memory, 
        string memory, 
        string memory, 
        string[] memory
    ) {
        require(productExists[_id], "Product does not exist"); // Ensure the product exists

        Product memory product = products[_id];
        return (product.name, product.id, product.manufactureDate, product.locations);
    }
}
