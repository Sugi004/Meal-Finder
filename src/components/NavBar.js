import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import food from "../Images/top-view-table-full-delicious-food-composition_23-2149141353.avif";
function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={"/"} className="nav-link">
            <Image
              src={food}
              style={{ width: "60px", height: "60px", margin: "10px" }}
              roundedCircle
            />
          </Link>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              <span> Meal Finder </span>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              <span> Home </span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
