// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// function Dashboard() {
//   const navigate = useNavigate();
//   // 

//   const logout = () => {
//     localStorage.removeItem("users");
//     navigate("/");
//   };

//   return (
//     <div className="dashboard">
//       <h1>Tailor Dashboard</h1>

//       <div className="dashboard-buttons">
//         <Link to="/add">Add Customer</Link>
//         <Link to="/search">Search Customer</Link>
//         <button onClick={logout}>Logout</button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/");
  };

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="dashboard-header">
        <h2>✂ Tailor Management System</h2>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>

        <div className="cards">
          <Link to="/add" className="card">
            <h3>➕ Add Customer</h3>
            <p>This section allows you to add a new customer to your system.
Enter accurate details such as name, phone number, and measurements to securely store their stitching records.
Saving customer data helps you manage orders efficiently and provide better service in future visits.</p>
          </Link>

          <Link to="/search" className="card">
            <h3>🔍 Search Customer</h3>
            <p>This section allows you to quickly find existing customer records using their phone number.
You can view, manage, or delete stored measurement details for better record control and order management.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;