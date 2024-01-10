import React, { Component } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <div className="bg-image background-people">
            <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <NavMenu />
                <MDBContainer tag="main">
                  {this.props.children}
                </MDBContainer>
            </div>
        </div>
    );
  }
}
