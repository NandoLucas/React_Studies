import "../css/styles.css";
import { Image } from "react-bootstrap";

import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Image src="./imagens/fotobanner.png" fluid />
        <Image src="./imagens/ifood.png" fluid className="center" />
      </main>
      <Footer></Footer>
    </>
  );
}
