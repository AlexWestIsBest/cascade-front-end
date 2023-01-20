import React, { useState } from 'react';
import { MDBIcon} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
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
          </>
        );      

}

export default Navigation;