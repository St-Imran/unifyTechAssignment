import React, { Component, useEffect } from 'react';
import { addProductData, setSelectedVariant } from '../../actions';
import { connect } from 'react-redux';
import '../../App.css';
import ProductData from '../../db.json';

const _ProductItem = ({ product, dispatch }) => {
  const defaultVariant = (product.Variant.find((itemVariant) => itemVariant.type === 'default')) ?? product.Variant[0]
  const selectedVariant = product.selectedVariant
  useEffect(() => dispatch(setSelectedVariant(product.id, defaultVariant, true)), [])

  return selectedVariant ? (
    < div className="product-card border" key={product.id}>
      <div className="col-sm-3 border" style={{ background: selectedVariant.color }} >
      </div>
      <div className="col-sm-9 border">
        <div className="product-details">
          <h4>Product Name: {product.name}</h4>
          <h4>Brand Name: {product.brand}</h4>
          <h4>Cost:{selectedVariant.cost} </h4>
        </div>
        <div className="color-category">
          {product.Variant.map((itemVariant) => {
            const isActiveClass = (itemVariant.variationId === selectedVariant.variationId) ? "selected" : ""
            return (<div
              className={`swatches ${isActiveClass}`}
              onClick={() => dispatch(setSelectedVariant(product.id, itemVariant))}
              style={{ background: itemVariant.color }}
              key={itemVariant.variationId} />)
          })}
        </div>
      </div>
    </div>) : null
}

const mapStateToProps_productItem = (state) => ({
  selectedVariant: state.productReducer
})


const ProductItem = connect(mapStateToProps_productItem)(_ProductItem)

class Products extends Component {
  componentDidMount() {
    this.props.dispatch(addProductData(ProductData.data))
  }

  render() {
    return (
      <div className="product-container border">
        {this.props.productData.length && this.props.productData.map((item) => <ProductItem key={item.id} product={item} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { productData: state.productReducer.filteredData }
}

export default connect(mapStateToProps)(Products);