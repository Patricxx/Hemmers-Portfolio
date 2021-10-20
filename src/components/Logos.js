import React from "react";
import styled from "styled-components";

import img1 from "../assets/site_files/company_logo's/Wijkkrant_W.png";
import img2 from "../assets/site_files/company_logo's/Wegener_W.png";
import img3 from "../assets/site_files/company_logo's/1SocialMedia_W.png";
import img4 from "../assets/site_files/company_logo's/VH_W.png";
import img5 from "../assets/site_files/company_logo's/Hofweekblad_W.png";
import img6 from "../assets/site_files/company_logo's/Unaniem_W.png";
import img7 from "../assets/site_files/company_logo's/Ohpen_W.png";
import img8 from "../assets/site_files/company_logo's/BuroLoods_W.png";
import img9 from "../assets/site_files/company_logo's/Orange_Branding_W.png";
import img10 from "../assets/site_files/company_logo's/Music_All_W.png";
import img11 from "../assets/site_files/company_logo's/COC_TA_W.png";
import img12 from "../assets/site_files/company_logo's/Bridges.png";

const ImageStyles = () => (
  <Wrapper>
    <Grid>
      <Picture1 />
      <Picture2 />
      <Picture3 />
      <Picture4 />
      <Picture5 />
      <Picture6 />
      <Picture7 />
      <Picture8 />
      <Picture9 />
      <Picture10 />
      <Picture11 />
      <Picture12 />
    </Grid>
  </Wrapper>
);

const Wrapper = styled.div`
  opacity: 0.8;
  margin-top: -147rem;
  flex: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 45rem;
  margin-left: 20%;
  margin-right: 20%;
  background-position: center;
  @media (max-width: 64rem) {
    margin-top: -175rem;
    flex: 1;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 20rem;
    margin-left: 20%;
    margin-right: 20%;
    background-position: center;
  }
  @media (max-width: 40rem) {
    font-size: 1rem;
    padding: 1.5rem;
    font-weight: 200;
  }
`;

const Grid = styled.div`
  display: grid;
  padding: 1.5rem 1rem 1rem 1rem;
  padding-top: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 4;
  max-width: 400rem;

  @media (max-width: 64rem) {
    display: grid;
    padding: 1.5rem 1rem 1rem 1rem;
    padding-top: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2rem;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 4;
    max-width: 400rem;
  }
`;

const Picture1 = styled.div`
  background-image: url(${img1});
  margin-top: 2rem;
  width: 12rem;
  height: 3rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture2 = styled.div`
  background-image: url(${img2});
  margin-top: 2rem;
  width: 20rem;
  height: 3.8rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture3 = styled.div`
  background-image: url(${img3});
  margin-top: 2rem;
  width: 18rem;
  height: 4rem;
  display: block;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture4 = styled.div`
  background-image: url(${img4});
  margin-top: 2rem;
  width: 5.6rem;
  height: 4rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture5 = styled.div`
  background-image: url(${img5});
  margin-top: 2rem;
  width: 20rem;
  height: 1.8rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture6 = styled.div`
  background-image: url(${img6});
  margin-top: 2rem;
  width: 20rem;
  height: 2.6rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture7 = styled.div`
  background-image: url(${img7});
  margin-top: 2rem;
  width: 5rem;
  height: 7rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
  }
`;

const Picture8 = styled.div`
  background-image: url(${img8});
  margin-top: 2rem;
  width: 14rem;
  height: 3rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture9 = styled.div`
  background-image: url(${img9});
  width: 8rem;
  height: 12rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture10 = styled.div`
  background-image: url(${img10});
  margin-top: -2rem;
  width: 15rem;
  height: 7.9rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture11 = styled.div`
  background-image: url(${img11});
  margin-top: 1rem;
  width: 14.8rem;
  height: 5rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

const Picture12 = styled.div`
  background-image: url(${img12});
  margin-top: 1rem;
  width: 12rem;
  height: 6rem;
  display: block;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 48rem) {
    display: none;
  }
  @media (max-width: 40rem) {
    display: none;
  }
`;

export default ImageStyles;
