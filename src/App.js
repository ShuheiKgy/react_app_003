import React, {Component} from 'react';
import SwitchFlag from './switchflag';
import ViewFlagValue from './viewflagvalue';

class App extends Component {
  constructor() {
    super();

    this.state = {
      flag: false
    }
  }

  render() {
    return(
      <div>
        <SwitchFlag />
        <ViewFlagValue flag={this.state.flag} />
      </div>
    );
  }
}

export default App;