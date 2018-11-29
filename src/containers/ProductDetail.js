import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
    };
  }
  async componentDidMount() {
    const { data: product } = await api.get('/products/1');

    this.setState({
      ...product,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}
