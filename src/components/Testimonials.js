import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Container>
      <h1>
        <div className="title">Testimonials</div>
      </h1>
      <Wrapper>
        <Text>
          <h2>
            <b>Andy Palmer Smith,</b>
            &nbsp;
            <i>Partner, Buro Loods</i>
          </h2>
          &nbsp;
          <p>
            <b>
              Patrick worked as a senior member of our team from June 2019 until
              May 2020. I had the pleasure to know Patrick as a creative and
              intelligent designer who is able to understand and resolve complex
              client needs. He was also able to manage his time well and meet
              tight deadlines when required. Patrick is an excellent
              communicator in both Dutch and English and enjoys sharing his
              opinions with others. He has very good software skills and a
              serious interest in typography.
            </b>
          </p>
          <p>
            We worked together successfully on several major retail branding
            projects for clients based in the Netherlands and also Thailand and
            Canada, where his international experience was really useful to the
            process. Patrick has very good social skills and cares about the
            people around him. He was a real asset to our team during his time
            with us. 
          </p>
          <i>
            I would like to recommend Patrick and wish him well in the future.
          </i>
        </Text>
      </Wrapper>
      &nbsp;
      <Wrapper>
        <Text>
          <h2>
            <b> Christopher Tjin,</b>
            &nbsp;
            <i>CEO, Christjin Jason</i>
          </h2>
          &nbsp;
          <p>
            <b>
              Patrick has worked on my project which entitled the developing of
              my jewelry logo, website, branding and typography in 2018. He has
              developed my logo for my jewelry company from start to finish with
              great ability to translate my vision and what my brand represents
              and stands for. It was a great delight working together with
              Patrick, his patience and his enthusiasm creating and exchanging
              ideas on what could work for my brand was truly inspiring.
            </b>
          </p>
          <p>
            His knowledge and professionalism in branding has exceeded far my
            expectations and needs, by completing every step of the project
            before the deadline. His flare and great taste has made my brand and
            logo instantly identifiable.Patrick to this day still continues to
            provide his expertise and services whenever needed on going projects
            with the same dedication and passion.
          </p>
          <i>
            I would highly recommend him recommend him and I have no doubt you
            would have any regrets.
          </i>
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 70rem;
  top: 60rem;
  position: absolute;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  background-position: center;

  @media (max-width: 64rem) {
    align-items: center;
    justify-content: center;
    margin-top: 25rem;
    height: 70rem;
    width: 74%;
    margin-left: 10%;
    margin-right: 10%;
    background-position: center;
  }

  @media (max-width: 48rem) {
    margin-top: 30rem;
    height: 77rem;
  }

  @media (max-width: 40rem) {
    align-items: center;
    justify-content: center;
    height: 125rem;
    margin-left: 10%;
    margin-right: 10%;
    max-width: 15rem;
    margin-top: 55rem;
    margin-bottom: 5rem;
  }
  .title {
    opacity: 0.8;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 5px #000000;
    @media (max-width: 64rem) {
      margin-top: 0rem;
      @media (max-width: 40rem) {
        margin-top: 3rem;
      }
    }
  }

  h1 {
    font-size: 3rem;
    padding-top: 6rem;
    padding-bottom: 2rem;

    @media (max-width: 40rem) {
      padding-left: 2rem;
      font-size: 2rem;
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
  i {
    opacity: 0.8;
    font-size: 1rem;
    font-weight: 100;
  }
`;

const Text = styled.div`
  width: 43rem;
  color: #fff;
  justify-content: center;

  @media (max-width: 40rem) {
    margin-top: 0rem;
  }
  @media (max-width: 40rem) {
    margin-top: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  color: #fff;
  line-height: 1.4rem;
  padding: 2rem;
  font-size: 1rem;
  font-weight: 200;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);

  @media (max-width: 64rem) {
    width: 100%;
    background-position: right;
  }
  @media (max-width: 48rem) {
    width: 34.3rem;
  }
  @media (max-width: 40rem) {
    width: 15rem;
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

export default Testimonials;
