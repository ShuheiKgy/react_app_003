import React, {Component} from 'react';
import SwitchFlag from './switchflag';
import ViewFlagValue from './viewflagvalue';

class App extends Component {
  constructor() {
    super();
    this.handleUpdateFlag = this.handleUpdateFlag.bind(this);
    this.state = {
      flag: false
    }
  }

  handleUpdateFlag() {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return(
      <div>
        <SwitchFlag handleUpdateFlag={this.handleUpdateFlag} />
        <ViewFlagValue flag={this.state.flag} />
      </div>
    );
  }
}

export default App;