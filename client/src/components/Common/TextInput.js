import { useField } from "formik";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.borderColor};
  height: 40px;
  width: 100%;
`;

const Error = styled.div`
  color: red;
`;

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
}
