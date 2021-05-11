// import { theme } from "../../../assets/theme/index";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// global styles
export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "Kumbh Sans", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
  }
  * {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }
  .App {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

// Typography
export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  color: "";
`;
export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: "";
`;
export const H3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  /* color: ; */
`;

export const BodyLg = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* color: ; */
`;
export const BodySm = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: 16px;
  line-height: 28px;
  /* color: ; */
`;
