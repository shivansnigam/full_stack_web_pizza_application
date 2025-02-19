import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="custom-navbar">
        <Container>
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="nav-link-mobile">Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link className="nav-link-mobile">Register</Nav.Link>
                  </LinkContainer>
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link className="nav-link-mobile">Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style>
        {`
          @media (max-width: 576px) {
            .custom-navbar {
              background: linear-gradient(135deg, #ff6b6b, #ffa502);
              color: #fff;
            }

            .navbar-brand img {
              height: 40px;
            }

            .nav-link-mobile {
              font-size: 1.1rem;
              padding: 12px;
              color: #fff !important;
              text-align: center;
              transition: background-color 0.3s;
              border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            }

            .nav-link-mobile:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }

            .nav-dropdown .dropdown-toggle {
              color: #fff !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
