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
