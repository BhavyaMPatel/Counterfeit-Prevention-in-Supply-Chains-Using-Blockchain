pragma solidity ^0.8.0;

contract SupplyChain {
    
    struct Product {
        string name;
        string id;
        string manufactureDate;
        string location;
    }

    mapping(string => Product) public products;

    function addProduct(
        string memory _name,
        string memory _id,
        string memory _manufactureDate
    ) public {
        products[_id] = Product(_name, _id, _manufactureDate, "At Manufacturer");
    }

    function updateProductLocation(string memory _id, string memory _newLocation) public {
        Product storage product = products[_id];
        product.location = _newLocation;
    }

    function getProduct(string memory _id) public view returns (string memory, string memory, string memory, string memory) {
        Product memory product = products[_id];
        return (product.name, product.id, product.manufactureDate, product.location);
    }
}
