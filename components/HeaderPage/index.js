import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { smoothScrollTo } from "../../utils";
const Container = styled.nav`
  z-index: 2;
  min-height: calc(100vh - 117px);
  position: relative;

  .title {
    font-family: Lato;
    font-weight: 900;
    text-align: center;
    font-size: 80px;
    color: #0a0908;
  }

  .title span {
    cursor: pointer;
    color: #007ea7;
    user-select: none;
  }

  .subtitle {
    font-family: Lato;
    text-align: center;
    font-size: 24px;
    color: #0a0908;
  }

  .contact-btn {
    margin-top: 40px;
    background-color: #0a0908;
    color: white;
    font-family: Lato;
    font-weight: 900;
    font-size: 24px;
    padding: 15px 92px;
    border-radius: 10px;
    border: none;
  }

  .to-products {
    cursor: pointer;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 10px;
  }

  .to-products h1 {
    margin-top: auto;
    font-family: Lato;
    font-weight: 900;
    font-size: 28px;
  }

  @media screen and (max-width: 900px) {
    min-height: calc(100vh - 117px);
    .title {
      font-size: 40px;
      transform: translate(0px, -50px);
    }

    .subtitle {
      font-size: 18px;
      transform: translate(0px, -50px);
    }

    .contact-btn {
      margin-top: 20px;
      font-size: 18px;
      padding: 15px 92px;
      transform: translate(0px, -50px);
      width: 100%;
    }

    .to-products {
      bottom: 0px;
    }
  }
`;

const HeaderPage = () => {
  const words = ["conecta", "melhora", "move", "interliga"];
  const [word, setWord] = useState("move");

  const changeWord = useCallback(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    setInterval(changeWord, 3000);
  }, []);

  return (
    <Container className="container d-flex flex-column justify-content-center align-items-center">
      <div className="title">
        A tecnologia <span>{word}</span>
        <br /> o mundo
      </div>
      <div className="subtitle">Steve Jobs, inventor e fundador da Apple.</div>
      <button
        onClick={() => {
          const to = document.getElementById("products").offsetTop;
          smoothScrollTo(0, to);
        }}
        className="contact-btn"
      >
        Faça tecnologia
      </button>
      <div
        onClick={() => {
          const to = document.getElementById("products").offsetTop;
          smoothScrollTo(0, to);
        }}
        className="to-products"
      >
        <h1>Nossos Produtos</h1>
        <FaChevronDown size={30} />
      </div>
    </Container>
  );
};

export default HeaderPage;
