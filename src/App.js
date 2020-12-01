import React, { Component } from 'react';
import Filters from './modules/filters/Filters';
import Products from './modules/products/Products' 

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <Filters />
        </div>
        <div className="col-sm-9">
          <Products />
        </div>
      </div>
    )
  }
}


export default App;