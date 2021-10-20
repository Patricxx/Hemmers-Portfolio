import React from "react";
import styled from "styled-components";

const Quote1 = () => {
  return (
    <Container>
      <div className="quote">
        <p>
          CONTENT precedes "DESIGN", design in the absence of content is not
          DESIGN, it's DECORATION!
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  opacity: 0.8;
  display: inline-block;
  height: 10rem;
  width: 100%auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;

  @media (max-width: 40rem) {
    display: none;
  }

  .quote {
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: 200;
    box-sizing: border-box;

    @media (max-width: 40rem) {
      display: none;
    }
  }
`;

export default Quote1;
