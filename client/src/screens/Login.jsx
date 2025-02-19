import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <div className="login-container" style={{
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
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(211, 47, 47, 0.3)',
        borderRadius: '50%',
        boxShadow: '0 0 30px rgba(211, 47, 47, 0.5)',
        animation: 'move 6s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
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
        <h2 className="form-title" style={{
          color: '#fff',
          textAlign: 'center',
          marginBottom: '20px',
          textShadow: '0 0 5px rgba(0,0,0,0.7)'
        }}>Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '10px',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.3)',
                color: '#000'
              }}
            />
            <Form.Text className="text-muted" style={{ color: '#ddd' }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: '#fff', textShadow: '0 0 3px rgba(0,0,0,0.5)' }}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
            <Form.Check type="checkbox" label="Remember me" style={{ color: '#fff' }} />
          </Form.Group>

          <Button
            variant="primary"
            onClick={loginHandler}
            className="login-btn"
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
            Login
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

export default Login;
