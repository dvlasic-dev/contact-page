import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import '../fonts.css';

import Navigation from './Navigation';
import CommentForm from './CommentForm';

const StyledDiv = styled.div`
  @media only screen and (min-width: 1200px) {
    .ui.container {
      width: 1230px;
    }
  }
`;
const Header = styled.h1`
  color: white;
  font-size: 2.286em;
  font-family: 'Playfair Display';
  margin-top: 8.5rem !important;
  margin-bottom: 0.2857rem;
`;
const Divider = styled.div`
  display: flex;
  margin-top: 0;
  margin-left: -142.9rem;
  width: 151.6rem;
  border-bottom: 2px solid #f9b601;
`;
const MenuBox = styled.div`
  width: 33.858rem;
  height: 36.572rem;
  font-size: 1.714em;
  background-color: #f9b601;
  margin-top: 7.75rem;
  margin-left: -6rem;
  padding-left: 6rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const MenuHeader = styled.h2`
  font-size: 1em;
  font-weight: 400;
  font-family: 'Playfair Display';
  line-height: 32px;
  color: #1d1f22;
  margin-right: 8.2857rem;
  margin-bottom: 2.0714rem;
  padding-top: 3.4286rem;
`;
const InfoList = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 1.143em;
  font-family: 'Playfair Display';
  color: white;
  margin-top: 8rem;
  li {
    margin-top: 1.143rem;
  }
  span {
    font-family: 'Open Sans';
    opacity: 0.5;
  }
  li:nth-child(1) span {
    margin-left: 2.5rem;
  }
  li:nth-child(2) span {
    margin-left: 4.429rem;
  }
  li:nth-child(3) span {
    margin-left: 3rem;
  }
`;

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        'Komentar',
        'Reklamacije',
        'Prijava za posao',
        'Prijva za praksu',
        'Prijava za sezonski rad',
        'Franšize',
        'Veleprodaja',
      ],
    };
  }
  render() {
    const { match } = this.props;
    return (
      <StyledDiv>
        <Router>
          <div style={{ display: 'flex', flex: 1 }}>
            <Container>
              <Header> Kontakt</Header>
              <Divider />
              <MenuBox>
                <MenuHeader>
                  Odaberite vrstu kontakta koji želite ostvariti:
                </MenuHeader>
                <Navigation
                  items={this.state.navItems}
                  sub={true}
                  matching={match.url}
                  listClass={'menu-list'}
                  itemClass={'menu-item'}
                />
              </MenuBox>
              <div>
                <InfoList>
                  <li>
                    Adresa: <span>adresa adresa 34, Zagreb</span>
                  </li>
                  <li>
                    Tel: <span>01/245-34-54</span>
                  </li>
                  <li>
                    Email: <span>email@email.com</span>
                  </li>
                </InfoList>
              </div>
            </Container>
            <Container>
              <Route
                path={`${match.url}/komentar`}
                component={CommentForm}
              />
            </Container>
          </div>
        </Router>
      </StyledDiv>
    );
  }
}

export default Contact;
