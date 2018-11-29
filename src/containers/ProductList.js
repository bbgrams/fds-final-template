import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';
import api from '../api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }
  async componentDidMount() {
    const { data: products } = await api.get('/products');
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products } = this.state;
    // 1
    const productsList = products.map(p => ({
      // 소괄호, 중괄호 => 객체 바로 반환하기
      title: p.title,
      id: p.id,
      imgURL: p.mainImgUrl,
    }));
    return <ProductListView products={productsList} />;
  }
}
