import React from "react";
import styled from "styled-components";
import Card from "../Card";

const SocialMedia = () => {
  return (
    <Container>
      <h1>
        <div className="title">Social Media</div>
      </h1>
      <Grid>
        <Card
          // img={require("")}
          title="Bloved"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/bloved"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Esterel"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/esterel"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Hesselink"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/hesselink"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Freek Nietsche"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/freek_nietsche"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Josephine"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/josephine"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Koetshuis"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/koetshuis"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Josh V"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/josh_v"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="PreScan"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/prescan"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Showtime"
          description="Facebook, Twitter & Youtube"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/showtime"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Stef"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/stef"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="Total"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/total"
          // link_two="https://"
          // link_three="https://"
          link_one_text="View"
          // link_two_text=""
          // link_three_text=""
        />
        <Card
          // img={require("")}
          title="COC Twente Achterhoek"
          description="Facebook"
          technologies=""
          link_one="http://localhost:3000/portfolio/social_media/coc_ta"
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

export default SocialMedia;
