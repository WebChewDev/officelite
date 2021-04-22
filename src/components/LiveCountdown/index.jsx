import React, { useEffect, useState } from "react";
// import { DateTime } from "luxon";

import {
  Container,
  Title,
  HighlightedDate,
  CellContainer,
  Cell,
  CellValue,
  CellText,
} from "./LiveCountdownElements";
import Button from "../Button/index";
import { minutes } from "./helpers";

function LiveCountdown() {
  const [Seconds, setSeconds] = useState("");
  const [Minutes, setMinutes] = useState("");
  const [Hours, setHours] = useState("");
  const [Days, setDays] = useState("");

  useEffect(() => {
    setInterval(function () {
      const countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
      var now = new Date().getTime();
      var timeLeft = countDownDate - now;

      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      //state
      setSeconds(seconds)
      setMinutes(minutes)
      setHours(hours)
      setDays(days)

    }, 1000);
  });

  return (
    <Container>
      <Title>
        Coming
        <HighlightedDate> 4 April 2020</HighlightedDate>
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
