import React from "react";
import Navbar from "../components/Top/navbar2";
import Footer from "../components/Bottom/footer2";
export default function Developers() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <section>
          <img src="./images/perfil_gmail.webp" alt="Fernando Lucas"></img>
          <p>
            Graduando em Engenharia da Computação (UFRN), Bacharel em Ciências e
            Tecnologia com ênfase em Computação (UFRN), Técnico em Informática
            (IFRN).
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
