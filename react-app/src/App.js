import * as React from 'react';
import logo from './logo.svg';
import Popup from 'reactjs-popup';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      image_url: '',
    };
    this.handleText = this.handleText.bind(this);
    this.handleURL = this.handleURL.bind(this);
  }

  handleText(event) {
    this.setState({text: event.target.text});
  }
  handleURL(event) {
    this.setState({text: event.target.text});
  }
  
  handleSubmit(event) {
    console.log(this.state.text);
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
                      <input type="text" onChange={this.handleText} placeholder="Add your plain text"/>
                      <h1> OR </h1>
                      <input type="text" onChange={this.handleURL} placeholder="Add your image's url"/>
                    </label>
                  </form>
                </div>
                <div className="actions">
                  <button 
                    className="button"
                    onClick={() => this.handleSubmit()}
                  >
                    Create Page
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    Close modal
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
