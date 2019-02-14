import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Components
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';

// CSS Imports
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings}/>
        </Container>
      </div>
    );
  }
}

export default App;
