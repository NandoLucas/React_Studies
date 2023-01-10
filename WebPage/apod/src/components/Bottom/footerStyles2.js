import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #161b22;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 50px 0px 0px 0px;
  padding: 5px;
  & img {
    max-height: 90%;
    max-width: 90%;
  }
`;
export const LinkRedes = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  & a {
    margin: 20px;
    opacity: 1;
    filter: brightness(0) invert(1);
    &:hover {
      opacity: 1;
      filter: brightness(1) invert(0);
    }
  }
`;
