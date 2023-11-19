import React from 'react';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import CounterContainer from './containers/CounterContainer';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<PostListPage></PostListPage>}/>
        <Route path=':id' element={<PostPage></PostPage>}/>
      </Routes>
    </div>
  );
}

export default App;
