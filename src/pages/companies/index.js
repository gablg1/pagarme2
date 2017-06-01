import React, { Component } from 'react';

class CompaniesIndex extends Component {
  render() { return require('./index_view.jsx').apply(this); }

  constructor(props) {
    super(props);
    this.state = {users: [
        {id:3, name: 'John'},
        {id:5, name: 'King Arthur'}
    ]};
  }

  addUser() {
      window.alert('Implement me!');
  }

  deleteUser(user_id) {
      return () => { window.alert(`Trying to delete user with id ${user_id}. Implement me!`) };
  }
};

export default CompaniesIndex;
