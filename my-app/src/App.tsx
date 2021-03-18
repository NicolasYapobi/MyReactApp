import * as React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="button">
          <button onClick={() => console.log('test')}>ADD</button>
        </div>
      </div>
    );
  }
}

export default App;
