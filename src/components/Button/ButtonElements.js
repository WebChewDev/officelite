import styled from "styled-components";


// CORE BUTTON -----------------------------------------
export const Btn = styled.button`
  height: 56px;
  width: 171px;
  border-radius: 28px;
  border: none;
  cursor: pointer;
`;

// BUTTON THEMES ---------------------------------------=
export const BtnPrimary = styled(Btn)`
  background: #5175ff;
  color: #ffffff;

  &:hover {
    background: #829cff;
  }
`;

export const BtnSecondary = styled(Btn)`
  background: #e4eaff;
  color: #5175ff;

  &:hover {
    background: #d3ddff;
  }
`;

export const BtnContrast = styled(Btn)`
  background: #ffffff;
  color: #5175ff;

  &:hover {
    color: #829cff;
  }
`;

export const BtnCta = styled(Btn)`
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
  background: #5175ff;
  color: #ffffff;

  &:hover {
    background: #829cff;
  }
`;

export const BtnForm = styled(BtnPrimary)`
  min-width: 279px;
  height: 56px;

  @media (min-width: 700px) {
    width: 360px;
    height: 56px;
  }
`;

// CORE BUTTON TEXT ------------------------------------------
export const Text = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: inherit;
`;

// BUTTON TEXT THEME -----------------------------------------
