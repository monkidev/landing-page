import styled from "styled-components";

const Container = styled.div`
  font-family: "Lato";
  font-weight: 700;
  text-align: left;
  z-index: 2;

  .col-mds-6 {
    z-index: 2;
  }

  input,
  .btn,
  label {
    z-index: 2;
    box-shadow: none;
  }

  .form-control {
    box-shadow: none;
    border-width: 3px;
    font-family: "Lato";
    font-weight: 700;
  }

  .form-control:focus {
    border-color: black;
  }
`;

const Contact = () => {
  return (
    <Container
      style={{ zIndex: 9999 }}
      id="contact"
      className="container d-flex flex-wrap"
    >
      <div className="col-md-6">
        <label>Nome</label>
        <input type="text" className="form-control" />
        <label>Email</label>
        <input type="text" className="form-control" />
        <button className="btn btn-dark">Bora!</button>
      </div>
    </Container>
  );
};

export default Contact;
