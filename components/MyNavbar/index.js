import classNames from "classnames";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Nav = styled.nav`
  .nav-link {
    font-family: 'Lato';
    font-weight: 900;
    color: black !important;
    padding: 0px 20px !important;
  }
  
  .active {
    text-shadow: 0px 0px 10px #007EA7;
    color: black !important;
  }
`;

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Nav  className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src="/monkidev.png"
            alt="Picture of the author"
            width={70.99}
            height={84}
          />
        </a>
        <button onClick={() => setShow(!show)} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames({
            collapse: true,
            show,
            "navbar-collapse": true,
          })}
          id="navbarNav"
        >
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default MyNavbar;
