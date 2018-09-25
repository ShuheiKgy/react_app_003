import React, {Component} from 'react';
import Hello from './hello';
import Profile from './profile';
import List from './list';
import Switch from './switch';
import Button from './button';

class App extends Component {
  render() {
    const listData = ['foo', 'bar', 'baz'];

    return (
      <div>
        <Hello name="Taro" />
        <Profile name="Taro" age="20" height="170" weight="65" love="Game" />
        <Profile name="Hanako" age="10" height="140" weight="35" love="Cats" />
        <List data={listData} />
        <Switch />
        <Button />
      </div>
    );
  }
}

export default App;