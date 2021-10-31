import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  
  render() { 
    return (
        <div className="container">
        <h1 className="nm-3">Orders</h1>
        <div className="row mb-3">
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="new order"/>
          </div>
          <div className="col-auto">
            <button id="addOrder" className="btn btn-primary">Add</button>
          </div>
        </div>
        <div id="orders">
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input"/>
            Some order
          </label>
          <button type="button" class="btn-close" aria-label="Close" style={{fontSize: 10}}></button>
        </div>
      </div>
      </div>
    );
  }
}
