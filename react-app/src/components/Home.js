import * as React from 'react';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../global.js";
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
    console.log(pages);
    this.setState({pages: this.state.pages});
    console.log("mount");
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Home page</h1>
          {this.state.pages.map(page =>
            <a key={page.id} onClick={() => this.navigate()}>
                Page {page.id}</a>)}
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