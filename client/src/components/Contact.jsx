import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1 style={{ fontFamily: "cursive", color: "#D35400" }}>
              🍕 Techinfo YT Pizza Shop
            </h1>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#444" }}>
              Welcome to **Techinfo YT Pizza Shop**, where **every slice is a masterpiece**!  
              Our pizzas are made with **love, passion, and fresh ingredients** to satisfy your cravings.  
              Whether you want a **classic Margherita, a cheesy Pepperoni, or a spicy Peri-Peri**,  
              we’ve got something delicious for you!  
              <br />  
              **Need assistance?** Our team is here to make your pizza experience unforgettable!  
              Contact us for orders, customizations, or just to say hello. 🍕🔥  
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>help@techpizzashop.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "100%", height: "100%", borderRadius: "15px", boxShadow: "5px 5px 15px rgba(0,0,0,0.2)" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
