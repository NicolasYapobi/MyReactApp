import * as React from 'react';

class Page extends React.Component {
  render() {
    console.log(this.props.location);
    return (
        <div>
          <h1>My page</h1>
          <p>{this.props.location.state.text}</p>
          <img src={this.props.location.state.image_url} />
          <button
            className="button"
            onClick={() => {this.props.history.push('/')}}>
            Go back
          </button>
        </div>
    );
  }
}

export default Page;