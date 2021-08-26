import React from "react";
import { useForm } from "react-hook-form";
import "./AddEmployee.css";

const url = process.env.EMPDIR_API_URL || "http://localhost:3100/employee";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="add-employee">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first_name">First Name</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="first_name"
            autoComplete="off"
            {...register("first_name", {
              required: true,
            })}
          />
          {errors.first_name && errors.first_name.message}
        </div>
        <label htmlFor="last_name">Last Name</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="last_name"
            autoComplete="off"
            {...register("last_name", {
              required: true,
            })}
          />
          {errors.last_name && errors.last_name.message}
        </div>
        <label htmlFor="phone">Phone</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="phone"
            autoComplete="off"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone && errors.phone.message}
        </div>
        <label htmlFor="department">Department</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="department"
            autoComplete="off"
            {...register("department", {
              required: true,
            })}
          />
          {errors.department && errors.department.message}
        </div>
        <label htmlFor="picture">Picture URL</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="picture"
            autoComplete="off"
            {...register("picture", {
              required: false,
            })}
          />
          {errors.picture && errors.picture.message}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
