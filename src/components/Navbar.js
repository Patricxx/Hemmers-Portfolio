import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Img from "../assets/logos/Hemmers_Logo_White.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen, scroll, location }) => {
  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    //console.log(node.current);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <Parent ref={node} scroll={scroll} location={location}>
      <Nav>
        <Logo scroll={scroll} location={location} exact to="/"></Logo>
        <Hamburger
          onClick={() => setIsOpen(!isOpen)}
          scroll={scroll}
          location={location}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink
            exact
            to="/about"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            About
          </MenuLink>
          <MenuLink
            exact
            to="/resume"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Resume
          </MenuLink>
          <MenuLink
            exact
            to="/portfolio"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Portfolio
          </MenuLink>
          <MenuLink
            exact
            to="/contact"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Contact
          </MenuLink>
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  transition: background-color 0.5s, box-shadow 0.5s;
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  left: 7%;
  right: 7%;
  top: 0;
  border-radius: 0 0 10px 10px;
  background: #000000;
  overflow: visible;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
`;

const Nav = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 85rem;
  margin: auto;
  @media (max-width: 64rem) {
    display: flex;
  }
  @media (max-width: 40rem) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  opacity: 0.9;
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 13px;
  &:active,
  &:hover {
    span {
      background: #ed6a5a;
    }
  }

  span {
    height: 3px;
    width: 28px;
    transition: background-color 0.5s;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 2px;
    margin-right: 1.5rem;
  }
  @media (max-width: 64rem) {
    margin-right: 1rem;
    display: flex;
  }
  @media (max-width: 40rem) {
    display: flex;
  }
`;

const MenuLink = styled(NavLink)`
  padding-right: 15%;
  padding: 1.1rem 0rem;
  width: 8rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: #fff;
  &.active {
    color: #ed6a5a;
  }
  font-weight: 600;
  font-size: 1rem;

  &:last-child {
    margin-right: 5rem;
  }

  @media (max-width: 64rem) {
    width: 100%;
    font-size: 5rem;
    text-align: center;
    justify-content: center;
    &:last-child {
      margin-right: 0rem;
    }
  }

  @media (max-width: 40rem) {
    width: 100%;
    font-size: 3rem;
    text-align: center;
    &:last-child {
      margin-right: 0rem;
    }
  }

  @media (min-width: 64rem) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: #ed6a5a;
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  @media (min-width: 20rem) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: #ed6a5a;
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  &:nth-last-child(2) {
    @media (max-width: 64rem) {
    }

    @media (max-width: 40rem) {
      margin-right: auto;
      box-sizing: content-box;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "55rem" : "0")};
    transition: max-height 0.2s ease-out;
    border-radius: 0 0 10px 10px;
    background: #000000;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 40rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "55rem" : "0")};
    transition: max-height 0.2s ease-out;
    border-radius: 0 0 10px 10px;
    background: #000000;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.3);
  }
`;

const Logo = styled(NavLink)`
  opacity: 0.8;
  background-image: url(${Img});
  width: 10rem;
  height: 3rem;
  display: fixed;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 7%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 64rem) {
    margin-top: 0.5rem;
    margin-left: 2rem;
  }
  @media (max-width: 40rem) {
    margin-top: 0.5rem;
    margin-left: 2rem;
  }
  padding: 0.5rem;
`;

export default Navbar;
