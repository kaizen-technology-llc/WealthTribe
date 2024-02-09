import React, {useState} from 'react';
import {
  MDBBtn,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem, MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink, MDBNavbarNav, MDBContainer, MDBIcon
} from 'mdb-react-ui-kit';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest, b2cPolicies } from '../authConfig';

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const {instance, inProgress} = useMsal();
  let activeAccount;

  if (instance) {
    activeAccount = instance.getActiveAccount();
  }

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect();
  };

  const handleProfileEdit = () => {
    if (inProgress === InteractionStatus.None) {
      instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
    }
  };

  return (
      <header>
        <MDBNavbar className="navbar-expand-md navbar-toggleable-md ng-white border-bottom mb-3" light>
          <MDBContainer>
          <MDBNavbarBrand tag={Link} to="/"><img src="img/logo.png" alt="WealthTribe.AI" height="70"/></MDBNavbarBrand>
          <MDBNavbarToggler aria-expanded='false' aria-label='Toggle navigation' onClick={toggleNavbar} >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={isOpen}>
            <MDBNavbarNav fullWidth={false} right>
              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} className="text-dark" to="/">Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} className="text-dark" to="/counter">Counter</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} className="text-dark" to="/diagnostics">Diagnostics</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} className="text-dark" to="/fetch-data">Fetch&nbsp;data</MDBNavbarLink>
              </MDBNavbarItem>
              <AuthenticatedTemplate>
                <MDBDropdown className="nav-item d-flex align-items-center">
                  <MDBDropdownToggle tag="a" className="hidden-arrow"><Gravatar className="rounded-circle" size={25} default="monsterid" email={activeAccount && activeAccount.username ? activeAccount.username : 'Unknown'} /></MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-menu-end border border-1">
                    <MDBDropdownItem className="dropdown-item"><span className='navbar-text'>{activeAccount && activeAccount.username ? activeAccount.username : 'Unknown'}</span></MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem className="dropdown-item" onClick={handleLogoutRedirect}>Sign Out</MDBDropdownItem>
                    <MDBDropdownItem className="dropdown-item" onClick={handleProfileEdit}>Edit Profile</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <MDBNavbarItem>
                  <MDBBtn color="secondary" onClick={handleLoginRedirect}>Sign In</MDBBtn>
                </MDBNavbarItem>
              </UnauthenticatedTemplate>
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
  );
}