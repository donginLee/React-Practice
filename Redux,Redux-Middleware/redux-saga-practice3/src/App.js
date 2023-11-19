import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import PostPage from './page/PostPage';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/:id' element={<PostPage></PostPage>}/>
      </Routes>
  );
}

export default App;
