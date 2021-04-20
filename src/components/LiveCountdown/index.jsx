import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Count,
  CellContainer,
  Cell,
  Time,
  Day,
} from "./LiveCountdownElements";
import Button from "../Button/index";

function LiveCountdown() {
  const [date, setDate] = useState(1);

  useEffect(() => {
    setTimeout(() => setDate(date + 1), 1000);
  });

  return (
    <Container>
      <Title>
        Coming
        <Count>{date}</Count>
      </Title>
      <CellContainer>
        <Cell>
          <Time>{12}</Time>
          <Day>days</Day>
        </Cell>
        <Cell>
          <Time>{45}</Time>
          <Day>hours</Day>
        </Cell>
        <Cell>
          <Time>{22}</Time>
          <Day>mins</Day>
        </Cell>
        <Cell>
          <Time>{34}</Time>
          <Day>secs</Day>
        </Cell>
      </CellContainer>
      <Button text="Get Started" />
    </Container>
  );
}

export default LiveCountdown;
