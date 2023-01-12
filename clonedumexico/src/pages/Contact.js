import "../css/styles.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Form>
          <Container className="form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Ex: José da Silva" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ex: fulano@email.com" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="phone" placeholder="Ex: (99) 99999-9999" />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Escreva sua mensagem..."
                className="messageArea"
              ></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Container>
        </Form>
      </main>
      <Footer></Footer>
    </>
  );
}
