import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  reverseString(str) {
    var strArr = str.split("");
    var reversedArr = strArr.reverse();
    var reversedStr = reversedArr.join("");
    return reversedStr;
  }

  arrayLength(arr) {
    return arr.length;
  }

  render() {
    return (
      "Testy"
    );
  }
}

export default App;