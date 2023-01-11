import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [remetente, setRemetente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [destinatarioemail, setDestinatarioemail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleRemetenteChange = (e) => {
    setRemetente(e.target.value);
  };
  const handleDestinatarioChange = (e) => {
    setDestinatario(e.target.value);
  };
  const handleDestinatarioEmailChange = (e) => {
    setDestinatarioemail(e.target.value);
  };
  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
  };

  const SendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      remetente: remetente,
      destinatario: destinatario,
      destinatarioemail: destinatarioemail,
      mensagem: mensagem,
    };
    emailjs
      .send(
        "service_gmail",
        "template_n1kimbu",
        templateParams,
        "jMrrUfLV7DxXdIcq4"
      )
      .then(
        function (response) {
          alert("Success!", response.status, response.text);
        },
        function (error) {
          alert("Failed...", error);
        }
      );
  };
  return (
    <>
      <header>
        <h1>Sistema de envio de mensagens por e-mail</h1>
      </header>
      <main>
        <fieldset>
          <legend>
            <h2>Contato</h2>
          </legend>
          <form onSubmit={SendEmail}>
            <label>Remetente</label>
            <br></br>
            <input
              type="text"
              name="remetente"
              placeholder="Nome do remetente"
              onChange={handleRemetenteChange}
              value={remetente}
            ></input>
            <br></br>
            <input
              type="text"
              name="destinatario"
              placeholder="Nome do destinatario"
              onChange={handleDestinatarioChange}
              value={destinatario}
            ></input>
            <br></br>
            <input
              type="text"
              name="destinatarioemail"
              placeholder="Email do destinatario"
              onChange={handleDestinatarioEmailChange}
              value={destinatarioemail}
            ></input>
            <br></br>
            <textarea
              placeholder="Escreva sua mensagem..."
              value={mensagem}
              onChange={handleMensagemChange}
            ></textarea>
            <br></br>
            <input type="submit" value="Send Message"></input>
          </form>
        </fieldset>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
