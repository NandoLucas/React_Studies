import "../css/styles.css";
import { Image } from "react-bootstrap";
import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1>Início</h1>
      </main>
    </>
  );
}
