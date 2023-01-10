import styled from "styled-components";

export const LogoSite = styled.img`
  width: 420px;
  position: relative;
  bottom: 3em;
`;
export const Header = styled.header`
  background-color: #161b22;
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  & a {
    font-size: 36px;
    font-family: tahoma;
    font-style: bold;
    box-shadow: 2px solid;
    color: #f0f6fc;
    text-decoration: none;
    &:hover {
      color: #babbbd;
    }
  }
`;
export const Span = styled.span`
  color: #f0f6fc;
  font-size: 14px;
`;

export const H3 = styled.h3`
  padding-right: 2em;
  padding-left: 2em;
  & a {
    color: #f0f6fc;
    padding: 14px;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: #babbbd;
    }
  }
`;

export const Itens = styled.div`
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const SubItens = styled.div`
  justify-content: center;
  display: flex;
  margin: 2em;
`;
