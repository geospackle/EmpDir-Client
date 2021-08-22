import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = (props) => {
  const { employees, error } = props;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!employees) {
    return <div>Loading...</div>;
  } else {
    console.log(employees);
    return (
      <div className="employeeList">
        {employees.map((employee) => {
          return <EmployeeCard key={employee.dob.date} employee={employee} />;
        })}
      </div>
    );
  }
};
export default EmployeeList;
