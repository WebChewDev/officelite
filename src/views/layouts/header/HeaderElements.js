import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../assets/home/bg-pattern-header.svg";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.signup ? "462px" : "890px")};
  width: 375px;
  padding: 46px 24px 100px;
  background: url(${bg}) center -47% no-repeat;
  background-size: 489px 489px;
  /* background-position: -42px -170px; */
`;

export const BgSvg = styled.img`
  position: absolute;
  width: 458px;
  height: 458px;
  left: -42px;
  top: -170px;
`;

export const HeroImage = styled.div`
  /* width: 171px;
  height: 192px;
  margin-top: 80px;
  object-fit: contain; */

  position: absolute;
  width: 171px;
  height: 192px;
  left: 102px;
  top: 162px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  position: relative;
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
  margin: 0 0 27px 0;
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
