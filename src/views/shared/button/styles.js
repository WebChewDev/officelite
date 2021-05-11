import styled from "styled-components";
import { theme } from "../../../assets/theme/index";
import { Link } from "react-router-dom";

// anchor tag
export const A = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

// core button
export const StyledButton = styled.button`
  height: 56px;
  width: 171px;
  box-shadow: ${(props) => (props.shadow ? theme.shadow : null)};
  border-radius: 28px;
  border: none;
  cursor: pointer;
`;

export const StyledButtonPrimary = styled(StyledButton)`
  background: ${theme.button.primary.normal};
  color: ${theme.button.primary.text};

  &:hover {
    background: ${theme.button.primary.hover};
  }
`;

export const StyledButtonSecondary = styled(StyledButton)`
  background: ${theme.button.secondary.normal};
  color: ${theme.button.secondary.text};

  &:hover {
    background: ${theme.button.secondary.hover};
    color: ${theme.button.secondary.text_hover};
  }
`;

export const StyledButtonContrast = styled(StyledButton)`
  background: ${theme.button.contrast.normal};
  color: ${theme.button.contrast.text};

  &:hover {
    background: ${theme.button.contrast.hover};
    color: ${theme.button.contrast.text_hover};
  }
`;

export const StyledButtonCta = styled(StyledButton)`
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
  background: #5175ff;
  color: #ffffff;

  &:hover {
    background: #829cff;
  }
`;

export const StyledButtonForm = styled(StyledButton)`
  min-width: ${(props) => (props.size === "large" ? "360px" : "279px")};
  height: 56px;
`;

// button text

