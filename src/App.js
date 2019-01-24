import React, { Component } from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    username: 'Name1'
  }

  onValueChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  removeChar = (index) => {
    console.log(this.state.username);
    let userName = this.state.username.split('');
    //!!!
    userName.splice(index, 1)

    this.setState({
      username: userName.join('')
    })
  }

  render() {
    const style = {
      color: 'blue',
      border: '2px solid red'
    }
    const chars = this.state.username.split('').map((char, index) => <Char char={char} key={index} click={()=>this.removeChar(index)}/>);
    return (
      <div className="App">
        <h1>test</h1>
        {/* <Person></Person> */}
        <UserInput changeValue={this.onValueChangeHandler} name={this.state.username} style={style}></UserInput>
        <UserOutput output={this.state.username.length}></UserOutput>

        <Validation
         input={this.state.username}
         ></Validation>
        {chars}
      </div>
    );
  }
}

export default App;
