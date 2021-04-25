import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  z-index: 15;
  margin: 0 0 100px 0;
  width: 328px;
  height: 254px;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 270px;
  margin: 0 0 18px 0;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;

  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const HighlightedDate = styled.span`
  margin: 0 0 0 8px;
  color: #5175ff;
`;

export const CellContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  height: 92px;
  margin: 0 0 40px 0;
`;
export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 92px;
  padding: 11px 16px 10px;
  border-radius: 4px;
  background: #333950;
`;
export const CellValue = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;

  width: 40px;
  height: 49px;
  color: #ffffff;
  text-align: center;
`;
export const CellText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;

  width: 27px;
  height: 28px;
  color: #999ca7;
  text-align: center;
  margin: -2px 0 0 0;
`;
