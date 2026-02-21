import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  // Clear all inputs
  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validation
      if (!name) throw new Error("Name is required");
      if (!email) throw new Error("Email is required");
      if (!password) throw new Error("Password is required");
      if (!repeatPassword)
        throw new Error("Confirm password is required");
      if (password !== repeatPassword)
        throw new Error("Passwords do not match");

      // Get existing users
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email already exists
      let isExist = users.find((user) => user.email === email);
      if (isExist) throw new Error("This email already exists");

      // Create user object
      let newUser = {
        name,
        email,
        password,
      };

      // Save user
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("User registered successfully");

      clearInputs();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Repeat your password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
 
}

export default SignUp;







//  return (
//     <div className="signup-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />

//         <input
//           type="password"
//           placeholder="Repeat your password"
//           value={repeatPassword}
//           onChange={(e) => setRepeatPassword(e.target.value)}
//         />
//         <br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );