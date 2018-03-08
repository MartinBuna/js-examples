import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [1, 2]
    };
  }

  addTask() {
    var tasks = this.state.tasks;
    var maxNumber = tasks.length > 0
      ? Math.max(...tasks) + 1
      : 1;
    const newTasks = tasks.concat([maxNumber]);
    this.setState({tasks: newTasks});
  }

  removeTask(i) {
    let newTasks = this
      .state
      .tasks
      .slice();
    newTasks.splice(i, 1);
    this.setState({tasks: newTasks});
  }

  render() {

    const tasks = this
      .state
      .tasks
      .map((task, i) => (
        <div key={task}>
          {"úkol " + task}
          <button onClick={() => {
            this.removeTask(i)
          }}>-</button>
        </div>
      ));

    return (
      <div>
        <CSSTransitionGroup
          transitionName="task"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {tasks}
        </CSSTransitionGroup>
        <button onClick={() => {
          this.addTask()
        }}>{"Přidat nový"}</button>
      </div>
    );
  }
}

export default App;
