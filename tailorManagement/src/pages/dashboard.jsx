import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  // 

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Tailor Dashboard</h1>

      <div className="dashboard-buttons">
        <Link to="/add">Add Customer</Link>
        <Link to="/search">Search Customer</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
