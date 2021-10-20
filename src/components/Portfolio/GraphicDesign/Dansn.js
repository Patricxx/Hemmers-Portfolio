import React from "react";
import styled from "styled-components";

import img from "../../../assets/site_files/graphic_design/dansn/Dansn_Cover.jpg";
import img1 from "../../../assets/site_files/graphic_design/dansn/Dansn_Glass_Door_Logo_Mockup.jpg";
import img2 from "../../../assets/site_files/graphic_design/dansn/Dansn_Showcase.jpg";
import img3 from "../../../assets/site_files/graphic_design/dansn/Dansn_Mock-up_iMac2.jpg";
import img4 from "../../../assets/site_files/graphic_design/dansn/Dansn_Magazine.jpg";
import img5 from "../../../assets/site_files/graphic_design/dansn/Dansn_Magazine2.jpg";
import img6 from "../../../assets/site_files/graphic_design/dansn/Dansn_A4_Brochure.jpg";
import img7 from "../../../assets/site_files/graphic_design/dansn/Dansn_A4_Brochure2.jpg";

const Dansn = () => {
  return (
    <Hero className="item" style={{ backgroundImage: `url(${img})` }}>
      <Container>
        <Text>
          <h1>
            <div className="title">DANSN</div>
          </h1>
          <h3 className="slogan">WOOD INTERIOR SOLUTIONS PARTNER</h3>
          &nbsp; &nbsp;
          <TextWrapper>
            <h2>
              <div className="subtitle">Client</div>
            </h2>
            &nbsp;
            <p>
              DANSN International Ltd. manufactures wooden furnishing and
              specializes in interior fit-out projects. Our portfolio covers
              luxury hotels, apartments, and other fine private and public
              facilities. With proven capability in project design & operation
              as well as extensive relationships with suppliers worldwide, we
              proudly set the standard of excellence in interior implementation.
            </p>
            <p>
              As a professional turn-key solution provider, DANSN offers
              tailored yet affordable one-stop project services from initial
              requirements to design management & manufacturing all the way to
              handover and on-going maintenance. Along the process, DANSN is
              dedicated to customer-orientation, helping clients achieve optimum
              cost-efficiency without compromising on quality.
            </p>
            &nbsp;
            <h2>
              <div className="subtitle">Services</div>
            </h2>
            &nbsp;
            <p>
              • Storyline • Copywriting • Social Media • Website Repositioning •
              SEO • Stand • Magazine • Catalogue
            </p>
            &nbsp;
            <h2>
              <div className="subtitle">Challange</div>
            </h2>
            &nbsp;
            <p>Text 3</p>
            <h2>
              <div className="subtitle">Solution</div>
            </h2>
            &nbsp;
            <p>
              At Orange Branding i redesigned their whole website and
              restructured the wireframe. Applied more visual content and
              improved the UI and UX of the website. Besides the website project
              i created a line of visual recognition from the website to their
              two new brochures that i designed in the same scope
            </p>
          </TextWrapper>
        </Text>
        <Picture1 />
        <Picture2 />
        <Picture3 />
        <Picture4 />
        <Picture5 />
        <Picture6 />
        <Picture7 />
      </Container>
    </Hero>
  );
};

const Hero = styled.div`
  margin-top: -4rem;
  width: 100%auto;
  height: 40rem;
  border-radius: 0 0 10px 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 28rem;
  }
  @media (max-width: 40rem) {
    height: 25rem;
  }
`;

const Container = styled.div`
  flex: 1;
  max-width: 100%;
  margin-left: 18%;
  margin-right: 18%;
  padding-top: 10rem;
  height: 150vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 40rem) {
    margin-left: 0;
    margin-right: 0;
  }
  .title {
    opacity: 0.8;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 5px #000000;
    @media (max-width: 64rem) {
      margin-top: -5rem;
      @media (max-width: 40rem) {
        margin-top: 0rem;
      }
    }
  }
  .slogan {
    opacity: 0.8;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 5px #000000;
    @media (max-width: 64rem) {
      margin-top: -4rem;
      @media (max-width: 40rem) {
        margin-top: 0rem;
      }
    }
  }
  .subtitle {
    opacity: 0.8;
    color: #fff;
    text-align: left;
  }
  h1 {
    text-align: left;
    font-size: 8rem;
    padding-top: 8rem;
    padding-bottom: 4rem;

    @media (max-width: 40rem) {
      font-size: 4.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
    color: #ed6a5a;
  }
  p {
    padding-right: 3rem;
    line-height: 1.6rem;
    font-size: 1rem;
    font-weight: 200;
  }

  b {
    color: #ed6a5a;
  }
`;

const Text = styled.div`
  color: #fff;
  line-height: 1.6rem;
  padding: 2rem;
  font-size: 1.4rem;
  font-weight: 200;

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
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    color: tomato;
  }
`;

const TextWrapper = styled.div`
  padding-top: 15rem;
  @media (max-width: 64rem) {
    margin-top: -5rem;
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    padding-top: 10rem;
    margin-left: 3rem;
    margin-right: 1rem;
  }
`;

const Picture1 = styled.div`
  background-image: url(${img1});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 25rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    margin-top: 40rem;
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-top: 75rem;
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture2 = styled.div`
  background-image: url(${img2});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture3 = styled.div`
  background-image: url(${img3});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture4 = styled.div`
  background-image: url(${img4});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture5 = styled.div`
  background-image: url(${img5});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture6 = styled.div`
  background-image: url(${img6});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

const Picture7 = styled.div`
  background-image: url(${img7});
  margin-top: 1.5rem;
  max-width: 100%;
  height: 50rem;
  margin-bottom: 10rem;
  justify-content: center;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  @media (max-width: 64rem) {
    height: 25rem;
  }
  @media (max-width: 48rem) {
    height: 20rem;
  }
  @media (max-width: 40rem) {
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    height: 12rem;
  }
`;

export default Dansn;
