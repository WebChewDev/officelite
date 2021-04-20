import styled from "styled-components";

export const Container = styled.div`
  min-height: 2932px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #FAFAFA
`;

export const BgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 1248px;
  left: 0px;
  top: 1780px;
  background: #25293a;
  object-fit: none;
`;

export const BgImage = styled.img`
  position: absolute;
  width: 1202px;
  height: 1202px;
  left: -414px;
  top: 64px;
  transform: rotate(-1deg);
`;
