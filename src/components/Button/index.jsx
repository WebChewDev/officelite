import React from "react";
import {
  // Text
  Text,
  // Button
  BtnPrimary,
  BtnSecondary,
  BtnContrast,
  BtnForm,
  BtnCta,
} from "./ButtonElements";

export const ButtonPrimary = ({ text, ...props }) => {
  return (
    <>
      <BtnPrimary {...props}>
        <Text>{text}</Text>
      </BtnPrimary>
    </>
  );
};

export const ButtonSecondary = ({ text, ...props }) => {
  return (
    <>
      <BtnSecondary {...props}>
        <Text>{text}</Text>
      </BtnSecondary>
    </>
  );
};

export const ButtonContrast = ({ text, ...props }) => {
  return (
    <>
      <BtnContrast {...props}>
        <Text>{text}</Text>
      </BtnContrast>
    </>
  );
};

export const ButtonCta = ({ text, ...props }) => {
  return (
    <>
      <BtnCta {...props}>
        <Text>{text}</Text>
      </BtnCta>
    </>
  );
};

export const ButtonForm = ({ text, ...props }) => {
  return (
    <>
      <BtnForm {...props}>
        <Text>{text}</Text>
      </BtnForm>
    </>
  );
};

// export default Button;
