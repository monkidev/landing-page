import classNames from "classnames";
import { useState } from "react";
import styled from "styled-components";
import { smoothScrollTo } from "../../utils";

const Nav = styled.nav`
  .nav-link {
    font-family: "Lato";
    font-weight: 900;
    color: black !important;
    padding: 0px 20px !important;
  }

  .active {
    text-shadow: 0px 0px 10px #007ea7;
    color: black !important;
  }
  .navbar-toggler, .navbar-toggler:focus {
    border: none !important;
    box-shadow: none;
  }
  .navbar-toggler::selection {}
`;

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
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
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  const to = document.getElementById("products").offsetTop;
                  smoothScrollTo(0, to);
                }}
              >
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  const to = document.getElementById("about").offsetTop;
                  smoothScrollTo(0, to);
                }}
              >
                Sobre nós
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  const to = document.getElementById("contact").offsetTop;
                  smoothScrollTo(0, to);
                }}
              >
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
