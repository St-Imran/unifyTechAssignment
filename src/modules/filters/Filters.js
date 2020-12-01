import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions'

class Filters extends Component {

  setColor = (color) => {
    const { dispatch } = this.props
    dispatch(setFilter(color))
  }

  render() {
    const { productData, selectedFilter } = this.props;
    const filter = [];
    if (productData.length) {
      productData.forEach((product) => {
        product.Variant.forEach((product_variant) => {
          if (!filter.includes(product_variant.color)) {
            filter.push(product_variant.color)
          }
        })
      })
    }
    return (
      <div className="border"> <h5 className="text-center">Filters</h5>
        <div className="border"></div>
        <h5 className="text-center">Colors</h5>
        {filter.map((color) => <li key={color}className="flex-box" onClick={() => this.setColor(color)}><div className="swatches" style={{ background: color }}></div><span className="capitalize" style={{ fontWeight: selectedFilter === color ? 700 : "normal" }}>{color}</span></li>)
        }

      </div >
    )
  }
}

const mapStateToProps = (state) => ({ productData: state.productReducer.data, selectedFilter: state.productReducer.selectedFilter })

export default connect(mapStateToProps)(Filters);