import React, { useEffect } from 'react';
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
import { useActions } from './hooks/useActions';
import { Publication } from './types/publication';
import { PopupWithForm } from './components/PopupWithForm/PopupWithForm';
import { AddPublication } from './components/AddPublication/AddPublication';


function App() {

  const {addPublication} = useActions()
  const user = useTypedSelector(state => state.user)

  const fotoObj1: Publication = {
    image: require('./images/fotos/1.png'),
    likes: [],
    description: 'Foto 1',
    date: new Date,
    comments: [],
    owner: user,
    id: 1
  }

  const fotoObj2: Publication = {
    image: require('./images/fotos/2.png'),
    likes: [],
    description: 'Foto 2',
    date: new Date,
    comments: [],
    owner: user,
    id: 2
  }

  const fotoObj3: Publication = {
    image: require('./images/fotos/3.png'),
    likes: [],
    description: 'Foto 3',
    date: new Date,
    comments: [],
    owner: user,
    id: 3
  }

  const arr = [fotoObj1, fotoObj2, fotoObj3]

  useEffect(() => {
    arr.forEach(item => addPublication(item))
  }, [])

  const editProfile = useTypedSelector(state => state.app.showEditProfile)
  const addPublicationForm = useTypedSelector(state => state.app.showAddPublicationForm)

  
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
        {editProfile ? <EditProfile/> : ''}
        {addPublicationForm ? <AddPublication/> : ''}
      </div>
    </div>
  );
}

export default App;
