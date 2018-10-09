import React, {Component} from 'react';
import SwitchFlag from './switchflag';
import ViewFlagValue from './viewflagvalue';
import InformationArea from './informationarea';
import FooComponent from './molecules/foocomponent';

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
        <InformationArea flag={this.state.flag} />
        <FooComponent />
      </div>
    );
  }
}

export default App;