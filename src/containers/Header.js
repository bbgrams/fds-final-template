import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

export default withRouter(withUser(HeaderView));
//I20
// withRouter로 둘러준 컴포넌트는 match, history, location prop을 받게된다

// I15
// 실무에서 PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 사용된다.
// I18
// header 를 넘겨주면서 key값도 넘겨줄수있게 함수형 컴포넌트로 만들어준다
// HeaderView는 UsesrConsumer에서 정보를 받아오므로 감싸준다.
// => 만들었다가 withRouter사용을 위해 수정함
