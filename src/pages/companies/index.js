import React, { Component } from 'react';

class CompaniesIndex extends Component {
  render() { return require('./index_view.jsx').apply(this); }

  constructor(props) {
    super(props);
    this.state = {
        users: [
            {id:0, name: 'John'},
            {id:1, name: 'King Arthur'}
        ],
        inputName: '',
        lastId: 1
    };
  }

  linkState(prop) {
      return {
          value: this.state[prop],
          requestChange: (val) => { this.setState({[prop]: val});}
      }
  }

  addUser() {
      const newUsers = this.state.users.concat({id:this.state.lastId + 1, name:this.state.inputName});
      this.setState({
          inputName: '',
          users: newUsers,
          lastId: this.state.lastId + 1
      });
  }

  deleteUser(user_id) {
      return () => {
          this.setState({
              users: this.state.users.filter((u) => (u.id != user_id))
          });
      };
  }
};

export default CompaniesIndex;
