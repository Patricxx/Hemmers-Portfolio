import React from "react";
import styled from "styled-components";
import img from "../assets/images/Patrick1_Hero_1920x1080_ZW.jpg";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <Hero className="item" style={{ backgroundImage: `url(${img})` }}>
      <Container>
        <Introduction>
          <ProfileCard>
            <div className="profile-text">
              <div className="intro">Hi! I'm</div>
              <h1>Patrick</h1>
              <h1>Alexander</h1>
              <h1>Hemmers</h1>
            </div>
          </ProfileCard>
          &nbsp;
          <SocialIcons />
          <div className="story">
            <p>all-round designer &</p>
            <p></p>
            <p>jr. front-end developer</p>
          </div>
        </Introduction>
      </Container>
    </Hero>
  );
};

const Hero = styled.div`
  width: 100%auto;
  height: 100%auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    background-position: -520px 5px;
  }
  @media (max-width: 40rem) {
    background-position: -420px 5px;
  }
`;

const Container = styled.div`
  display: inline-block;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 40rem) {
    max-width: 40rem;
    flex-direction: column;
    align-items: center;
    height: 94vh;
    padding: 0;
    margin: 0;
    margin-left: 4rem;
  }
`;

const ProfileCard = styled.div`
  height: 8rem;
  display: flex;
  transition: color 0.5s;
  color: #fff;
  margin-bottom: 9rem;

  @media (max-width: 40rem) {
    max-width: 40rem;
    flex-direction: column;
    align-items: center;
    height: 4rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 40rem) {
    height: 7rem;
  }

  .intro {
    opacity: 0.8;
    padding-left: 0.3rem;
    font-size: 2.2rem;
    letter-spacing: -0.1rem;
    text-shadow: 2px 2px 5px #000000;

    @media (max-width: 40rem) {
      margin-bottom: 1rem;
      padding-top: 3rem;
      font-size: 1.2rem;
      text-align: left;
    }
  }

  h1 {
    transition: color 0.5s;
    color: #ed6a5a;
    font-weight: 700;
    margin: 0;
    font-size: 6rem;
    letter-spacing: -0.1rem;
    line-height: 4.8rem;

    @media (max-width: 40rem) {
      padding-right: 1rem;
      margin-top: -2rem;
      font-size: 3rem;
    }
  }

  .profile-text {
    text-shadow: 2px 2px 5px #000000;
    @media (max-width: 40rem) {
      margin-top: 5rem;
      padding: 0;
    }
  }
`;

const Introduction = styled.div`
  left: 15%auto;
  margin-right: 30%;
  max-width: 200rem;
  transition: color 0.5s;
  color: #fff;

  .story {
    opacity: 0.8;
    padding-left: 0.5rem;
    font-size: 1.9rem;
    font-weight: 200;
    box-sizing: border-box;
    text-shadow: 2px 2px 2px #000000;

    @media (max-width: 40rem) {
      margin-bottom: 3rem;
      padding-top: -10rem;
      padding-left: 2rem;
      font-size: 1.2rem;
      text-align: left;
      letter-spacing: 0rem;
      max-width: 30rem;
    }
  }
`;

export default Home;

// &nbsp;
