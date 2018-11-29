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
    // 장바구니 항목 추가 시 호출되는 함수
    // 옵션 id와 수량을 인수로 넘겨야 함.
    onCreateCartItem: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      // I8
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),

      // 옵션을 바꾸었을 때 수량을 1으로 초기화 하고싶을 때 :  => 제어되는 컴포넌트의 장점
      quantity: 1,
    });
  }
  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const { quantity, selectedOptionId } = this.state;

    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * quantity;

    return (
      <div>
        옵션
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          {/* I8 */}
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        수량
        {/* I9 */}
        <input
          value={quantity}
          type="number"
          min="1"
          max="99"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>가격 : {totalPrice}</div>
        <button
          onClick={() => {
            const { selectedOptionId, quantity } = this.state;
            if (selectedOptionId === '') {
              alert('옵션을 선택하세요');
            } else if (quantity < 1) {
              alert('1 이상의 수량을 입력하세요.');
            } else {
              this.props.onCreateCartItem(selectedOptionId, quantity);
            }
          }}
        >
          장바구니에 담기
        </button>
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
