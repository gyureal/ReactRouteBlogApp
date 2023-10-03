# 개요
> [Udemy - Modern React And Redux](https://www.udemy.com/react-redux/)의 React-Router 를 사용하여 구현하는 Blog App 예제를 학습한 내용을 기록하는 레포지토리입니다.

## 학습목표
- 리액트 라우터와 리액트 폼을 사용합니다.
- 리액트 라우터를 사용하여 SPA 에서 화면을 이동시킵니다.
- 리액트 폼을 사용하여 POST 요청을 보내고 요청 내용에 대한 Validation을 합니다.

## 학습내용
### 백엔드 API
> 이번 예제를 위한 API가 아래 url에 생성되어 있습니다. -> 동작하지 않아 동일한 스펙의 백엔드 API를 만들어 진행함

[https://reduxblog.herokuapp.com/](https://reduxblog.herokuapp.com/)

```
Oops!  Mistake on my part ahead!  In the next video, I tell you to run the command npm install --save react-router@4.0.0 .

The React Router project has now been broken up into a couple of different libraries.  The correct command to run is npm install --save react-router-dom@4.0.0 <--run this instead.  This library contains the flavor of react-router related to working with the DOM, as opposed to other platforms (like React Native).
```

### React-Router
[React-Router](https://reactrouter.com/en/main)

- 버전
  - `react-router-dom@4.0.0`
  - 4.0.0 버전을 사용하기 위해 아래와 같이 리액트의 버전을 낮춰 진행하였습니다.
  - `npm install --save react@15`
  - `npm install --save react-dom@15`

- 기존의 a태그를 이용한 화면이동 <br/>
  <img width="954" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/6aeb4bce-95a0-4bba-ad1e-a1ccb04110d0">

- 리액트 라우터 동작 방식 <br/>
  > 리액트 라우터는 SPA의 페이지 전환을 도와주는 라이브러리이다.
  <img width="1575" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/d874f689-af42-451f-95ac-8d1406554eb5">
  - SPA는 화면이 이동할 때 마다 HTML을 바꾸지 않고, 하나의 HTML에서 컴포넌트만 갈아끼우는 방식으로 동작하여 사용자 경험을 향상시킨다.
  - `History` : 페이지 전환을 위해 백그라운드에서 동작하며, url의 변경을 감지한다.
  - `React-Router` : 변경된 url을 분석하여 필요한 컴포넌트들의 목록(Set of Component)을 얻는다.
  - `React` : 컴포넌트들의 목록을 받아서 화면에 그려준다.

- Route 컴포넌트
  - path와 component를 매핑
    <img width="682" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/ef7b91d5-0b30-44fa-a9ae-eed802a69375">
    
    <img width="813" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/1947f1a4-c7f8-4648-9da2-9cd1078a30d0">

    <img width="813" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/4f2f936c-49a0-4bf3-a92d-b1d2ffc15b47">


### Fetch Posts 데이터

- State Object Design (Produced by Redux Reducer)
  <img width="924" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/540100e0-4f37-41e6-8594-42a899a9fac5">

- State Object Design (Upgrade)
   - activePost 데이터를 저장하지 않는다. (posts 데이터에서 가져다 쓴다.)
   - posts 데이터를 array가 아닌 Object 에 담는다. (id를 키 값으로 갖도록 해서 값을 가져오기 쉽게 한다.)
   - lodash를 사용하여 가능하다 <br/>
     <img width="916" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/ce1a7bd1-b637-47c6-8a88-81e25b4578e5">


- Action 에서 axios를 사용하여 데이터를 가져온다.
   - `npm install --save redux-promise`
   - `npm install --save axios@0.27.2`
   - reducer 등록
   - 미들웨어로 redux-promise 등록하기  
 

- 리액트 라이프사이클
   - 컴포넌트 이벤트를 담당한다. 이벤트를 탐지하여 핸들러를 동작할 수 있게 한다.
   - ex) componentDidMount : 컴포넌트가 마운트 될때
     
   <img width="343" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/1105af6f-8223-43a3-b2f4-4e246fde3cf4">


 
### Switch
리액트 라우터는 매칭되는 url을 모두 보여주기 때문에, /posts/new 를 호출하면, / 에 해당하는 index 컴포넌트와 /posts/new 에 해당하는 postNew 컴포넌트를 모두 보여준다. 
이를 막기 위해 React-Router-Dom 의 Switch 태그를 사용하여 감싸준다. 이는 위에서 부터 탐색하여 제일 처음 해당하는 url만 표시해 주는데, 그렇기 때문에 복잡한 url일 수록 위에 적어야한다.

<img width="730" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/670fe169-90bc-4d25-bffb-266c7fbbe5a7">


` 다른 방법은 없나? `

### Link 태그
전통적인 a 태그와 비슷한 역할을 하는 리액트 라우터 태그이다.

<img width="302" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/523e03d1-8d72-461e-84e1-462837ab7dde">

- Link 태그는 a 태그로 변환된다

<img width="201" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/5aa0dd61-dd96-4e56-a950-d58ed3094d06">


### Redux Form
- [Redux Form](https://redux-form.com/8.3.0/)
- 버전
   - `npm install --save redux-form@6.6.3` : 강의와 동일한 버전인 6.6.3 사용
   - `npm install --save redux@3.0.0` : 위 버전과 호환되도록 하기 위해 리덕스 버전 수정
- 동작과정 <br/> 
  <img width="571" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/ef81c6b9-7b4f-4021-a664-94b30171c057">
  
- redux-form 의 역할
   - validation
   - form submit
 
- post 생성 프로세스 <br/>
   <img width="437" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/02b4e41e-6232-45c6-a21c-fcbae5872c5b">


### Field
- redux form의 `Field` 태그 <br/>
- 역할
   - eventHandle
   - redux와 interaction 
<img width="334" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/e6e9a6ec-4687-49bc-8c0d-967d20daae3c">

- label : 사용자 정의 props, field 파라메터에 담겨 넘어간다.
- name : 바인딩 되는 데이터의 속성
- component: 렌더링하는 컴포넌트(jsx)를 반환하는 함수, field 파라메터가 넘어감 <br/>
  <img width="748" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/8c6e7992-296b-4580-b7a2-2e95b5d94177">

### validation
- 유효성 체크 실시
- form submit 시, form의 name 가 변수명이 되어 values 에 담겨 넘어감
- values에 값이 들어가 있으면 유효하지 않은 값으로 간주하여 submit 하지 않음
- values에 담은 객체를 기반으로 폼에 메세지를 보여줌 (`{field.meta.error}`) 이용

<img width="603" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/8f982604-c50c-4b3f-9938-4ba3bc07172b">

<img width="711" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/089308d7-ea57-423e-8e3a-4007ad0c584d">  

### Validation이 다루는 상태
- 폼의 3가지 상태 <br/>
<img width="1313" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/c075e6ce-3959-4319-9ff9-b216a2669d24">

- pristine: no input, 사용자로부터 touch가 없는상태
- touched: 유저가 수정 또는 포커스를 완료한 상태 (포커스 떠남)
- invalid: 유효성 체크 결과 유효하지 않은 상태

- default 로 에러 메세지를 표시해 주고싶지 않을때 <br/>
<img width="756" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/0522f69f-b5e9-4308-884f-072434bf2de2">

- form validation에 상태 추가

<img width="768" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/4186f559-21fd-4da2-a8c2-177174f08209">
  
<img width="739" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/ddfdf655-53c9-4654-95b7-8c2a8394610b">


### 요청 성공 후 redirect 하는법
- redirect 기능 : `props.history.push(주소)`
- 요청 성공후 동작해야하므로, action creator의 then() 절로 callback 메서드를 넘겨준다.

  <img width="437" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/3b221c98-5458-43c3-a713-e7f9920d2dfe">

  <img width="437" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/0e6dbd57-89c3-4e0b-9950-8c297e8c4c7b">
  

### Route 태그 pathVariable
route 태그에 pathvaribale을 명시하려면, `/:id` 처럼 : 을 사용하고, 
`this.props.match.params.id` 로 컴포넌트에서 사용할 수 있다.

mapStateToProps 내부에서 props를 사용하려면 아래와같이 두번째 파라메터에 ownProps를 명시하면된다. <br/>
<img width="797" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/393ed60c-ca13-4cf9-9087-c611367d3466">


### render() 초기값
render 메서드에서 props 데이터를 사용할 때, 데이터 fetch가 안되었을 수 있으므로, 유효성 체크를 하여 값이 없을 경우 render 되지 않도록 한다. <br/>
<img width="349" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/aba50362-7b28-4726-94e9-27da2b4a2b2a">

 

## Trouble Shooting
### Redux-Promise
- 원인: redux-promise 대신 react-promise 의존성을 추가하여 applyMiddleware 할 때 에러가 났다.
- 해결: redux-promise로 의존성을 바꿔주었더니 해결되었다.

### applyMiddleware
- 원인: 상기에 발생한 에러로 applyMiddleware 에 reduxPromise를 넣어주지 않았더니, Axios의 결과값인 Promise 에서 데이터만 편하게 추출해오지 못했다.
  - axios 통신 후 Promise 는 잘 받아오지만, `action.payload.data`로 데이터만을 편하게 가져오지는 못함
    <img width="342" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/444d1de9-2b9d-457f-ba2e-5edfd0163bff">

- 해결: applyMiddleware 에 reduxPromise 미들웨어를 넣어주었더니 해결되었다.
  <img width="594" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/ae099cbf-ad00-4cdb-8c4a-aaa8e0e9ed07">

  <img width="455" alt="image" src="https://github.com/gyureal/ReactRouteBlogApp/assets/78974381/5e73f66e-2d1e-46e3-8bc0-c99c21a37f7e">

 
- learn
   - reduxPromise 미들웨어는 Action Creator 에서 가져온 `Promise 데이터를 가공해서 reducer로 넣어준다`.
   - applyMiddleware에 미들웨어 추가를 꼭 해주어야한다.
  

