import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser, UserConsumer } from '../contexts/UserContext';

export default function Header(props) {
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}

// I15
// 실무에서 PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 사용된다.
// I18
// header 를 넘겨주면서 key값도 넘겨줄수있게 함수형 컴포넌트로 만들어준다
// HeaderView는 UsesrConsumer에서 정보를 받아오므로 감싸준다.
