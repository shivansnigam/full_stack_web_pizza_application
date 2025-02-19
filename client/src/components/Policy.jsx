import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 className="text-center text-warning mb-4">Pizza Hub - Terms & Policies</h1>
        <Row>
          <Col md={10} className="mx-auto">
            <h6 className="text-danger">1. Fresh Ingredients Policy 🍅🧀</h6>
            <p className="text-light">
              At Pizza Hub, we prioritize using only the freshest, high-quality ingredients for our pizzas. From farm-fresh vegetables to premium cheeses, every bite promises a delightful experience.
            </p>

            <h6 className="text-danger">2. Delivery Commitment 🚚🔥</h6>
            <p className="text-light">
              Our delivery team ensures your pizza arrives hot and fresh within the promised timeframe. In case of any delay, you will receive a discount voucher for your next order.
            </p>

            <h6 className="text-danger">3. Customization Policy 🍕🎨</h6>
            <p className="text-light">
              Customize your pizza your way! Choose from a variety of toppings, crust types, and sauces. Please note, certain customizations may have an additional charge.
            </p>

            <h6 className="text-danger">4. Refund & Replacement Policy 💸🔁</h6>
            <p className="text-light">
              If you're unhappy with your order, contact us within 30 minutes of delivery. We offer replacements or refunds for valid complaints related to quality or incorrect deliveries.
            </p>

            <h6 className="text-danger">5. Hygiene Standards 🧼🍽️</h6>
            <p className="text-light">
              We adhere to strict hygiene protocols in our kitchens. All staff undergo regular health checks to maintain the highest safety standards.
            </p>

            <h6 className="text-danger">6. Loyalty Program 🎯🏆</h6>
            <p className="text-light">
              Join our loyalty program to earn points with every order. Redeem points for discounts, free pizzas, and exclusive offers.
            </p>

            <h6 className="text-danger">7. Privacy Policy 🔒👤</h6>
            <p className="text-light">
              Your privacy matters to us. We do not share your personal information with third parties. All transactions are secured using advanced encryption protocols.
            </p>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .text-light {
            color: #f3f3f3;
          }
          .text-warning {
            color: #FFA500;
          }
          .text-danger {
            color: #FF6347;
          }
          h1 {
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
          }
          p {
            font-size: 1.1rem;
            line-height: 1.6;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
          }
          @media (max-width: 576px) {
            h1 {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Policy;
