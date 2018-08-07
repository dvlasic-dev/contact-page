import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import '../fonts.css';
import './app.css';

import LogoImg from '../assets/images/logo.svg';
import Navigation from './Navigation';

const Img = styled.img`
  width: 75px !important;
  height: 17px;
`;
const remove = {
  backgroundColor: 'transparent',
  border: '0',
  boxShadow: '0 0 0 0',
  margin: 0,
};
const StyledDiv = styled.div`
  @media only screen and (min-width: 1200px) {
    .ui.container {
      width: 1230px;
    }
  }
  margin-top: 7.92857rem;
  background-color: #15181c;
`;
const Copy = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Playfair Display';
  font-size: 0.857em;
  margin-top: 2.42857rem;
  span {
    margin-right: 0.571428rem;
  }
`;

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      navItems: [
        'Proizvodi',
        'Naša priča',
        'Lokacije',
        'Kontakt',
        'B2B',
        'Press',
      ],
    };
  }
  render() {
    return (
      <Router>
        <StyledDiv>
          <Container>
            <Segment.Group horizontal style={remove}>
              <Segment
                basic
                style={{
                  paddingLeft: 0,
                  marginTop: 4,
                  marginBottom: 6,
                }}
              >
                <React.Fragment>
                  <Menu style={remove}>
                    <Menu.Item style={{ paddingRight: 0 }}>
                      <Img src={LogoImg} alt="logo" />
                      <Navigation
                        items={this.state.navItems}
                        listClass={'footer-list'}
                        itemClass={'footer-item'}
                      />
                    </Menu.Item>
                  </Menu>
                </React.Fragment>
              </Segment>
              <Copy>
                <span>&copy;</span>Mlinar d.d.
              </Copy>
            </Segment.Group>
          </Container>
        </StyledDiv>
      </Router>
    );
  }
}

export default Footer;
