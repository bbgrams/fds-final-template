import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // {
      //   id : 1,
      //   title : '커피',
      //   imgURL : '...'
      // }
    ],
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            <div>{p.title}</div>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}

// 2.
export default withLoading(ProductListView);

// 상품 목록 데이터 배열을 받아서 화면을 그려주는 컴포넌트
