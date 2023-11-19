import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer,{rootSaga} from './modules';
import {composeWithDevTools} from '@redux-devtools/extension';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware=createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));
const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
