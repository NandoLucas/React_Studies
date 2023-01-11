import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            className="logosite"
            src="./imagens/logo.png"
            alt="Du Mexico"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="menu navbar-nav">
            <a href="/">Início</a>
            <a href="/about">Sobre</a>
            <a href="/contact">Contato</a>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}
