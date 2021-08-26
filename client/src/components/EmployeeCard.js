import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <img src={props.employee.picture} alt={"picture"} />
      {props.employee.first_name + " " + props.employee.last_name} <br />
      {props.employee.department} <br />
      {props.employee.phone}
    </div>
  );
};

export default EmployeeCard;
