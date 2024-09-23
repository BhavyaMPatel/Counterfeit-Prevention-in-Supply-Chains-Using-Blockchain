import React from "react";
import Manufacturer from "./Components/Manufacturer";
import Supplier from "./Components/Supplier";
import Customer from "./Components/Customer";

const App = () => {
  return (
    <div>
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"> */}
        <Manufacturer />
        <Supplier />
        <Customer />
      {/* </div> */}
    </div>
  );
};

export default App;
