import * as React from 'react';
import logo from './logo.svg';
import Popup from 'reactjs-popup';
import './App.css';


const App = () => (
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
              Add your page
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

export default App;
