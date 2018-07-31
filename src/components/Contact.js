import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import '../fonts.css';

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
const List = styled.ul`
  list-style: none;
  margin-top: -0.08571rem;
  margin-bottom: 0;
`;
const ListItem = styled.li`
  width: 33.858rem;
  margin-left: -8.85711rem;
  a {
    display: block;
    font-size: 0.667em;
    font-family: 'Open Sans';
    text-decoration: 'none';
    color: #1d1f22 !important;
    padding-top: 0.85712rem;
    padding-bottom: 1.0714rem;
    padding-left: 5.9286rem;
  }
  a.active {
    padding-top: 1.4643rem;
    padding-bottom: 1.4286rem;
    background-color: #cc9706;
    margin-bottom: -0.2857rem;
  }
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

function Contact({ match }) {
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
              <List>
                <ListItem>
                  <NavLink to={`${match.url}/komentar`}>Komentar</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/reklamacije`}>Reklamacije</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/prijava-posao`}>
                    Prijava za posao
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/prijava-praksa`}>
                    Prijava za praksu
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/prijava-sezona`}>
                    Prijava za sezonski rad
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/fransize`}>Franšize</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={`${match.url}/veleprodaja`}>Veleprodaja</NavLink>
                </ListItem>
              </List>
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
            <Route path={`${match.url}/komentar`} component={CommentForm} />
          </Container>
        </div>
      </Router>
    </StyledDiv>
  );
}

export default Contact;
