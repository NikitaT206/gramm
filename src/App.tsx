import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MyList } from './components/MyList/MyList';
import { Navigation } from './components/Navigation/Navigation';
import { User } from './components/User/User';
import {
  Routes,
  Router,
  Route,
  Link,
  useNavigate,
  Navigator
} from "react-router-dom";
import { Search } from './components/Search/Search';
import { Video } from './components/Video/Video';
import { Liked } from './components/Liked/Liked';
import { FotoDescriptionWithComments } from './components/FotoDescriptionWithComments/FotoDescriptionWithComments';
import { EditProfile } from './components/EditProfile/EditProfile';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  
  return (
    <div className="app">
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<MyList/>}/>
          <Route path='/profile' element={<User/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='/liked' element={<Liked/>}/>
          <Route path='/comments' element={<FotoDescriptionWithComments/>}/>
        </Routes>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
