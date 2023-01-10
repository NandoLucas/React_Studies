import styled from "styled-components";

export const LogoSite = styled.img`
  width: 130px;
  position: relative;
  margin-right: 0.5em;
`;
export const Header = styled.header`
  background-color: #161b22;
  min-height: 1vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  margin-top: 0.9em;
  & a {
    font-size: 20px;
    font-family: tahoma;
    box-shadow: 2px solid;
    color: #f0f6fc;
    margin-right: 8em;
    text-decoration: none;
    &:hover {
      color: #babbbd;
    }
  }
`;
export const Span = styled.span`
  color: #f0f6fc;
  font-size: 14px;
  margin-top: 1.5em;
`;

export const H3 = styled.h3`
  margin-top: 1em;
  padding-right: 2em;
  padding-left: 2em;
  & a {
    color: #f0f6fc;
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
  justify-content: space-between;
`;

export const SubItens = styled.div`
  justify-content: center;
  display: flex;
  margin: 0.9em;
`;
