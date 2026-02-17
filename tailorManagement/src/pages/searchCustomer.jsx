import { useState } from "react";
import "./SearchCustomer.css";

function SearchCustomer() {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState(null);

  const search = () => {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const found = customers.find(c => c.phone === phone);

    if(found){
      setResult(found);
    } else {
      alert("Customer Not Found");
    }
  };

  return (
    <div className="search-container">
      <h2>Search Customer</h2>

      <input placeholder="Enter Phone"
        onChange={(e)=>setPhone(e.target.value)}
      />
      <button onClick={search}>Search</button>

      {result && (
        <div className="result-box">
          <p>Name: {result.name}</p>
          <p>Dress: {result.dressType}</p>
          <p>Chest: {result.chest}</p>
          <p>Waist: {result.waist}</p>
        </div>
      )}
    </div>
  );
}

export default SearchCustomer;
