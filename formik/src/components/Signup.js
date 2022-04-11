import React from "react";

import { Formik, Field, Form, useFormik } from "formik";

import validations from "./validations";

function Signup() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        repassword: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validations,
    });

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <br />
        <br />
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label htmlFor="email">Confirm Password</label>
        <input
          id="repassword"
          name="repassword"
          type="password"
          value={values.repassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.repassword && touched.repassword && (
          <div className="error">{errors.repassword}</div>
        )}

        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
