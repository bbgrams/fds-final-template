import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
      options: [
        // options의 형태는 아래처럼 생겼다.
        // {
        //   "id": 1,
        //   "productId": 1,
        //   "title": "hot",
        //   "price": 1500
        // }
      ],
    };
  }
  async componentDidMount() {
    // I4.
    const { productId } = this.props;
    const { data: product } = await api.get('/products/' + productId, {
      params: {
        _embed: 'options',
      },
    });

    this.setState({
      // ↓서버로부터 받은 데이터를 상태에 그대로 넣어주고 있디
      ...product,
      loading: false,
    });
  }

  // 서버측장바구니에 항목을 추가하는 함수
  // I10
  handleCreateCartItem = async (optionId, quantity) => {
    //...
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };
  render() {
    return (
      <div>
        <ProductDetailView
          onCreateCartItem={this.handleCreateCartItem}
          {...this.state}
        />
      </div>
    );
  }
}
