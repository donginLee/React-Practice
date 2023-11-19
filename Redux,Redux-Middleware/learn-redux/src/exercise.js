import {createStore} from 'redux';
const initialState={
    counter:0,
    text:'',
    list:[]
};

const INCREASE ='INCREASE';
const DECREASE ='DECREASE';
const CHANGE_TEXT='CHANGE_TEXT';
const ADD_TO_LIST='ADD_TO_LIST';

function increase(){
    return{
        type:INCREASE
    };
}

const decrease = text=>({
    type:DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
  });
  
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }
  

const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log("상태바뀌었다");
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
unsubscribe();
store.dispatch(addToList({ id: 1, text: '와우' }));