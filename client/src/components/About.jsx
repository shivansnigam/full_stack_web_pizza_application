import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", backgroundColor: "#1b1b2f", padding: "20px", borderRadius: "10px" }}>
        <h1 className="text-warning">Who We Are</h1>
        <p className="text-light">
          Welcome to our pizza haven! We are passionate about crafting delicious, fresh, and mouth-watering pizzas that bring people together. Our secret lies in the perfect blend of high-quality ingredients, traditional recipes, and a sprinkle of love in every slice.
        </p>

        <h1 className="text-warning">Our Specialty</h1>
        <Row>
          <Col md={6}>
            <p className="text-light">
              Our pizzas are known for their crispy, stone-baked crusts, flavorful sauces, and generous toppings. From classic Margherita to exotic BBQ Chicken, every bite promises a delightful burst of taste that leaves you craving more.
            </p>
          </Col>
          <Col md={6}>
            <p className="text-light">
              We use only the freshest vegetables, premium meats, and authentic Italian cheeses to create pizzas that stand out. Our specialty lies in customizing pizzas to suit your taste buds – whether you love it cheesy, spicy, or loaded with toppings.
            </p>
          </Col>
        </Row>

        <Row>
          <h1 className="text-warning">Our Chefs</h1>
          <Col md={3} className="text-light">
            Our head chef, with years of experience in Italian cuisine, ensures every pizza is prepared to perfection.
          </Col>
          <Col md={3} className="text-light">
            Our culinary team experiments with flavors to bring you exciting new pizza varieties regularly.
          </Col>
          <Col md={3} className="text-light">
            Passion and precision guide our chefs in maintaining the authentic taste of our pizzas.
          </Col>
          <Col md={3} className="text-light">
            From dough stretching to wood-fired baking, our chefs infuse expertise into every pizza we serve.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
