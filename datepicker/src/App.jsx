import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-date-picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = date => this.setState({date})

  render() {
    return (
      <div>
        <DatePicker onChange={this.onChange} value={this.state.date}/>
      </div>
    );
  }
}

export default App;