import React, {Component} from 'react';

import {connect} from 'react-redux';

import {changeState} from './redux';

// App.js
export class App extends Component {

  render() {
    return (
      <div>
        Click checkbox to change state
        <input
          type="checkbox"
          onChange={this.props.changeState}
          checked={this.props.checkboxState}/>
      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({checkboxState: state.checkboxState});

const mapDispatchToProps = {
  changeState
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;