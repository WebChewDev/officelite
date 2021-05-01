import React from "react";
import Form from "../../components/SignupForm/index";
import { Container } from "./SignUpElements";
import LiveCountdown from "../../components/LiveCountdown/index";
import Header from "../../layouts/Header/index";

function SignUp() {
  return (
    <Container>
      <Header />
      <LiveCountdown dark />
      <Form />
    </Container>
  );
}

export default SignUp;
