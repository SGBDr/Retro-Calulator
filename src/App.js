import './App.css';
import React from 'react';
import Banner from './components/Banner/Banner.jsx';
import { ThemeProvider } from './assets/context/themeProvider';
import { CalculProvider } from './assets/context/calculProvider'
import GlobalStyle from './assets/styles/styleGlobal';
import Screen from './components/screen/Screen';
import Button from './components/button/button';
import KeyBoard from './components/keyBoard/keyBoard';
import Calculator from './components/Calculator/Calculator';

export default class App extends React.Component{

  render(){
    return (
      <ThemeProvider>
        <GlobalStyle />
        <Banner />
        <Calculator />
      </ThemeProvider>
    )
  }

}
