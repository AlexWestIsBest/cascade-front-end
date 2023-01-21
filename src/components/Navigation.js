import React, { useState } from 'react';
import { MDBIcon} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import Logout from './Logout';

const Navigation = ({ user, setUser}) => {

    const [showNav, setShowNav] = useState(false);

        return (
            <>
                <MDBNavbar expand='lg' light bgColor='white' className='navbar sticky-top navbar-light'>
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
                            <NavLink
                                to="/"
                                >Home
                            </NavLink>
                        {/* <MDBNavbarLink active aria-current='page' href='/'>
                            Home
                        </MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink
                                to="newsfeed"
                                >Newsfeed
                            </NavLink>
                        {/* <MDBNavbarLink href='/newsfeed'>Newsfeed</MDBNavbarLink> */}
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink
                                to="about"
                                >About Us
                            </NavLink>
                        {/* <MDBNavbarLink href='/about'>About Us</MDBNavbarLink> */}
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
                <Logout 
                    user={user}
                    setUser={setUser}
                />
            </MDBNavbar>

          </>
        );      

}

export default Navigation;