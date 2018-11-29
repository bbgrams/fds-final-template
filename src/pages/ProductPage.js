import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';

export default class ProductPage extends Component {
  render() {
    // I4
    const { match } = this.props;
    const productId = match.params.productId;
    return (
      <div>
        <ProductDetail productId={productId} />
      </div>
    );
  }
}
