import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <h1>
        <div className="title">404 NOT FOUND</div>
      </h1>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin-left: 15%;
  margin-right: 15%;
  height: 20vh;
  align-items: center;
  justify-content: center;
  .title {
    opacity: 0.8;
    color: #fff;
    text-align: center;
  }

  h1 {
    font-size: 8rem;
    padding-top: 24rem;
    padding-bottom: 2rem;

    @media (max-width: 64rem) {
      font-size: 6rem;
      padding: 1.5rem;
      padding-top: 13rem;
    }

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 13rem;
    }
  }
`;
export default NotFound;
