import * as React from 'react';

class Page extends React.Component {
  render() {
    console.log(this.props.location.state);
    return (
        <div>
          <h1>My page</h1>
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