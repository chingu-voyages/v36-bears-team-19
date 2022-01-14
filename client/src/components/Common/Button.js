import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  background: ${(props) => props.theme.buttonGradient};
  border: 0;
  width: 70%;
  height: 60px;
  color: white;
  cursor: pointer;
`;

export default Button;
