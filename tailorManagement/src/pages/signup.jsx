

// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// function SignUp(){
// const [form,setForm] = useState({email: '',password : ''});
// const navigaete = useNavigate();

// const handleSubmit = (e)=>{
//   e.preventDefault();
//   console.log(form.email)
//   console.log(form.password)
//   // 
//   let get = localStorage.getItem('customer');
// if(get){
//   alert('user already existed')
// }
// else{
//   localStorage.setItem('customer', JSON.stringify(form))
//   alert('signup successfully')
//   navigaete('/')
// }

// }


//   return(
//     <div className="signup-container">
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="email"
//         onChange={(e)=>setForm({...form,email: e.target.value})} /><br/>
//         <input type="password" placeholder="password" onChange={(e)=>setForm({...form,password: e.target.value})} />
//         <button>singup</button>
//       </form>
//     </div>
//   )
// }
// export default SignUp



// seperate email password 

import { useState } from "react"
import { useNavigate } from "react-router-dom";
function SignUp(){
const [name,setName] = useState('');
const [email, setEmail] = useState('');
const [password,setPassword] = useState('');
const [repeatPassword,setRepeatPassword] = useState('');
const navigaete = useNavigate();

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log('name ',name);
  console.log('email ',email);
  console.log('password ',password);
  console.log('repeat password ',repeatPassword)
  // create an object
  let obj = {
    name,
    email,
    password,
    repeatPassword
  }
  console.log('object ',obj)
  let checkInLocalStorage = JSON.parse(localStorage.getItem('user') || []);
  let check = checkInLocalStorage.find((item)=>{
    return item.email === email
  })
  if(check){
    console.log('user already existed')
    return
  }
  checkInLocalStorage.push(obj)

  if(checkInLocalStorage){
    console.log(checkInLocalStorage)
  }
  
}

 return(
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <input type="name" placeholder="Enter your name" 
        onChange={(event)=>setName(event.target.value)} /><br/>

        <input type="email" placeholder="Enter your email" 
        onChange={(event)=>setEmail(event.target.value)} /><br/>

        <input type="password" placeholder="Enter your password" 
        onChange={(event)=>setPassword(event.target.value)} /><br/>

        <input type="password" placeholder="Repeat your password" 
        onChange={(event)=>repeatPassword(event.target.value)} /><br/>

        {/* <input type="password" placeholder="password" onChange={(e)=>setForm({...form,password: e.target.value})} /> */}
        <button>singup</button>
      </form>
    </div>
  )

}


 

export default SignUp