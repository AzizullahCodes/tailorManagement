import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!name) throw new Error("Name is required");
      if (!email) throw new Error("Email is required");
      if (!password) throw new Error("Password is required");
      if (!repeatPassword)
        throw new Error("Confirm password is required");
      if (password !== repeatPassword)
        throw new Error("Passwords do not match");

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let isExist = users.find((user) => user.email === email);
      if (isExist) throw new Error("This email already exists");

      let newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("User registered successfully");
      clearInputs();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">

        <div className="signup-left">
          <div className="left-content">
            <h1>Welcome!</h1>
            <p>
              Create your account and start building amazing experiences with us.
            </p>
          </div>
        </div>

        <div className="signup-right">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <button type="submit">Sign Up</button>
            <p>Do you have already an account?</p>
            <button className="btn2" onClick={()=>navigate('/')}>Login</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default SignUp;


