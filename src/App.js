import React, { Component } from 'react';
import Disclaimer from './components/disclaimer';
import PromoTable from './components/promo_table';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PromoTable />
        <Disclaimer />
      </div>
    );
  }
}

export default App;
