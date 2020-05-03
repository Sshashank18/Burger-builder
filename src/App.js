import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';

class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <Burger />
        </Layout>
      </div>
    );
  }
}

export default App;
