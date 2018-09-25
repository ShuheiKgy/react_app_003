import React, {Component} from 'react';
import Hello from './hello';
import Profile from './profile';
import List from './list';
import Switch from './switch';

class App extends Component {
  render() {
    const listData = ['foo', 'bar', 'baz'];

    return(
      <div>
        <Hello name="Taro" />
        <Profile name="Taro" age="20" love="Game" />
        <Profile name="Hanako" age="10" love="Cats" />
        <List data={listData} />
        <Switch />
      </div>
    );
  }
}

export default App;