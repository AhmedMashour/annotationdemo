import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { ErrorToaster } from "../SweetAlerts";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState();

  const login = () => {
    const isLoggedIn = password === "annotation_demo_pass";
    if (isLoggedIn) {
      dispatch({ type: "LOGIN", isLoggedIn });
      console.log("pushing", isLoggedIn);
      history.push("/annotate");
    } else {
      ErrorToaster.fire({
        title: "wrong password please try again",
      });
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "videoUrl") {
      dispatch({ type: "VIDEO_URL", videoUrl: value });
    }
  };
  return (
    <Container className="login-container">
      <Card className="login-card">
        <Form style={{ padding: "20px", paddingTop: "80px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Video Link</Form.Label>
            <Form.Control
              name="videoUrl"
              type="text"
              autoComplete="off"
              placeholder="https://player.vimeo.com/play/1101928473?s=290766793_1632466013_4fd383f16e2608585ba5da484524eafc&sid=d2c5b853b1d77cb61d1266a41f420b33e2e724701632455213&oauth2_token_id=&download=1"
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </Form.Group>
          <div className="mb-3 login-button">
            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
