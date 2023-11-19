import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './reducerSample';
import {SampleProvider} from './SampleContext';
import NavigationMenu from './components/NavigationMenu';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width:100vw;
  height:100vh;
  box-sizing: border-box;
  background-color: black; /* 초록색 배경 */
  padding:10%;
  padding-top:5%;
  padding-bottom:7%;
`;
const Header=styled.div`
width:100%;
box-sizing:border-box;
display:flex;
padding-bottom:10px;
`;

const Title= styled.div`
  color: white;
  width:100%;
  
  flex:0;
  font-weight:bold;
  font-size: 30px;
  height:100%;
  
`;
const ContentContainer = styled.div`
  background-color:gray; /* 하얀색 배경 */
  padding: 20px;
  width:100%;
  height:100%;
  box-sizing:border-box;
  border-radius:0px 0px 5px 5px ;
`;

const App: React.FC = () => {
  return(
    <SampleProvider>
      <AppContainer>
        <Header>
          <Title>
          LeeDongIn
          </Title>
          <NavigationMenu/>
        </Header>
        <ContentContainer>
        </ContentContainer>
      </AppContainer>
    </SampleProvider>
  );
};

export default App;