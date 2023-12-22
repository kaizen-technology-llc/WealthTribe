import React, {useState} from 'react';
import {
  Collapse,
  Dropdown,
  DropdownItem, DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
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
                <NavItem>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
                    <DropdownToggle caret>{activeAccount && activeAccount.displayName ? activeAccount.displayName : 'Unknown'}</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={handleLogoutRedirect}>Sign Out</DropdownItem>
                      <DropdownItem onClick={handleProfileEdit}>Edit Profile</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
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