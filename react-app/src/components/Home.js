import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../global.js";
import "../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      image_url: '',
      pages: [
        {
          id: 0,
          text: ''
        }
      ],
    };
    this.handleText = this.handleText.bind(this);
    this.handleURL = this.handleURL.bind(this);
  }

  handleText(event) {
    this.setState({text: event.target.value});
  }

  handleURL(event) {
    this.setState({image_url: event.target.value});
  }
  
  navigate() {
    this.props.history.push({
      pathname: '/page'+global.nb_page,
      state: {
        text: this.state.text,
        image_url: this.state.image_url,
      },
    });
  }

  handleSubmit(event) {
    global.nb_page += 1;
    let page = this.state.pages;
    page.push({id: global.nb_page, text: this.state.text});
    global.pages = page;
    this.setState({pages: page});    
  }
  
  componentDidMount() {
    let pages = global.page;
    this.setState({pages: this.state.pages});
  }

  render() {
    return (
      <Router>
        <Container className="p-3">
          <Jumbotron>
            <div>
              <h1>My React App</h1>
              <h3>Click the button to create your page</h3>
            </div>
              <Popup
                trigger={<button className="button"> Open </button>}
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
                      <Button
                        type="button"
                        className="button"
                        onClick={() => {
                          this.handleSubmit();
                          close();
                        }}
                      >
                        Create Page
                      </Button>
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
              <br></br>
              {global.nb_page != 0 && this.state.pages.map(page =>
                <li key={page.id}>
                  <a onClick={() => this.navigate()}>Page {page.id}</a>
                </li>
              )}
            </Jumbotron>
          </Container>
      </Router>
    );
  }
}
export default Home;