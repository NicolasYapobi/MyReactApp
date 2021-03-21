import * as React from 'react';
import Container from 'react-bootstrap/Container';
import "../App.css";


class Page extends React.Component {
  render() {
    return (
        <Container className="p-3">
          <h1>My page</h1>
          <p>{this.props.location.state.text}</p>
          <img src={this.props.location.state.image_url} />
          <br></br>
          <button
            className="button"
            onClick={() => {this.props.history.push('/')}}>
            Go back
          </button>
        </Container>
    );
  }
}

export default Page;