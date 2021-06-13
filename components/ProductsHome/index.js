import styled from "styled-components";

const Container = styled.div`
  color: white;
  text-shadow: 1px 1px 5px black;
  a {
    text-decoration: none;
    color: white;
  }

  p {
    text-align: center;
    max-width: 266px;
  }

  .edonix {
    cursor: pointer;
    border-radius: 5px;
    margin-top: 50px;
    background-image: url("/images/edonix-bg.png");
    background-position: center;
    background-size: cover;
    min-height: 404px;
    z-index: 9999;
  }

  .mais-catalogo {
    cursor: pointer;
    border-radius: 5px;
    margin-top: 50px;
    background-image: url("/images/mais-catalogo-bg.png");
    background-position: center;
    background-size: cover;
    min-height: 404px;
    z-index: 9999;
  }
`;

const ProductsHome = () => {
  return (
    <Container id="products" className="container d-flex flex-column justify-content-center align-items-center">
      <a href="https://edonix.org" target="_blank" className="edonix col-12 d-flex flex-column justify-content-center align-items-center">
        <img src="/images/edonix.png" />
        <h1>Sistema Edonix</h1>
        <p>
          O edonix tem como foco principal auxiliar e simplificar a gerência e
          conectividade no ambiente educacional.{" "}
        </p>
      </a>

      <a href="https://maiscatalogo.com" target="_blank" className="mais-catalogo col-12 d-flex flex-column justify-content-center align-items-center">
        <img src="/images/mais-catalogo.png" />
        <h1>Mais Catálogo</h1>
        <p>
          Catálogo simplificado para melhorar o seu contato com os clientes,
          lançando novas atualizações diariamente a todo vapor.
        </p>
      </a>
    </Container>
  );
};

export default ProductsHome;
