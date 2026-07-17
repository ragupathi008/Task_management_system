import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#083088",
        color: "#fff",
      }}
    >
      <h2>TaskFlow</h2>

      <div>
        <span style={{ marginRight: "20px" }}>
          {user?.name}
        </span>

        <button
          className="logout-btn"
          onClick={logout}
        >Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;