import styled from "styled-components";
import { Link } from "react-router-dom";
import cardBg from "../../assets/home/bg-pattern-pricing.svg";

export const CardContainer = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 508px;
  width: 350px;
  margin: 0 0 32px;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.247159);
  border-radius: 13px;
  background: #ffffff;

  &:nth-child(2) {
    color: #ffffff;
    background: #5175ff no-repeat url(${cardBg}) center 102%;
    background-size: 880px 880px;
  }
`;

export const Heading = styled.h1`
  margin: 40px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #333950;
`;

export const HeadingDark = styled(Heading)`
  color: #ffffff;
`;

export const Pricing = styled.p`
  margin: 0 0 8px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  color: #333950;

  &:nth-child(2) {
  }
`;

export const PricingDark = styled(Pricing)`
  color: #ffffff;
`;

export const SubHeading = styled.h2`
  margin: 0 0 56px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  /* color: #333950; */
`;

export const SubText = styled.p`
  margin: 0 0 16px 0%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #747b95;

  &.last {
    margin: 0 0 32px 0%;
  }
`;

export const SubTextDark = styled(SubText)`
  color: #d3ddff;
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
