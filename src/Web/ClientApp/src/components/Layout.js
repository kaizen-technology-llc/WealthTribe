import React, { Component } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <MDBContainer tag="main">
          {this.props.children}
        </MDBContainer>
      </div>
    );
  }
}
