import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

import { StyledWrapper } from "./signup.styled";
import TextInput from "../../Common/TextInput";
import Button from "../../Common/Button";

export default function Signup() {
  YupPassword(Yup);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    confirmEmail: Yup.string()
      .email()
      .required()
      .oneOf([Yup.ref("email"), null], "Emails must match"),
    password: Yup.string().password().required("Required"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder=""
          />

          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder=""
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder=""
          />
          <TextInput
            label="Confirm Email"
            name="confirmEmail"
            type="email"
            placeholder=""
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            placeholder=""
          />
          <TextInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder=""
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </StyledWrapper>
  );
}
