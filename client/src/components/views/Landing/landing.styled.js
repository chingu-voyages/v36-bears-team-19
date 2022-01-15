import styled from "styled-components";

import logo from "../../../assets/images/logo.png";

export const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  max-width: 400px;
  padding-top: 4rem;
  padding-bottom: 10rem;
`;

export const StyledLogo = styled.img`
  width: 70%;
  max-width: 200px;
`;
StyledLogo.defaultProps = {
  src: logo,
};

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
