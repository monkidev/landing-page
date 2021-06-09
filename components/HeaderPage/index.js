import styled from "styled-components";

const Container = styled.nav`
  min-height: calc(100vh - 117px);
  .title {
    font-family: Lato;
    font-weight: 900;
    text-align: center;
    font-size: 80px;
    color: #0a0908;
  }

  .title span {
    color: #007ea7;
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
      padding: 22px 102px;
      border-radius: 10px;
      border: none;
  }
`;

const HeaderPage = () => {
  return (
    <Container className="container d-flex flex-column justify-content-center align-items-center">
      <div className="title">
        A tecnologia <span>move</span>
        <br /> o mundo
      </div>
      <div className="subtitle">Steve Jobs, inventor e fundador da Apple.</div>
      <button className="contact-btn">Faça tecnologia</button>
    </Container>
  );
};

export default HeaderPage;
