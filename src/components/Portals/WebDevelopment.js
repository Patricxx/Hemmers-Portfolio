import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Web_Development = () => {
  return (
    <Container>
      <h1>
        <div className="title">Web Development</div>
      </h1>
      <Grid>
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description"
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description"
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Case Name"
          description="Case Description."
          technologies="Case Technologies"
          link_one="https://"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
      </Grid>
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
    margin-left: 15%;
    margin-right: 15%;
    opacity: 0.8;
    color: #fff;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    padding-top: 6rem;
    padding-bottom: 2rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Grid = styled.div`
  color: #fff;
  box-sizing: border-box;
  padding: 1rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 18rem);
  grid-auto-rows: 18rem;
  grid-gap: 2.5rem;
  justify-content: center;
  margin-bottom: 10rem;
`;

export default Web_Development;
