import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button";

import { ButtonWrapper, StyledWrapper, StyledLogo } from "./landing.styled.js";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <StyledLogo />
      <ButtonWrapper>
        <Button onClick={() => navigate("/signup")}>Sign up</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
}
