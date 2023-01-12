import "../css/styles.css";
import { Row, Col, Container } from "react-bootstrap";

import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/footer";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <main className="principal">
        <Container>
          <Row>
            <Col>
              <img
                src="./imagens/EduardoHamed.jpg"
                alt="Eduardo Hamed"
                width="250"
              />
            </Col>
            <Col>
              <p>
                Julho 1976 - Nasceu Nasceu na Cidade do México em 6 de julho de
                1976. Terceiro de 4 irmãos, perdeu o pai aos 6 anos de idade
                quando refugiou-se com os avós. Assim, descobriu sua paixão pela
                comida recebendo os ensinamentos de sua avó.
              </p>
              <p>
                Janeiro 1990 - 1º Empreendimento Empreendeu em uma pastelaria,
                desenvolveu o respeito aos ingredientes e à comida. Com esses
                tempos na Cozinha com sua avó, trabalhou na companhia dela
                durante os períodos de férias da escola até 1996. Decide vender
                o negócio para viajar.
              </p>
              <p>
                Agosto 1996 - Estudar/trabalhar Começou a estudar administração
                de empresas no Centro Universitário México e depois de 2
                semestres tem a chance de trabalhar em vendas no Pride Beverages
                México, empresa de sucos e bebidas do Canadá instalada
                recentemente no México, acendendo rapidamente na empresa opta
                por sair da escola.
              </p>
              <p>
                Março 2000 - Gastronomia No ano de 2000 a empresa Telefônica o
                tira da empresa de sucos para gerenciar a recentes operações da
                empresa. Dessa forma, retoma o interesse por estudar Gastronomia
                e ingressa no Centro culinário Ambrosia na cidade de México
              </p>
              <p>
                Janeiro 2009 - Jane Em 2009 conhece Jane Lúcia Rodrigues com
                quem se encontra na Cidade do México estudando seu doutorado.
              </p>
              <p>
                Junho 2010 - Decisão Começam namorar em 2010 e decidem morar
                juntos. No meio desse ano, Jane, por motivos de saúde de seu
                pai, decide voltar ao Brasil para ficar mais perto deles, então
                Eduardo decide acompanhar ela. Janeiro
              </p>
              <p>
                2011 - Trabalhar no Brasil Começou a trabalhar no Folha Mix um
                empreendimento novo no centro de Presidente Prudente-SP, não
                obteve muito sucesso.
              </p>
              <p>
                Agosto 2011 - Novos passos Casa-se em 2011 e inicia trabalho
                como auxiliar de açougueiro no Supermercado Econômico onde
                começa acender até ficar como responsável da rotisseria e frios.
              </p>
              <p>
                Dezembro 2012 Volta as origens Foi contratado pelo Cucaracha
                novo restaurante de comida mexicana da cidade de Presidente
                Prudente.
              </p>
              <p>
                Junho 2013 - Tentativa Depois de uma cirurgia decide sair do
                restaurante e começa a fazer eventos privados onde é contratado
                para cozinhar em festas e reuniões.
              </p>
              <p>
                Janeiro 2016 - Especialização Em 2016 matriculou-se no SENAC
                Presidente Prudente para fazer técnico em nutrição e dietética e
                continuou com os eventos particulares janeiro 2018 Convite Em
                2018 foi convidado para trabalhar como Docente no SENAC
                Presidente Prudente – SP na área gastronômica.
              </p>
              <p>
                Julho 2018 - Dumexico Em julho de 2018 inaugura o Restaurante
                Delivery Dumexico, sua intenção é transmitir o conhecimento da
                verdadeira comida mexicana declarada patrimônio universal pela
                UNESCO.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
