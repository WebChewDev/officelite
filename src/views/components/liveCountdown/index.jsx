import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  TitleDark,
  HighlightedDate,
  CellContainer,
  Cell,
  CellValue,
  CellText,
} from "./styles";

function LiveCountdown({ noBtn, dark }) {
  const [Seconds, setSeconds] = useState("");
  const [Minutes, setMinutes] = useState("");
  const [Hours, setHours] = useState("");
  const [Days, setDays] = useState("");

  const countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      //update state
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
    }, 1000);
  });

  return (
    <Container>
      {dark ? (
        <TitleDark>
          Coming <HighlightedDate>Jul 25 2021</HighlightedDate>
        </TitleDark>
      ) : (
        <Title>
          Coming <HighlightedDate>Jul 25 2021</HighlightedDate>
        </Title>
      )}
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
    </Container>
  );
}

export default LiveCountdown;
