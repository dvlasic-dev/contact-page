import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import '../fonts.css';

import LogoImg from '../assets/images/logo.svg';

const List = styled.ul`
  font-size: 1.15em;
  margin-top: -0.0805rem;
  margin-bottom: 0;
  list-style: none;
  padding-left: 4.57142rem;
  li:last-child a {
    color: white !important;
  }
`;
const ListItem = styled.li`
  display: inline-block;
  margin-right: 2.2857rem;
  a {
    color: rgba(255, 255, 255, 0.4) !important;
    line-height: 24px;
    font-family: 'Playfair Display';
  }
`;
const Img = styled.img`
  width: 75px !important;
  height: 17px;
`;

const remove = {
  backgroundColor: 'transparent',
  border: '0',
  boxShadow: '0 0 0 0',
  margin: 0
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

function Footer() {
  return (
    <Router>
      <StyledDiv>
        <Container>
          <Segment.Group horizontal style={remove}>
            <Segment
              basic
              style={{ paddingLeft: 0, marginTop: 4, marginBottom: 6 }}
            >
              <React.Fragment>
                <Menu style={remove}>
                  <Menu.Item style={{ paddingRight: 0 }}>
                    <Img src={LogoImg} alt="logo" />
                    <List>
                      <ListItem>
                        <Link to="/proizvodi">Proizvodi</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/proizvodi">Naša priča</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/proizvodi">Lokacije</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/kontakt">Kontakt</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/proizvodi">Karijere</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/proizvodi">B2B</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/proizvodi">Press</Link>
                      </ListItem>
                    </List>
                  </Menu.Item>
                </Menu>
              </React.Fragment>
            </Segment>
            <Segment basic compact style={{ borderLeft: 0, paddingRight: 0 }} />
            <Copy>
              <span>&copy;</span>Mlinar d.d.
            </Copy>
          </Segment.Group>
        </Container>
      </StyledDiv>
    </Router>
  );
}

export default Footer;
