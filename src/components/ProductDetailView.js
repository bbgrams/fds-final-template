import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
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
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    return (
      <div>
        <select>
          {options.map(o => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
