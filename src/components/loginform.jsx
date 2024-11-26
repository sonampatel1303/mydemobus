import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
 // Link to external CSS

const RegisterationFormWithDynamicFields = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Registration details", data);
    navigate("/sample");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <h3 className="address-title">Addresses</h3>
        {fields.map((item, index) => (
          <div className="form-group address-group" key={item.id}>
            <label>Address {index + 1}</label>
            <input
              type="text"
              {...register(`addresses.${index}.line1`, {
                required: "Address is required",
              })}
            />
            {errors.addresses?.[index]?.line1 && (
              <span className="error-message">
                {errors.addresses[index].line1.message}
              </span>
            )}
            <button type="button" className="remove-btn" onClick={() => remove(index)}>
              Remove Address
            </button>
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => append({ line1: "" })}>
          Add Address
        </button>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterationFormWithDynamicFields;
