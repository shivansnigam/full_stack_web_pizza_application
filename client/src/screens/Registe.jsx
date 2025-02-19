import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Registe = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
    }
  };
  return (
    <div className="register-container" style={{
      position: 'relative',
      height: '100vh',
      background: 'linear-gradient(135deg, #d32f2f, #fbc02d)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '15%',
        width: '100px',
        height: '100px',
        background: 'rgba(211, 47, 47, 0.3)',
        borderRadius: '50%',
        boxShadow: '0 0 30px rgba(211, 47, 47, 0.5)',
        animation: 'move 6s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'rgba(251, 192, 45, 0.4)',
        borderRadius: '20px',
        boxShadow: '0 0 30px rgba(251, 192, 45, 0.6)',
        animation: 'move 5s infinite ease-in-out'
      }}></div>

      {/* Form Container */}
      <Container className="form-box" style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px'
      }}>
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="Something went wrong" />}

        <h2 className="form-title" style={{
          color: '#fff',
          textAlign: 'center',
          marginBottom: '20px',
          textShadow: '0 0 5px rgba(0,0,0,0.7)'
        }}>Registration</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3)',
                color: '#000'
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3)',
                color: '#000'
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3)',
                color: '#000'
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3)',
                color: '#000'
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to the terms and conditions" style={{ color: '#fff' }} />
          </Form.Group>

          <Button
            variant="primary"
            onClick={registerhandler}
            className="register-btn"
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '15px',
              background: 'linear-gradient(145deg, #d32f2f, #fbc02d)',
              boxShadow: '6px 6px 12px #a32727, -6px -6px 12px #d6a02d',
              color: '#fff',
              fontSize: '18px',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Register
          </Button>
        </Form>
      </Container>

      <style>{`
        @keyframes move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .form-box {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Registe;
