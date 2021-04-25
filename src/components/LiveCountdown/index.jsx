import React, { useEffect, useState } from "react";
import Button from "../Button/index";
import {
  Container,
  Title,
  HighlightedDate,
  CellContainer,
  Cell,
  CellValue,
  CellText,
} from "./LiveCountdownElements";

function LiveCountdown() {
  const [Seconds, setSeconds] = useState("");
  const [Minutes, setMinutes] = useState("");
  const [Hours, setHours] = useState("");
  const [Days, setDays] = useState("");

  const countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

  useEffect(() => {
    setInterval(function () {
      var now = new Date().getTime();
      var timeLeft = countDownDate - now;

      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      //state
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
    }, 1000);
  });

  return (
    <Container>
      <Title>
        Coming <HighlightedDate>Jul 25 2021</HighlightedDate>
      </Title>
      <CellContainer>
        <Cell>
          <CellValue>{Days}</CellValue>
          <CellText>day</CellText>
        </Cell>
        <Cell>
          <CellValue>{Hours}</CellValue>
          <CellText>hour</CellText>
        </Cell>
        <Cell>
          <CellValue>{Minutes}</CellValue>
          <CellText>min</CellText>
        </Cell>
        <Cell>
          <CellValue>{Seconds}</CellValue>
          <CellText>sec</CellText>
        </Cell>
      </CellContainer>
      <Button text="Get Started" />
    </Container>
  );
}

export default LiveCountdown;
