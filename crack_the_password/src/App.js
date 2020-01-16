import React from "react";
import "./App.css";
import Chars from "./components/Chars";
import Sidebar from "./components/Sidebar";

import { ALL_CHARS } from "./lib/chars";
import { generatePassword, numbersArray, permutation } from "./lib/permutation";

class App extends React.Component {
  state = {
    chars: false,
    specialCharsArray: [],
    password: ""
  };

  componentDidMount() {
    const chars = ALL_CHARS;
    this.setState({
      chars
    });
  }

  handleChars = (newChar, status) => {
    const { specialCharsArray } = this.state;
    specialCharsArray.push(newChar);

    this.setState({ specialCharsArray: specialCharsArray });
  };

  handleGeneratePassword = () => {
    const { specialCharsArray } = this.state;
    const concatArray = [...numbersArray, ...specialCharsArray];
    const password = generatePassword(concatArray);

    this.setState({
      password
    });

    const correctPassword = permutation(concatArray).filter(
      item => item === password
    );

    console.log(correctPassword);
  };

  render() {
    const date = new Date();
    const year = date.getFullYear();

    return (
      <div className="App">
        <header>Crack the password</header>
        <main>
          {this.state.chars && (
            <Chars chars={this.state.chars} handleChars={this.handleChars} />
          )}
          <Sidebar
            specialCharsArray={this.state.specialCharsArray}
            handleGeneratePassword={this.handleGeneratePassword}
            password={this.state.password}
          />
        </main>
        <footer>datamonkeys.ai {year}</footer>
      </div>
    );
  }
}

export default App;
