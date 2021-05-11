import React from "react";
import { validationSchema } from "./validation";
import { useFormik } from "formik";
import { FormControl, InputField } from "./FormElements";
import { ButtonForm } from "../Button/index";

function Form() {
  const formik = useFormik({
    initialValues: { name: "", email: "", phoneNumber: "", company: "" },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);

  return (
    <FormControl onSubmit={formik.handleSubmit}>
      <InputField
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <InputField
        id="email"
        name="email"
        placeholder={formik.errors.email ? "Required" : "Email Address"}
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputField
        id="company"
        name="company"
        placeholder="Phone Number"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <InputField
        id="company"
        name="company"
        placeholder="Company"
        type="options"
        onChange={formik.handleChange}
        value={formik.values.company}
      />
      <InputField
        id="company"
        name="company"
        placeholder="Company"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.company}
      />
      <ButtonForm text="Get on the list" />
    </FormControl>
  );
}

export default Form;
