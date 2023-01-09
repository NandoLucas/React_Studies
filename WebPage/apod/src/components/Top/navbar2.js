import React from "react";
import { Link } from "react-router-dom";
import * as B from "./navbarStyles2";
import "../../css/style.css";

export default function Navbar() {
  return (
    <>
      <B.Header>
        <B.Itens>
          <B.SubItens>
            <B.LogoSite id="nasa" src="./images/nasa-logo.png" />
            <B.P>
              <Link to="/">Astronomy Picture of the Day</Link>
            </B.P>
            <B.Span>|</B.Span>
            <B.H3>
              <Link to="/daypicture">Picture of the Day</Link>
            </B.H3>
            <B.Span>|</B.Span>
            <B.H3>
              <Link to="/developers">Developers</Link>
            </B.H3>
            <B.Span>|</B.Span>
          </B.SubItens>
        </B.Itens>
      </B.Header>
    </>
  );
}
