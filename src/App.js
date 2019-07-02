import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu.js';
import Header from './Component/header/header';
import Section from './Component/section/section';
import Container from './Component/container/Container';
import Footer from './Component/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu></TopMenu>
        <Header></Header>
       
        <Container title="How to use props by class" vitri1="order-lg-2" anh="img/01.jpg" content="Here's the content 1"></Container>
        <Container title="News 2" anh="img/02.jpg" content="Here's the content 2"></Container>
        <Container title="News 3" vitri1="order-lg-2" anh="img/03.jpg" content="Here's the content 3"></Container>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
