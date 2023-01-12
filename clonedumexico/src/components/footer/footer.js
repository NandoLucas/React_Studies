/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <Container>
          <Row>
            <Col>
              <h3>Informações</h3>
              <p>
                <i class="fa-solid fa-clock"></i>De Quarta a Sábado das 18h00 as
                22h00
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i>Av. Washington Luiz,
                1616 - Jardim Paulista, Pres. Prudente-SP
              </p>
              <p>
                <i class="fa-solid fa-phone-flip"></i>(18) 99129-8536
              </p>
            </Col>
            <Col className="info-icons">
              <a
                href="https://www.instagram.com/dumexicoprudente/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://www.ifood.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook fa-2x"></i>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <i class="fab fa-whatsapp fa-2x"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
