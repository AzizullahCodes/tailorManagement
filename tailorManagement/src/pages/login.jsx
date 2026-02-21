// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";


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

import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  // const [form,setForm] = useState({email: '',password : ''});
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
   try{
    if(!email) throw 'Email is required'
    if(!password) throw 'Password is required'
    let getData = JSON.parse(localStorage.getItem('users'))||[];
    if(getData.length === 0) {
      alert('No user found plz signup again')
      navigate('/signup')
      return
    }
   
    // find user with matching email
    let foundUser = getData.find((user)=>{return user.email == email})
    if(!foundUser) throw 'user not existed'
    if(foundUser.password !== password){throw 'Incorrect password'}
    // store current user in local storage 
    alert('Login successfull')
    navigate('/dashboard')
   }
    catch(error){
      if(error) alert(error)
    }
   
    }
   

    return(
    <form action="" onSubmit={handleSubmit}>

      <input type="email" 
      placeholder="email" 
      onChange={(event)=>setEmail(event.target.value)}/><br/>

      <input type="password"
       placeholder="password"
         onChange={(event)=>setPassword(event.target.value)}/>

      <button>login</button>
      <p>Do you have an account</p><button onClick={()=>navigate('/signup')}>sign up</button>
    </form>
  )

  }
  
  


export default Login;