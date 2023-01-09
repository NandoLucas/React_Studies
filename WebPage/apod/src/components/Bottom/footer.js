import React from "react";
import * as B from "./footerStyles";
import "../../css/style.css";

export default function footer() {
  return (
    <>
      <B.Footer>
        <B.LinkRedes>
          <a
            href="https://github.com/NandoLucas"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/nandoluks1/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-silva-899922181/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </B.LinkRedes>
      </B.Footer>
    </>
  );
}
