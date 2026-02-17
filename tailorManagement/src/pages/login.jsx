// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";

import { useState } from "react"
import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const stored = JSON.parse(localStorage.getItem("tailor"));

//     if(stored?.email === form.email && stored?.password === form.password){
//       localStorage.setItem("isLoggedIn", true);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Login</h2>

//         <input type="email" placeholder="Email"
//           onChange={(e)=>setForm({...form,email:e.target.value})}
//         />

//         <input type="password" placeholder="Password"
//           onChange={(e)=>setForm({...form,password:e.target.value})}
//         />

//         <button>Login</button>
//         <p>No account? <Link to="/signup">Signup</Link></p>
//       </form>
//     </div>
//   );
// }

// export default Login;


const Login = ()=>{
  const [form,setForm] = useState({email: '',password : ''});
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form.email);
    console.log(form.password);
    let getData = localStorage.getItem('customer');
    if(getData){
      console.log(getData);
      let parseData = JSON.parse(getData);
      console.log(parseData);
      console.log(parseData.email);
      console.log(parseData.password)
      console.log('get email ',form.email);
      console.log('get password ',form.password)
      if(form.email == parseData.email && form.password == parseData.password){
        console.log('welcome')
      }
      else{
        console.log('invalid')
      }
      
    }

  }
  
  return(
    <form action="" onSubmit={handleSubmit}>
      <input type="email" placeholder="email" 
      onChange={(event)=>setForm({...form,email: event.target.value})}/><br/>
      <input type="password" placeholder="password"  onChange={(event)=> setForm({...form,password: event.target.value})}/>
      <button>login</button>
      <p>Do you have an account</p><button onClick={()=>navigate('/signup')}>sign up</button>
    </form>
  )

}
export default Login;