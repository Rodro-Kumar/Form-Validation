import React, { useState } from "react";
import { Validation } from "./Validation";

const Form = () => {
  // all state
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  }); //* store all input data

  const [errors, seterrors] = useState({});

  const HandleInput = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value };
    setformData(newObj);
  };

  const HandleValidation = (event) => {
    event.preventDefault();
    seterrors(Validation(formData));
  };

  return (
    <>
      <form
        className="row-gap-4 d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
        onSubmit={HandleValidation}
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your first name"
            onChange={HandleInput}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={HandleInput}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={HandleInput}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
