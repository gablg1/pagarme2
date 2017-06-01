import React, { Component } from 'react';

class TransactionsIndex extends Component {
  render() { return require('./index_view.jsx').apply(this); }

  constructor(props) {
    super(props);
    this.state = {transactions: [
        {id:3, description: 'Umbrella at TJ macs'},
        {id:5, description: 'Winner winner chicken dinner'}
    ]};
  }
};

export default TransactionsIndex;
