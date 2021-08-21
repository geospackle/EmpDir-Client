import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("mounted");
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setEmployees(result.results);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!employees) {
    return <div>Loading...</div>;
  } else {
    console.log(employees);
    return (
      <div className="employeeList">
        {employees.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </div>
    );
  }
};
export default EmployeeList;
