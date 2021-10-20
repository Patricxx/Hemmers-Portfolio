import React from "react";
import styled from "styled-components";

import Testimonials from "./Testimonials";
import img from "../assets/images/Patrick2_BW.jpg";

const About = () => {
  return (
    <Hero className="item" style={{ backgroundImage: `url(${img})` }}>
      <Container>
        <h1>
          <div className="title">About</div>
        </h1>
        <Wrapper>
          <Text>
            <h2>
              Hi, I'm <b>Patrick</b>
            </h2>
            <p>(INFJ-A/INFJ-T)</p>
            &nbsp;
            <p>
              <b>
                What I love? Listening to people, watching people, analyzing and
                observing people. People are the driving force to create things.
                What I do and who I am? A designer with passion for his
                profession! With a newly acquired love of the digital. Why; the
                blood crawls where it can’t go, it’s deep within my core to
                improve or make life pleasant by creating beautiful things. I
                create these best by intensively listening to the customer.
                There is often a lot of noise on the line from third parties, or
                there is non who listened carefully to the customer.
              </b>
            </p>
            <p>
              Because of my 20 years of experience and passion for my profession
              I test the status quo. Because I listen intensively to the wishes
              of the customer and therefore the ‘pure’ needs of the customer, in
              the field of Front-End, UI&UX and Design in general, i’am able to
              map them. With that I can fulfill these pure needs and wishes who
              are imbued and charged with their emotions, and translate these
              into concrete solutions that match their explicit wishes and
              needs.
            </p>
            <p>
              My passion and love for design, art, furniture, interior,
              architecture and philosophy goes deep. My inspiration i get from
              the little things, the most strangest to the most common things.
              Every new project is a new challenge on its own and there is a
              tailored solutions for every problem. And every day I try to
              approach live with a positive attitude an open mind.
            </p>
            <p>
              Since I've been working in the design field I have developed
              myself in the broad sense of design , always exploring and open
              for new ideas and visions of others. Thats why I love to
              collaborate with others to create beautiful designs and bring a
              design to a higher level.
            </p>
            <p>
              With 20 years of extensive experience in graphic design, also
              furniture, interior design, and up-coming to ad
              Front-end-Developing and later UI&UX experiences to this list.
            </p>
            &nbsp;
            <p>
              <strong>
                Let grab a cup of coffee and see what we can do for each
                other...
              </strong>
            </p>
          </Text>
        </Wrapper>
      </Container>
      <Testimonials />
    </Hero>
  );
};

const Hero = styled.div`
  margin-top: -4rem;
  width: 50%;
  margin-right: 50%;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 0px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);

  @media (max-width: 64rem) {
    height: 180vh;
    background-position: -300px 0px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 48rem) {
    background-position: 0px 0px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 40rem;
  }
  @media (max-width: 40rem) {
    background-position: 0px 0px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 20rem;
  }
`;

const Container = styled.div`
  flex: 1;
  position: absolute;
  max-width: 50rem;
  justify-content: center;
  margin-left: 65rem;
  background-position: right;
  margin-top: 5rem;

  @media (max-width: 64rem) {
    height: 88rem;
    max-width: 23rem;
    margin-left: 32rem;
    background-position: right;
  }
  @media (max-width: 48rem) {
    height: 120rem;
    margin-left: 10%;
    margin-right: 10%;
    max-width: 35rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 40rem) {
    height: 120rem;
    margin-left: 10%;
    margin-right: 10%;
    max-width: 15rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .title {
    opacity: 0.8;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 5px #000000;
    @media (max-width: 64rem) {
      margin-top: 0rem;
    }
    @media (max-width: 48rem) {
      margin-top: 18rem;
    }
    @media (max-width: 40rem) {
      margin-top: 3rem;
    }
  }

  h1 {
    font-size: 3rem;
    padding-top: 6rem;
    padding-bottom: 2rem;

    @media (max-width: 48rem) {
      padding-left: 2rem;
      font-size: 5.5rem;
      padding-top: 4rem;
    }

    @media (max-width: 40rem) {
      padding-left: 2rem;
      font-size: 4.5rem;
      padding-top: 4rem;
    }
  }

  h2 {
    opacity: 0.8;
  }
  b {
    opacity: 0.8;
    color: #ed6a5a;
  }
`;

const Text = styled.div`
  width: 43rem;
  color: #fff;
  justify-content: center;
  @media (max-width: 40rem) {
    margin-top: 0rem;
  }
  @media (max-width: 48rem) {
    margin-top: 6rem;
  }
  @media (max-width: 40rem) {
    margin-top: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  grid-gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  color: #fff;
  line-height: 1.4rem;
  padding: 2rem;
  font-size: 1rem;
  font-weight: 200;
  @media (max-width: 64rem) {
    width: 100%;
    background-position: right;
  }
  @media (max-width: 40rem) {
    font-size: 1rem;
    padding: 1.5rem;
    font-weight: 200;
  }

  p {
    opacity: 0.8;
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    opacity: 0.8;
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    color: tomato;
  }
`;

export default About;
