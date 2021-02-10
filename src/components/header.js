import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { logo } from "/src/images/gatsby-icon.png"
import { menuData } from "./../data/MenuData"
import { Button } from './Button';
import Image from "../assets/images/logo.svg"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/"> <img src={Image} alt="logo"/></NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" big="true" round="true" to="/contacto">Presupuesto</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: all 200ms ease-in;
  margin: 0 1vw;
  position: relative;  
  cursor: pointer;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #a85be3;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #a85be3;
    ::after {
      width: 100%;
    }
  }
  

`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }

`

const NavBtn = styled.div `
display:flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
    display: none;
  }
`


