import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="pizza-topbar">
      <Container fluid>
        <h6 className="text-light offer-text">
          <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home Delivery on Orders Above 500/- Rupees
        </h6>
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link className="nav-link-custom">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="nav-link-custom">About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="nav-link-custom">Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/policy">
            <Nav.Link className="nav-link-custom">Terms & Policy</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>

      <style>
        {`
          .pizza-topbar {
            background: linear-gradient(135deg, #e74c3c, #ffb347);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .offer-text {
            font-family: 'Pacifico', cursive;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
          }

          .nav-link-custom {
            color: #fff !important;
            font-weight: 500;
            margin: 0 10px;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .nav-link-custom:hover {
            color: #ffd700 !important;
            transform: translateY(-3px);
          }

          @media (max-width: 768px) {
            .offer-text {
              font-size: 0.85rem;
            }

            .nav-link-custom {
              display: none;
            }
          }
        `}
      </style>
    </Navbar>
  );
};

export default TopBar;
