import React from "react";
import { Btn, BtnText } from "./ButtonElements";

function Button({ text, click, ...props }) {
  return (
    <>
      <Btn onClick={click} {...props}>
        <BtnText>{text}</BtnText>
      </Btn>
    </>
  );
}

export default Button;
