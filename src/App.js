import React, { Component } from 'react';
import './App.css';
import logo from "./share.jpg"
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Launches from './Launches';
import {BrowserRouter as Router , Route} from "react-router-dom"
import Launch from "./Launch.js"



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {

  render() { 
  return (
    <ApolloProvider client={client}>
      <Router>

      <div className="container">
      <img src = {logo} alt = "SpaceX" style = {{width : 500, display : 'block' , margin: 'auto'}}/>
      <Route exact path="/" component={Launches}/>
      <Route exact path= "/launch/:flight_number" component= {Launch}/>
    </div>

      </Router>

    </ApolloProvider>

  );
}
}

export default App;
