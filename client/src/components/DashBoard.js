import { useState, useEffect } from "react";
import "./DashBoard.css";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const DashBoard = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("mounted");
    const url = process.env.EMPDIR_API_URL || "http://localhost:3100/employee";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setEmployees(result);
          setFilteredEmployees(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    const re = new RegExp(`^${searchTerm}`, "i");
    const filteredFirst = employees.filter((employee) =>
      re.test(employee.first_name)
    );
    const filteredLast = employees.filter((employee) =>
      re.test(employee.last_name)
    );
    const filteredFull = [...filteredFirst, ...filteredLast];
    if (searchTerm.length > 0) setFilteredEmployees(filteredFull);
    else {
      setFilteredEmployees(employees);
      console.log(filteredEmployees);
    }
  }, [searchTerm]);

  return (
    <div className="dashboard">
      <SearchBar passSearch={setSearchTerm} />
      <EmployeeList employees={filteredEmployees} error={error} />
    </div>
  );
};

export default DashBoard;
