import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  padding: 30px 0px;

  img {
    z-index: 9999;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: black;
    z-index: 9999;
    font-size: 40px;
  }

  @media screen and (max-width: 900px) {
  padding: 0px 0px;
    a {
      margin-top: 35px;
      margin-left: 15%;
      font-size: 22px;
    }
  }
`;

const Footer = () => {
  return (
    <Container
      id="footer"
      className="container d-flex flex-wrap justify-content-center align-items-center"
    >
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img src="/monkidev.png" width={220} height={260.31} />
      </div>
      <div className="d-flex flex-column col-12 col-md-6 d-flex justify-content-center ">
        <a target="_blank" href="https://instagram.com/monkidev">
          <FaInstagram size={40} /> @monkidev
        </a>
        <a target="_blank" href="https://github.com/monkidev">
          <FaGithub size={40} /> github.com/monkidev
        </a>
      </div>
    </Container>
  );
};

export default Footer;
