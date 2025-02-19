import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h5>Order Now</h5>
          <Nav className="footer-nav">
            <LinkContainer to="/deals">
              <Nav.Link className="footer-link">Deals</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pizza">
              <Nav.Link className="footer-link">Pizza</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sides">
              <Nav.Link className="footer-link">Sides</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/drinks">
              <Nav.Link className="footer-link">Drinks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/desserts">
              <Nav.Link className="footer-link">Desserts</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>

        <div className="footer-column">
          <h5>About</h5>
          <Nav className="footer-nav">
            <LinkContainer to="/about">
              <Nav.Link className="footer-link">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/delivery">
              <Nav.Link className="footer-link">Contactless Delivery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nutrition">
              <Nav.Link className="footer-link">Nutrition</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/career">
              <Nav.Link className="footer-link">Career</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>

        <div className="footer-column">
          <h5>Our Policies</h5>
          <Nav className="footer-nav">
            <LinkContainer to="/privacy">
              <Nav.Link className="footer-link">Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/terms">
              <Nav.Link className="footer-link">Terms & Conditions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/disclosure">
              <Nav.Link className="footer-link">Responsible Disclosure</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <Nav.Link className="footer-link">FAQs & Help</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>

        <div className="footer-column">
          <h5>Visit Pizza Hut</h5>
          <Nav className="footer-nav">
            <LinkContainer to="/locate">
              <Nav.Link className="footer-link">Locate a Store</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link className="footer-link">Global Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </div>

      <div className="app-links">
        <FaApple className="app-icon" />
        <FaGooglePlay className="app-icon" />
      </div>

      <div className="feedback-section">
        <button className="feedback-btn">Give Feedback</button>
      </div>

      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>

      <div className="footer-description">
        Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply. Hurry up and place your order now!
      </div>

      <style>
        {`
          .mobile-footer {
            position: relative;
            background: #000;
            color: #fff;
            padding: 20px 10px;
            margin-top: 2rem;
          }

          .footer-sections {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .footer-column {
            width: 48%;
            margin-bottom: 20px;
          }

          .footer-column h5 {
            margin-bottom: 10px;
            font-size: 1.2rem;
            color: #fff;
            border-bottom: 2px solid #ffb347;
            padding-bottom: 5px;
          }

          .footer-link {
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            margin: 5px 0;
            display: block;
            transition: color 0.3s;
          }

          .footer-link:hover {
            color: #ffb347;
          }

          .app-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
          }

          .app-icon {
            font-size: 2rem;
            cursor: pointer;
          }

          .feedback-section {
            text-align: center;
            margin: 20px 0;
          }

          .feedback-btn {
            background: #fff;
            color: #000;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          .feedback-btn:hover {
            background: #e74c3c;
            color: #fff;
          }

          .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            font-size: 1.5rem;
            margin: 20px 0;
          }

          .footer-description {
            text-align: center;
            font-size: 0.9rem;
            margin-top: 10px;
            line-height: 1.4;
            color: #ccc;
          }

          @media (max-width: 768px) {
            .mobile-footer {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .mobile-footer {
              display: none !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default MobileFooter;
