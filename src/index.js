import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

//import App from './components/app';
import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew}></Route>
          <Route path="/posts/:id" component={PostShow}></Route>  
          <Route path="/" component={PostIndex}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
