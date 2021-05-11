import React from "react";
import {
  A,
  StyledButtonContrast,
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "./styles";

const handleLinkWrapping = (Component, props) => {
  const { to, children, ...rest } = props;

  const button = <Component {...rest}>{children}</Component>;

  if (to) return <A to={to}>{button}</A>;
  console.log(button);

  return button;
};

export const PrimaryButton = (props) =>
  handleLinkWrapping(StyledButtonPrimary, props);

export const SecondaryButton = (props) =>
  handleLinkWrapping(StyledButtonSecondary, props);

export const ContrastButton = (props) =>
  handleLinkWrapping(StyledButtonContrast, props);
