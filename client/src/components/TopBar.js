import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Employees
            </Link>
          </li>

          <li>
            <Link to="/add-employee" className="nav-link">
              Add Employee
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopBar;
