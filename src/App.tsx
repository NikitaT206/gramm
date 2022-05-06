import React, { useEffect } from 'react';
import './App.css';
import { MyList } from './components/MyList/MyList';
import { User } from './components/User/User';
import {
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";
import { Search } from './components/Search/Search';
import { Video } from './components/Video/Video';
import { Liked } from './components/Liked/Liked';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import { api } from './api/user';
import { Registration } from './components/Login/Registration';
import {Login} from './components/Login/Login'


function App() {

  const { setUserInfo, setLoggedIn} = useActions()
  const loggedIn = useTypedSelector(state => state.user.loggedIn)

  useEffect(() => {
    api.getUserInfo().then(data => {
      if (data) {
        setLoggedIn(true)
      }
    }).catch(err => {
      setLoggedIn(false)
      console.log(err)
    })
  }, [])

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo().then(data => {
        setUserInfo(data)
      })
    }
  }, [loggedIn])

  return (
    <div className="app">
      <div className='container'>
        
      <Routes>

        <Route path='/signin' element={!loggedIn ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/signup' element={!loggedIn ? <Registration/> : <Navigate to='/'/>}/>

        <Route path='/' element={loggedIn ? <MyList/> : <Navigate to='/signin'/>}/>
        <Route path='/profile' element={loggedIn ? <User/> : <Navigate to='/signin'/>}/>
        <Route path='/search' element={loggedIn ? <Search/> : <Navigate to='/signin'/>}/>
        <Route path='/video' element={loggedIn ? <Video/> : <Navigate to='/signin'/>}/>
        <Route path='/liked' element={loggedIn ? <Liked/> : <Navigate to='/signin'/>}/>
       
      </Routes>

      </div>
    </div>
  )
}

export default App
