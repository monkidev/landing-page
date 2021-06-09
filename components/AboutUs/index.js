import styled from "styled-components";

const Container = styled.div`
  padding: 60px;
  .title {
    text-align: center;
    z-index: 9999;
    font-weight: 900;
    font-size: 36px;
  }
  p {
    font-size: 24px;
    margin-top: 30px;
    z-index: 9999;
    text-align: center;
    max-width: 785px;
  }
  p span {
    background-color: #007ea7;
    color: white;
  }
  @media screen and (max-width: 900px) {
    .title {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const AboutUs = () => {
  return (
    <Container
      id="about"
      className="container d-flex flex-column justify-content-center align-items-center"
    >
      <div className="title">
        Um pouco sobre a<br /> Monkidev
      </div>
      <p>
        A Monkidev nasceu de uma vontade de desenvolver soluções para melhorar a
        vida dos clientes, sendo assim algumas já estão no mercado como o
        sistema <span>Edonix</span> para escolas e o <span>Mais Catálogo</span>{" "}
        para empresas que querem listar seus produtos e serviços de forma
        online.
      </p>
    </Container>
  );
};

export default AboutUs;
