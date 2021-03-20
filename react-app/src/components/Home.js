import * as React from 'react';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
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
    this.setState({text: event.target.value});
    console.log("TEXT: ", this.state.text);
  }

  handleURL(event) {
    this.setState({image_url: event.target.value});
    console.log("URL: ", this.state.image_url);
  }
  
  handleSubmit(event) {
    console.log(this.state.text);
  }
  
  render() {
    return (
      <Router>
        <div>
          <h1>Home page</h1>
          <Switch>
            {/* <Route exact path='/' component={App} /> */}
            {/* <Route path="/page" component={Page} /> */}
          </Switch>
            <Popup
              trigger={<button className="button"> Open Modal </button>}
              modal
            >
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="content">
                    {" "}
                    <form>
                      <label>
                        <input type="text" onChange={this.handleText} placeholder="Add your plain text"/>
                        <h1>OR</h1>
                        <input type="text" onChange={this.handleURL} placeholder=" Add your image's url"/>
                      </label>
                    </form>
                  </div>
                  <div className="actions">
                    <button 
                      className="button"
                      onClick={() => {
                        this.handleSubmit();
                        close();
                      }}
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
      </Router>
    );
  }
}
export default Home;