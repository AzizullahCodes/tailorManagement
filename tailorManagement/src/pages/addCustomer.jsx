// import { useState } from "react";
// import "./AddCustomer.css";

// function AddCustomer() {
//   const [gender, setGender] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

  // // Gents
  // const [neck, setNeck] = useState("");
  // const [shoulder, setShoulder] = useState("");
  // const [chest, setChest] = useState("");
  // const [waist, setWaist] = useState("");
  // const [hip, setHip] = useState("");
  // const [sleeve, setSleeve] = useState("");
  // const [shirtLength, setShirtLength] = useState("");

  // // Ladies
  // const [bust, setBust] = useState("");
  // const [armhole, setArmhole] = useState("");
  // const [dressLength, setDressLength] = useState("");

//   const saveRecord = () => {
//     if (!name || !phone || !gender) {
//       alert("Name, Phone, and Gender are required!");
//       return;
//     }

//     const customer = {
//       id: Date.now(),
//       gender,
//       name,
//       phone,
//       measurements: {},
//     };

//     if (gender === "gents") {
//       customer.measurements = { neck, shoulder, chest, waist, sleeve, shirtLength };
//     } else {
//       customer.measurements = { bust, shoulder, waist, armhole, sleeve, dressLength };
//     }

//     let customers = JSON.parse(localStorage.getItem("customers")) || [];
//     customers.push(customer);
//     localStorage.setItem("customers", JSON.stringify(customers));
//     alert("Record Saved ✅");

    // // Reset
    // setName(""); setPhone(""); setGender("");
    // setNeck(""); setShoulder(""); setChest(""); setWaist(""); setHip(""); setSleeve(""); setShirtLength("");
    // setBust(""); setArmhole(""); setDressLength("");
//   };

//   return (
//     <div className="add-container">
//       <div className="card">
//         <h2>✂ Tailor Customer Form</h2>

//         <div className="form-group">
//           <label>Gender</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="gents">Gents</option>
//             <option value="ladies">Ladies</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Customer Name</label>
//           <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input type="text" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </div>

        // {gender === "gents" && (
        //   <>
        //     <h3>Gents Measurements</h3>
        //     <div className="form-group"><label>Neck</label><input value={neck} onChange={e => setNeck(e.target.value)} /></div>
        //    <div className="form-group"><label>Chest</label><input value={chest} onChange={e => setChest(e.target.value)} /></div>
        //     < <div className="form-group"><label>Shoulder</label><input value={shoulder} onChange={e => setShoulder(e.target.value)} /></div>
        //     div className="form-group"><label>Waist</label><input value={waist} onChange={e => setWaist(e.target.value)} /></div>
        //     <div className="form-group"><label>Hip</label><input value={hip} onChange={e => setHip(e.target.value)} /></div>
        //     <div className="form-group"><label>Sleeve</label><input value={sleeve} onChange={e => setSleeve(e.target.value)} /></div>
        //     <div className="form-group"><label>Shirt Length</label><input value={shirtLength} onChange={e => setShirtLength(e.target.value)} /></div>
        //   </>
        // )}

        // {gender === "ladies" && (
        //   <>
        //     <h3>Ladies Measurements</h3>
        //     <div className="form-group"><label>Bust</label><input value={bust} onChange={e => setBust(e.target.value)} /></div>
        //     <div className="form-group"><label>Shoulder</label><input value={shoulder} onChange={e => setShoulder(e.target.value)} /></div>
        //     <div className="form-group"><label>Waist</label><input value={waist} onChange={e => setWaist(e.target.value)} /></div>
        //     <div className="form-group"><label>Hip</label><input value={hip} onChange={e => setHip(e.target.value)} /></div>
        //     <div className="form-group"><label>Armhole</label><input value={armhole} onChange={e => setArmhole(e.target.value)} /></div>
        //     <div className="form-group"><label>Sleeve</label><input value={sleeve} onChange={e => setSleeve(e.target.value)} /></div>
        //     <div className="form-group"><label>Dress Length</label><input value={dressLength} onChange={e => setDressLength(e.target.value)} /></div>
        //   </>
        // )}

//         <button className="save-btn" onClick={saveRecord}>💾 Save Record</button>
//       </div>
//     </div>
//   );
// }

// export default AddCustomer;


import { useEffect, useState } from "react";
import "./AddCustomer.css";
import { useNavigate } from "react-router-dom";


function AddCustomer(){
  const navigate = useNavigate();
  const [gender,setGender] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('')

    // Gents
  const [neck, setNeck] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [shirtLength, setShirtLength] = useState("");

  // Ladies
  const [bust, setBust] = useState("");
  const [armhole, setArmhole] = useState("");
  const [dressLength, setDressLength] = useState("");

  // saveRecord function
  const saveRecord = ()=>{
   if(!name || !gender || !phone){
    alert('name,phone and gender are required');
    return;
   }
   const customer = {
    id : phone,
    name,
    gender,
    measurement : {}
   }
   if(gender === 'gents'){
    customer.measurement = {neck,shoulder,chest,waist,sleeve,shirtLength}
   }
   else{customer.measurement = {shoulder,waist,sleeve,bust,armhole,dressLength}}

   // localstorage 
  let customers = JSON.parse(localStorage.getItem('customers'))|| [];
  customers.push(customer)
  localStorage.setItem('customers',JSON.stringify(customers));
  alert('record saved in localstorage');
      // Reset
    setName(""); setPhone(""); setGender("");
    setNeck(""); setShoulder(""); setChest(""); setWaist(""); setHip(""); setSleeve(""); setShirtLength("");
    setBust(""); setArmhole(""); setDressLength("");

  }
  
  return(
    <div className="add-container">
      <div className="card">
        <h2>✂ Tailor Customer Form</h2>

        <div className="form-group">
          <select name=""  id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value='' >Select Gender</option>
            <option value="gents">Gents</option>
            <option value="ladies">Ladies</option>
          </select>
        </div>
        {/* Customer Name */}
        <div className="form-group">
          <label htmlFor="">Customer Name</label>
          <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input type="phone" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>

        {
          gender === 'gents' && (
            <>
            <h3>Gents Measurements</h3>
             <div className="form-group"><label>Neck</label><input value={neck} onChange={e => setNeck(e.target.value)} /></div>
                 <div className="form-group"><label>Chest</label><input value={chest} onChange={e => setChest(e.target.value)} /></div>
             <div className="form-group"><label>Shoulder</label><input value={shoulder} onChange={e => setShoulder(e.target.value)} /></div>
             <div className="form-group"><label>Waist</label><input value={waist} onChange={e => setWaist(e.target.value)} /></div>
             <div className="form-group"><label>Sleeve</label><input value={sleeve} onChange={e => setSleeve(e.target.value)} /></div>
             <div className="form-group"><label>Shirt Length</label><input value={shirtLength} onChange={e => setShirtLength(e.target.value)} /></div>
            </>
          )
        }

         {gender === "ladies" && (
          <>
            <h3>Ladies Measurements</h3>
            <div className="form-group"><label>Bust</label><input value={bust} onChange={e => setBust(e.target.value)} /></div>
            <div className="form-group"><label>Shoulder</label><input value={shoulder} onChange={e => setShoulder(e.target.value)} /></div>
            <div className="form-group"><label>Waist</label><input value={waist} onChange={e => setWaist(e.target.value)} /></div>            <div className="form-group"><label>Armhole</label><input value={armhole} onChange={e => setArmhole(e.target.value)} /></div>
            <div className="form-group"><label>Sleeve</label><input value={sleeve} onChange={e => setSleeve(e.target.value)} /></div>
            <div className="form-group"><label>Dress Length</label><input value={dressLength} onChange={e => setDressLength(e.target.value)} /></div>
          </>
        )}
        <button className="save-btn" onClick={saveRecord}>💾 Save Record</button>
                <button className="save-btn" onClick={()=>navigate('/searchCustomer')}>💾 Save Record</button>

      </div>
    </div>

  )
}

export default AddCustomer