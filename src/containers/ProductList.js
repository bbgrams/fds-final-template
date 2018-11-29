import React, { Component } from 'react'
import ProductListView from '../components/ProductListView';

export default class ProductList extends Component {
  render() {
    const products = [
      {
        id : 1,
        title:'민트초코',
        imgURL : ''
      },
      {
        id : 2,
        title:'민티티초코',
        imgURL : ''
      }
    ]
    return (
      <ProductListView products={products} />
    )
  }
}
