import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield, Image } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
      return (
      <div className="App">
          <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Secular One',fontSize: '25px' }} to="/">Vinden</Link>} scroll color='black'>
                        <Navigation >
                            <Link to="https://www.vinden.com/en/faq" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>FAQ</Link>
                            <Link to="/" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>Pricing</Link>
                            <Link to="/" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>About Vinden</Link>
                            <Link to="/" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>For Companies</Link>
                            <Link to="/Tracking" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One'}}>Tracking</Link>
                            <Link to="/map" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>Contact</Link>
                            <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search2"
                                expandable
                                expandableIcon="search"
                                style={{color: 'black'}}
                            />
                        </Navigation>
                    </Header>
                    <Drawer title="Vinden">
                        <Navigation>
                            <a href="#" style={{fontSize: '16px', color: 'black', fontFamily: 'Dancing Script' }}>FAQ</a>
                            <a href="#" style={{fontSize: '16px', color: 'black', fontFamily: 'Dancing Script' }}>Pricing</a>
                            <a href="#" style={{fontSize: '16px', color: 'black', fontFamily: 'Dancing Script' }}>About Vinden</a>
                            <a href="#" style={{fontSize: '16px', color: 'black', fontFamily: 'Dancing Script' }}>For Companies</a>
                            <a href="#" style={{fontSize: '16px', color: 'black', fontFamily: 'Dancing Script' }}>08 400 548 02</a>
                        </Navigation>
                    </Drawer>
                    <Main/>
                </Layout>
        </div>
    </div> 
    );
  }   
  }

export default App;

