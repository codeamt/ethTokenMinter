import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Modal from './components/Modal';
import Header from './components/Header';
import Panel from './components/Panel';
import TokensPage from './TokensPage';
import stores from './stores';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <Header />
          <Panel />
          <Modal />
          <TokensPage />
        </div>
      </Provider>
    );
  }
}

export default App;
