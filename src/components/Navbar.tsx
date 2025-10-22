// src/components/Navbar.tsx
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        📝 Blog Manager
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "active" : ""
          }
        >
          Trang chủ
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "active" : ""
          }
        >
          Viết bài mới
        </NavLink>
      </div>
    </nav>
  );
}
