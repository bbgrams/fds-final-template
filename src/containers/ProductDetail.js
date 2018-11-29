import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';

export default class ProductDetail extends Component {
  render() {
    const product = {
      id: 1,
      title: '민초',
      description: '마싱ㅅ어요',
      mainImgUrl: '',
      detailImgUrls: [''],
    };
    return (
      <div>
        <ProductDetailView {...product} />
      </div>
    );
  }
}
