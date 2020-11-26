import React from 'react';
import './App.css';
import Header from './header/Header';
import SideBard from './sidebar/SideBar';
import Main from './main/Main';
import Widgets from './widget/Widgets';
import Login from './login/Login';
import { useStateValue } from './firebase/StateProvider';

function App() {
  const [{ user }] = useStateValue();
  
  return(

    //createpos
    <div className="App">
      {!user ?
        <Login />
        :
        <>
          <Header />
          <div className="containerBody">
            <SideBard/>
            <Main/>
            <Widgets />
          </div>
        </>
      }
    </div>
  )
}
export default App;
