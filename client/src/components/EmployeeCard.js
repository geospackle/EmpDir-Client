import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <img src={props.employee.picture.large} alt={""}/>
      {props.employee.name.first + ' ' + props.employee.name.last}
    </div>
  );
};

export default EmployeeCard;
