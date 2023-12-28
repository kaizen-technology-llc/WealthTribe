import React, {useState} from 'react';
import {
  Collapse,
  UncontrolledDropdown,
  DropdownItem, DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink, NavbarText
} from 'reactstrap';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest, b2cPolicies } from '../authConfig';
import './NavMenu.css';

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen((prevState) => !prevState);

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
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container
                light>
          <NavbarBrand tag={Link} to="/"><img src="img/logo.png" alt="WealthTribe.AI"/></NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch&nbsp;data</NavLink>
              </NavItem>
              <AuthenticatedTemplate>
                <UncontrolledDropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropDown}>
                  <DropdownToggle nav><Gravatar className="rounded-circle" size="25" email={activeAccount && activeAccount.username ? activeAccount.username : 'Unknown'} /></DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem text><NavbarText>{activeAccount && activeAccount.username ? activeAccount.username : 'Unknown'}</NavbarText></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={handleLogoutRedirect}>Sign Out</DropdownItem>
                    <DropdownItem onClick={handleProfileEdit}>Edit Profile</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" onClick={handleLoginRedirect}>Sign In</NavLink>
                </NavItem>
              </UnauthenticatedTemplate>
            </ul>
          </Collapse>
        </Navbar>
      </header>
  );
}