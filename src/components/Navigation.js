import {Link} from "react-router-dom";
import React, { useState } from 'react';  import { MDBIcon} from 'mdbreact';
  import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';




const Navigation = (props) => {

    const [showNavExternal2, setShowNavExternal2] = useState(false);
    const [showNav, setShowNav] = useState(false);

        return (
            <>
            <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="logo"><h3>Cascade</h3></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/newsfeed'>Newsfeed</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
{/* 
             <div style={{ display: 'block', 
                  width: 900, 
                  padding: 30 }}>
      <Dropdown className="ms-auto">
        <Dropdown.Toggle >
        <MDBIcon icon='bars' fas />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">
            Home 
          </Dropdown.Item>
          <Dropdown.Item as ={Link} to="/newsfeed">
            Newsfeed
          </Dropdown.Item>
          <Dropdown.Item href="/about">
            About Us
          </Dropdown.Item>
          <Dropdown.Item href="/login">
            Login
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div> */}
          </>
        );      

}

export default Navigation;