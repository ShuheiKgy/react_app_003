import React, {Component} from 'react';
import Hello from './hello';
import Profile from './profile';

class App extends Component {
  render() {
    return(
      <div>
        <Hello name="Taro" />
        <Profile name="Taro" age="20" love="Game" />
        <Profile name="Hanako" age="10" love="Cats" />
      </div>
    );
  }
}

export default App;