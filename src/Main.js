import React from 'react';
import Header from './Header';
import Book from './Book';
import Award from './Award';
import Activities from './Activities';
import Delux from './Delux';
import Winter from './Winter';
import News from './News';
import Footer from './Footer';

function Main() {
  return (
    <div>
        <Header></Header>
        <Book></Book>
        <Award></Award>
        <Activities></Activities>
        <Delux></Delux>
        <Winter></Winter>
        <News></News>
        <Footer></Footer>
    </div>
  )
}

export default Main;