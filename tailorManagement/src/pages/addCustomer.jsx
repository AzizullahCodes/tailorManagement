import { useState } from "react";
import "./AddCustomer.css";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    phone: "",
    name: "",
    dressType: "",
    chest: "",
    waist: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let customers = JSON.parse(localStorage.getItem("customers")) || [];

    const exists = customers.find(c => c.phone === customer.phone);

    if(exists){
      alert("Customer already exists!");
      return;
    }

    customers.push(customer);
    localStorage.setItem("customers", JSON.stringify(customers));

    alert("Customer Added!");
  };

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit} className="add-form">
        <h2>Add Customer</h2>

        <input placeholder="Phone (ID)"
          onChange={(e)=>setCustomer({...customer,phone:e.target.value})}
        />
        <input placeholder="Name"
          onChange={(e)=>setCustomer({...customer,name:e.target.value})}
        />
        <input placeholder="Dress Type"
          onChange={(e)=>setCustomer({...customer,dressType:e.target.value})}
        />
        <input placeholder="Chest"
          onChange={(e)=>setCustomer({...customer,chest:e.target.value})}
        />
        <input placeholder="Waist"
          onChange={(e)=>setCustomer({...customer,waist:e.target.value})}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddCustomer;
