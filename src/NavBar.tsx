/* eslint-disable jsx-a11y/alt-text */
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Navbar } from 'react-bootstrap';



function myNavBar() {
  return (
        <><>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Brand href="#home">
        <img src="/Rolling-Stone-Logo.webp" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%', height: '300px' }}/>
      </Navbar.Brand></><p className="text-center mt-4 mb-4">Or right-aligned</p></>

        
      );
    }


export default myNavBar;