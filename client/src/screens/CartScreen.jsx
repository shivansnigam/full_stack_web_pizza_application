import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div className="cart-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fbc02d, #d32f2f)',
      padding: '30px',
      color: '#fff'
    }}>
      <Container>
        <Row>
          <Col md={6} style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
          }}>
            <h1 className="cart-title" style={{ textAlign: 'center', marginBottom: '20px' }}>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <Col key={item._id} md={12} className="cart-item" style={{
                  marginBottom: '20px',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  paddingBottom: '15px'
                }}>
                  <h5>
                    {item.name} [{item.varient}]
                  </h5>
                  <h6>
                    Price: {item.quantity} x {item.prices[0][item.varient]} = {item.price}
                  </h6>
                  <h6>
                    Quantity: &nbsp;
                    <FaMinusCircle
                      className="text-danger"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    />
                    {item.quantity}
                    <FaPlusCircle
                      className="text-success"
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    />
                  </h6>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '15px' }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", fontSize: '1.5em' }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={4} className="payment-info" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
            marginLeft: '30px',
            margin: '0 auto'
          }}>
            <h1 className="payment-title" style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Info</h1>
            <h4>Sub Total: </h4>
            <h4>RS: {subTotal} /-</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>

      <style>{`
        .cart-title, .payment-title {
          text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
        }

        .cart-item:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        .payment-info {
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .cart-container {
            padding: 20px;
          }

          .payment-info {
            margin-top: 20px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CartScreen;
