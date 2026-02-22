
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// const Login = ()=>{
//   // const [form,setForm] = useState({email: '',password : ''});
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const navigate = useNavigate()
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//    try{
//     if(!email) throw 'Email is required'
//     if(!password) throw 'Password is required'
//     let getData = JSON.parse(localStorage.getItem('users'))||[];
//     if(getData.length === 0) {
//       alert('No user found plz signup again')
//       navigate('/signup')
//       return
//     }
   
//     // find user with matching email
//     let foundUser = getData.find((user)=>{return user.email == email})
//     if(!foundUser) throw 'user not existed'
//     if(foundUser.password !== password){throw 'Incorrect password'}
//     // store current user in local storage 
//     alert('Login successfull')
//     navigate('/dashboard')
//    }
//     catch(error){
//       if(error) alert(error)
//     }
   
//     }
   

//     return(
//     <form action="" onSubmit={handleSubmit}>

//       <input type="email" 
//       placeholder="email" 
//       onChange={(event)=>setEmail(event.target.value)}/><br/>

//       <input type="password"
//        placeholder="password"
//          onChange={(event)=>setPassword(event.target.value)}/>

//       <button>login</button>
//       <p>Do you have an account</p><button onClick={()=>navigate('/signup')}>sign up</button>
//     </form>
//   )

//   }
  
  


// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!email) throw "Email is required";
      if (!password) throw "Password is required";

      const getData = JSON.parse(localStorage.getItem("users")) || [];
      if (getData.length === 0) {
        alert("No user found, please signup");
        navigate("/signup");
        return;
      }

      const foundUser = getData.find((user) => user.email === email);
      if (!foundUser) throw "User not existed";
      if (foundUser.password !== password) throw "Incorrect password";

      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="login-left-content">
          <h1>Welcome Back!</h1>
          <p>Login to continue and access your dashboard instantly.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2 className="login-title">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>

          <p className="signup-text">
            Don't have an account?{" "}
            <span className="signup-link" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;