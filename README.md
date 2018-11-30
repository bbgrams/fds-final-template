# FDS 최종 실습 템플릿 프로젝트

이 프로젝트에는 이제까지 다뤘던 라이브러리들이 모두 설치되어 있습니다. 팀 프로젝트의 기반 코드로 사용할 수 있습니다.

이 프로젝트에는 `semantic-ui-css`가 포함되어 있기 때문에 별도의 **CSS 리셋**을 적용하실 필요가 없습니다. Semantic UI를 삭제하고 싶으시면 아래와 같이 해 주세요.

1. `npm uninstall semantic-ui-css semantic-ui-react` 실행
2. `/src/index.js`와 `/.storybook/config.js`에서 `semantic-ui-css` import 구문 삭제

## 저장소 복사하기

**Github의 fork 기능으로는 계정 당 저장소 하나밖에 복사하지 못합니다.** Fork 기능을 사용하지 않고 프로젝트를 복사하려면, 아래의 절차대로 해 주세요.

1. 복사하고 싶은 저장소를 `git clone` 명령을 사용해 내려받는다.
1. 내려받은 폴더로 이동한 후, `rm -rf .git` 명령을 실행한다.
1. `git init`, `git add .`, `git commit -m "..."` 명령을 차례로 실행한다. (저장소 초기화)
1. Github에서 새 저장소를 만든 후, 위에서 초기화한 저장소를 푸시한다.

## 개발환경 환경변수 설정하기

`create-react-app`으로 만들어진 프로젝트는 자체적인 환경변수 사용법을 가지고 있습니다.

1. [여러 종류의 환경변수 설정 파일](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#what-other-env-files-can-be-used)을 사용할 수 있습니다. 보통의 경우 `.env.local`을 사용하면 됩니다.
1. 환경변수 이름은 반드시 `REACT_APP_`으로 시작해야 합니다.

## 프로젝트를 처음부터 설정하기

새로 만든 프로젝트를 지금 보고 계신 프로젝트와 똑같이 설정하시려면 아래의 내용을 따라하시면 됩니다.

### 1. create-react-app으로 프로젝트 생성

```
npx create-react-app <my-project-name>
cd <my-project-name>
```

### 2. ESLint, Prettier 설정

https://gist.github.com/seungha-kim/bdfa171962362f9308e5264766100dbe

### 3. 필요한 라이브러리 설치하기

```
npm install axios classnames node-sass react-helmet semantic-ui-css semantic-ui-react react-router-dom
```

### 4. 스토리북 설정하기

터미널에서 아래 명령 실행

```
npx -p @storybook/cli sb init
npm install --save-dev storybook-react-router
```

`.storybook/config.js` 내용 수정 ([공식 문서 링크](https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically))

```
import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

스토리북에서 `<Link />` 컴포넌트 사용할 수 있도록 설정하기 ([공식 문서 링크](https://github.com/gvaldambrini/storybook-router/tree/master/packages/react))

```
// .storybook/config.js
import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());
```

# 수업 중

## 주소 설계

/root : 홈

/product/1 : 1번 상품 정보

---

### I1

PC 가 받는 데이터의 구조가 서버가 받는 데이터 구조에 의존성이 있으면 좋지않다.
PC에서 어떤 데이터를 받을 것인가와 서버의 데이터 구조는 상관이 없다.
PC의 사용법은 최대한 간단하게 유지하는 것이 좋기 때문에 서버에 의존성을 두지 않는다.

---

### I2

공유하는 내용은 HOC로 작성하는 것이 좋다.
ex) loading

loading이라는 prop을 내려받을 수 있는 컴포넌트에 둘러준다 (PostList에 loading이라는 prop이 있고 ProductListView가 그 prop을 내려받을 수 있으므로 ProductListView에 둘러준다)

---

### I3

ROUTE는 if같은 칭긔이지 if else 같은 칭긔가 아니다. 중복이 와다다 될 수 있음 => `switch`, `exact` 사용해서 해결 가능

1. exact

   - exact prop이 있을 때 = 주소가 정확히 일치해야만 페이지가 그려짐
   - exact prop이 없을 때 = 주소가 path로 시작하면 페이지가 그려짐

1. switch
   - 둘러주고 home 부분을 맨 밑으로 내려주어야한다.

---

### I4

상품상세페이지에서 react 개발자 도구를 확인해보면 ProductPage 는 match 라는 정보를 받고있는것을 알 수 있다.
match에는 해당 상품의 productId를 가지고 있으므로 이 내용을 productDetail에 전달해주면 id에 맞는 상품상세페이지를 불러올수있다.

---

### I5

링크를 줄 때 `<a>` 태그를 사용하면 페이지가 새로고침된다.

react router의 `<Link>`태그를 사용하면 페이지가 새로고침되나 pushState 등(뒤로가기, 앞으로가기..)을 사용 할 수 있다

---

### I6

서버에 요청하는 횟수를 최대한 줄이자

---

### I7

옵션이나 수량이 변경되었을때 가격이 출력되게해보자 => 상태가 있어야한다.
UI상태(상태가바뀌었을때 화면이 다시그려지는. 외부세계와 연동되지않는 상태)는 PC에 넣어줘도 된다.

---

### I8

제어되는 컴포넌트 사용 중에는 `null`을 넘겨주면 안된다. => 초기값에 null을 넣어줬었는데 빈문자열로 넣자.
아무의미없는 value를 넣은 후 초기상태에 빈문자열을 넣어서 옵션을 선택하라는 옵션이 초기설정되도록 강제설정 해줄 수 있다.

selected 대신에 빈문자열을 넣고 초기상태에 빈문자열을 넣는다.

---

### I9

input type이 number인 경우에는 최소값과 최대값을 설정해 줄 수 있다.

---

### I10

this를 고정시킬 수 있다면 어느방식이든 상관 없다.

1. `onCreateCartItem={this.handleCreateCartItem.bind(this)}` 이런식으로 this를 고정해준다.
1. `handleCreateCartItem` 함수를 화살표 함수로 만들어준다. 화살표함수로 만들어주면 `this`가 고정되어있기때문에 `bind` 를 쓰지않아도 된다.

다른 컴포넌트에 넘겨야하거나 이벤트를 등록해야 하는 경우에는 화살표 함수를 사용하자!

---

### I11

UserProvider로 감싸주면 UserConsumer에서 Provider의 기능을 가져다쓸 수있다.

---

### I12

제어되는 컴포넌트를 만든다는 것 : 상태를 만드는것, 상태를 바꾸는 함수를 만들어서 input..등에게 내려주는 것

---

### I13

필드가 많을 때 handleUsernameChange() .. 이런식으로 일일히 함수를 만들어 줄 수 없으니 함수를 하나 만들어서 매개변수로 가능하게한다

```js
handleFieldChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

//사용법 :
onChange={e => this.handleFieldChange(e, 'username')}
```

---

### I14

사용자가 링크를 클릭하지 않아도 주소표시줄의 주소를 바꾸고 싶을 때 : redirect 렌더링 => 부작용이 있다. 알아보자

---

### I15

실무에서 PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 사용된다.

=> HeaderView를 최대한 퓨어하게 두기 위해서.

---

### I16

provider에서 내려주는 값이 바뀔 때마다 consumer가 다시 그려진다 => 로그아웃 버튼 클릭 시 헤더가 다시 렌더링된다.

---

### I17

홈에서 로그인 후 로그아웃 하면 헤더가 없어진다.

HeaderView에 logoutSuccess라는 상태가 남아있기 때문에 Redirect가 여전히 그려져있다.

상태가 남아있어서 화면이 제대로 그려지지않는다. => element type이나 key가 바뀌면 상태가 날아간다

logoutSuccess라는 상태가 날아가지않아서 HeaderView가 제대로 그려지지않았다.

---

### I18

Header에 로그인 전과 로그인 후 각각 다른 key를 붙여주어서 key가 바뀔 때 상태가 모두 지워져서 화면이 다시 그려지는 효과를 준다.

이 때 사용할 수 있는 좋은 key로는 username이 있다.

로그인 상태 key : username(사용자 아이디)

로그아웃 상태 key : username(null) => 로그아웃 상태에는 null이 들어가게 됨.

강제로 상태를 초기화하고싶은 순간에 다른 key를 넣어주면 된다.

상태가 날아가지않아서 화면이 바뀌지않는 경우가 종종 생긴다.

---

### I19

react router 의 history 객체

[리액트 라우터 - 히스토리](https://reacttraining.com/react-router/web/api/history/history-is-mutable)

redirect 컴포넌트를 랜더링하거나,

history객체의 push나 replace를 쓰면 주소표시줄의 상태를 바꿀 수 있다.

---

### I20

[리액트 라우터 - withRouter](https://reacttraining.com/react-router/web/api/withRouter)

`match`,`location`,`history를` HeaderView에서 사용하려면 위에서 밑으로밑으로....계속 내려줘서 받아야하는데 그러면 너무 힘드니까 withRouter를 이용해서 둘러준다.

withRouter를 둘러준 컴포넌트는 I19의 history 객체를 사용할 수 있다.

`withRouter` HOC만 둘러주면 편하게 `match`, `location`, `history` 를 사용할 수 있다.

---
