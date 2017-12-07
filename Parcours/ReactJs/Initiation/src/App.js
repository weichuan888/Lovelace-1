import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Component/Test';

var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
      apiKey: "AIzaSyDrCopRcvNAh_TtlxfcgLUlVLV8z9eEvg4",
      authDomain: "todos-98779.firebaseapp.com",
      databaseURL: "https://todos-98779.firebaseio.com",
      storageBucket: "todos-98779.appspot.com",
      messagingSenderId: "713181246428"
});
var base = Rebase.createClass(app.database());

class App extends Component {

  state={todo:['faire la vaiselle']}

  myfunction(bonjour){
    var table = this.state.todo;
    table.push(bonjour);
    console.log(table);
    this.setState({todo: table});
  }

  componentDidMount(){
    base.syncState(`/`, {
      context: this,
      state: 'todo',
      asArray: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test fnc={this.myfunction.bind(this)} titi='hello' state={this.state.todo}/>
      </div>
    );
  }
}

export default App;
