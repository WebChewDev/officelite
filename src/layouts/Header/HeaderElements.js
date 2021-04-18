import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 890px;
  width: 100%;
  padding: 46px 24px 100px;y
  background: url("../../assets/home/bg-pattern-header.svg");
`;

export const HeroImage = styled.div`
  width: 171px;
  height: 192px;
  margin-top: 80px;
  object-fit: contain;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Logo = styled(Link)`
  min-height: 15px;
  min-width: 10px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;

export const BrandLogo = styled.img`
  height: 100%;
  width: 100%;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  height: 378px;
  padding: 0;
`;

export const Heading = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  width: 332px;
  margin: 0 0 24px 0;
  text-align: center;
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #747b95;
  margin: 0 0 24px 0;
`;

export const Anchor = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

export const Btn = styled.button`
  height: 56px;
  width: 171px;
  background: #5175ff;
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
  border-radius: 28px;
  border: none;
  cursor: pointer;
`;

export const BtnText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
`;
