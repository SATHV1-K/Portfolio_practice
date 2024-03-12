import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

  main: {
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    display:"flex",
    flexDirection:"column",
    flexBasis:"1 1 100%"
  }})

function App() {
const classes=useStyles()
  let links = [{ href: '/about', text: "About" }, { href: '/skills', text: "Skills" }, { href: '/project', text: "Project" }, { href: '/resume', text: "Resume" }, { href: '/contact', text: "Contact" }]
function activeClassProp(active)

{
  console.log(active)
}

  return (
    <div className={classes.main}>
       <Header  />
       <Router/>
       <Footer  />
    </div>
  );
}

export default App;
