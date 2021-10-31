import React, { Component } from 'react';
import store from './Redux/Store'
import './App.css';

export default class App extends Component {
  state = { 
    orders: [],
    searchLine: '',
    newOrder: ''
  };

  componentDidMount() {
      fetch ('https://my-json-server.typicode.com/victorblum/crud_app/orders')
      .then(response => response.json())
      .then(orders => {
        this.setState({ 
          orders: orders
        })
        const ordersList = orders;
          store.dispatch({
              type: 'ALL_ORDERS',
              payload: {
                ordersList: ordersList
              }
          });
      })
      .catch((err) => console.log(err));
  }

  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };

  addToList() {
    const customer = this.state.searchLine;
    if (customer) {
      fetch ('https://my-json-server.typicode.com/victorblum/crud_app/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: new Date().toLocaleDateString(), customer, trackingNo: '#', status: 'Shipped'})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ 
          newOrder: data
        })
      })
      .catch((err) => console.log(err));
    }
    this.setState({ 
      searchLine: ''
    })
  }

  deleteFromList(orderNo) {
    fetch (`https://my-json-server.typicode.com/victorblum/crud_app/orders/${orderNo}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
        if(data) {
          
        }
        })
    .catch((err) => console.log(err));
  }

  render() { 
    const { searchLine } = this.state;

    return (
        <div className="container">
        <h1 className="nm-3">Orders</h1>
        <div className="row mb-3">
          <div className="col-auto">
            <input 
            value={searchLine}
            onChange={this.searchLineChangeHandler}
            type="text" 
            className="form-control" 
            placeholder="new order"/>
          </div>
          <div className="col-auto">
            <button 
            id="addOrder" 
            onClick={() => this.addToList()}
            className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
        <div id="orders">
          <div className="form-check">
              <ul className="orders-list">
                {this.state.orders.map((item) => {
                  return <div className="order"> 
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" checked={item.status === "'Delivered'" ? true : false}/>
                      <li id={item.orderNo}> {item.orderNo} {item.date} {item.customer} {item.trackingNo} {item.status}
                        <span>
                          <button 
                          key={item.orderNo} 
                          onClick={() => this.deleteFromList(item.orderNo)}
                          type="button" 
                          className="btn-close" 
                          aria-label="Close" 
                          style={{fontSize: 10}}>
                          </button>
                        </span>
                        </li>
                    </label>
                  </div>
                })}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
