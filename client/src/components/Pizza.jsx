import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Row, Col, Modal, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import gsap from "gsap";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const pizzaCardRef = useRef(null);
  const addToCartBtnRef = useRef(null);

  useEffect(() => {
    gsap.from(pizzaCardRef.current, { opacity: 0, y: 50, duration: 1 });
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    setShowToast(true);
    gsap.fromTo(
      addToCartBtnRef.current,
      { rotation: 0 },
      { rotation: 360, duration: 0.5, ease: "power2.inOut" }
    );
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        ref={pizzaCardRef}
        className="pizza-card shadow-lg"
        style={{
          width: "18rem",
          marginTop: "30px",
          borderRadius: "15px",
          overflow: "hidden",
          background: "linear-gradient(145deg, #121212, #1e1e2f)",
          color: "#fff",
          boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
          transition: "transform 0.5s",
        }}
      >
        <div
          className="image-container"
          style={{
            background: "linear-gradient(135deg, #d38312, #a83279)",
            padding: "10px",
          }}
        >
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{
              height: "250px",
              cursor: "pointer",
              borderRadius: "10px",
              transition: "transform 0.5s",
            }}
            onClick={handleShow}
            className="pizza-image"
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title className="pizza-title text-uppercase text-warning fw-bold" style={{ letterSpacing: "2px", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>{pizza.name}</Card.Title>
          <hr className="text-warning" />
          <Card.Text>
            <Row>
              <Col md={6} className="mb-2">
                <h6 className="text-light">Varients</h6>
                <select
                  className="form-select border-warning bg-dark text-light"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6} className="mb-2">
                <h6 className="text-light">Quantity</h6>
                <select
                  className="form-select border-warning bg-dark text-light"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row className="align-items-center mt-3">
            <Col md={6} className="fw-bold text-info">
              Price: ₹{pizza.prices[0][varient] * quantity}
            </Col>
            <Col md={6}>
              <Button ref={addToCartBtnRef} onClick={addToCartHandler} className="btn-custom">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-warning text-white">
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{ background: "#121212", color: "#fff" }}>
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: "250px", borderRadius: "10px", boxShadow: "0 10px 20px rgba(0,0,0,0.6)" }}
          />
          <div className="mt-3">
            <h5 className="text-warning">Description :</h5>
            <p className="text-light" style={{ fontSize: "1.1rem" }}>{pizza.description}</p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Toast for Add to Cart */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1050,
        }}
      >
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="dark" autohide>
          <Toast.Body className="text-black">🛒 Item added to cart successfully!</Toast.Body>
        </Toast>
      </div>

      <style>
        {`
          .pizza-card {
            transition: transform 0.4s ease;
            border: none;
            background: linear-gradient(135deg, #0f0f0f, #1e1e2f);
          }
          .pizza-card:hover {
            transform: scale(1.08) rotate(-2deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          }
          .pizza-image:hover {
            transform: scale(1.2) rotate(5deg);
            box-shadow: 0 15px 30px rgba(0,0,0,0.6);
          }
          .btn-custom {
            background: linear-gradient(135deg, #e91e63, #2196f3);
            border: none;
            color: #fff;
            font-weight: bold;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.4);
          }
          .btn-custom:hover {
            background: linear-gradient(135deg, #2196f3, #e91e63);
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          }
          .toast.bg-dark {
            background-color: #0f0f0f !important;
            color: #fff;
            box-shadow: 0 5px 10px rgba(0,0,0,0.7);
          }
          @media (max-width: 576px) {
            .pizza-card {
              width: 100%;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default Pizza;
