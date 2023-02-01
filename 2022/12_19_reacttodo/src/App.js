import React from 'react';
import { TodoCSS } from './App.module.css';
import { List } from './List.js';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {storeList: 'rwet'};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStore = this.handleStore.bind(this);
  }

  handleStore(event) {
    const input = event.target.value;
    this.setState({storeList: input});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

//FIND A WAY TO RESET TEXT INPUT

  render() {
    return (
      <div
      className = 'container'>
        <h1>To-Do List</h1>
        <form
        onSubmit={this.handleSubmit}
        action={'/'}
        id={'lists'}>
          <input
          onChange={this.handleStore}
          className = {'textbox'}
          type={'text'}
          value={this.state.storeList}/>
          <input
          type={'submit'}/>
          <input
          type={'reset'}
          value={'Clear List'}/>
        </form>
        <List listItem={this.state.storeList}/>
      </div>
    );
  }
}
