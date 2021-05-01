import styled from "styled-components";
import { ButtonCta } from "../../components/Button/index";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 454px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 328px;
  height: 254px;
  margin: 100px 0;
`;

export const FooterBtn = styled(ButtonCta)`
  z-index: 1;
  align-self: center;
  margin: 40px 0 0 0;
`;
