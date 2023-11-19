import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import {useSelector} from 'react-redux';
function App() {
  console.log(useSelector(state=>state.number));
  return (
    <div>

      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
