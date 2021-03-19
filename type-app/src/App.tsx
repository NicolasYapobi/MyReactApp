import * as React from 'react';
import logo from './logo.svg';
import Popup from 'reactjs-popup';
import './App.css';

interface IApps {
  value: string;
  url: string;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.props.value);
  }
  
  render() {
    return (
      <div>
        <h1>Home page</h1>
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
          >
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  <form>
                    <label>
                      <input type="text" onChange={this.handleChange} placeholder="Add your plain text"/>
                    </label>
                  </form>
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
      </div>
    );
  }
}

export default App;
