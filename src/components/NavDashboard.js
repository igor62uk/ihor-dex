import React, { useState ,useEffect} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import {  useHistory, withRouter,Link} from "react-router-dom";
const NavDash = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;
  
  const handleLogoutClick = () => {
    props.logoutUser();
  }
  return (
    <div style={{boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Navbar light expand='md' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ className=' mr-0' style={{ padding:'0'}} >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" ><div className='col-xs-2'><img src='/assets/images/HeadLogo.png'height='40vh' width='40vh' style={{display:'inline-block',float:'left',maxHeight:'100%',width:'4vw',height:'4vw'}} /> </div><div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'1.5%'}} className='col-xs-3'> <h1 id='top' style={{fontSize:'2.7vw',alignContent:'center'}}>Top Cryptos</h1></div></NavbarBrand>
        <NavbarToggler /*style={{backgroundColor: 'blue',marginRight:'40px',width:'7vw',height:'7vw'}}*/ onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
            <NavItem>
              <NavLink style={{color:'blue',fontSize:'1.4rem',paddingRight:'2vw'}} className='me' href="/profile"><span color='violet' >My Profile</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'deepskyblue',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/AboutUs">About Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/learn"> Learn </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/collaborators"> Developers </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'red',fontSize:'1.4rem',paddingRight:'2vw'}} className='logoutt'  onClick={handleLogoutClick}>Logout </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavDash;