import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Container,
  Menu,
  Segment,
  Input,
  Icon,
  Dropdown,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import styled from 'styled-components';
import LogoImg from '../assets/images/logo.svg';
import SearchIcon from '../assets/images/search-24px.svg';

import Def from './Def';
import Contact from './Contact';
import Navigation from './Navigation';

const Img = styled.img`
  margin: 0.67711rem 0.67711rem 0 0;
`;
const IconSearch = styled.img`
  cursor: default;
  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0.3385rem;
  margin: 0;
  &:before: {
    left: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: -0.5em;
  }
`;
const InputDiv = styled.div`
  &&& input {
    width: 0 !important;
    margin: 0.71428rem 0 0 0 !important;
    padding: 0 1.0714rem 0 0 !important;
    color: white !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    transition: 0.4s width ease-in !important;
  }
  &&& input:focus {
    width: 180px !important;
    margin: 0.71428rem 0 0 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    border-bottom: 1px solid white !important;
    transition: 0.4s width ease-in !important;
  }
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
`;

const NavInput = () => (
  <InputDiv>
    <Input size="small" icon>
      <input />
      <Icon style={{ opacity: 1 }}>
        <IconSearch src={SearchIcon} />
      </Icon>
    </Input>
  </InputDiv>
);
const LangDropdown = () => (
  <Dropdown
    text="HR"
    icon={null}
    style={{
      color: 'white',
      fontFamily: 'Playfair Display',
    }}
  >
    <Dropdown.Menu style={{ borderRadius: 0 }}>
      <Dropdown.Item text="HR" />
      <Dropdown.Item text="EN" />
      <Dropdown.Item text="DE" />
    </Dropdown.Menu>
  </Dropdown>
);

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        'Proizvodi',
        'Naša priča',
        'Lokacije',
        'Kontakt',
        'Karijere',
        'Poslovanje',
      ],
    };
  }
  render() {
    return (
      <StyledDiv>
        <Router>
          <Container>
            <Segment.Group horizontal style={remove}>
              <Segment basic style={{ paddingLeft: 0 }}>
                <Img src={LogoImg} alt="logo" />
              </Segment>
              <Segment
                basic
                compact
                style={{
                  borderLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                }}
              >
                <Menu style={remove}>
                  <Menu.Item
                    position="right"
                    style={{ paddingRight: 0, paddingBottom: 0 }}
                  >
                    <React.Fragment>
                      <Navigation
                        items={this.state.navItems}
                        search={<NavInput />}
                        dropdown={<LangDropdown />}
                        listClass={'nav-list'}
                        itemClass={'nav-item'}
                      />
                    </React.Fragment>
                  </Menu.Item>
                </Menu>
              </Segment>
            </Segment.Group>
            <Route exact path="/" component={Def} />
            <Route path="/proizvodi" component={Def} />
            <Route path="/kontakt" component={Contact} />
          </Container>
        </Router>
      </StyledDiv>
    );
  }
}

export default Header;
