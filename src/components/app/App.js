import React from 'react';

import { Header } from '../header/HeaderFromLecture'
import {Footer} from '../footer/Footer'

import {UserBox} from "../user-card/UserBox";
import {usersList} from '../../constants'
import {socialMediaIcons} from '../../constants'

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'

// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer social={socialMediaIcons}/>
      {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
      <UserBox users={usersList}/>
      {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
    </div>
  );
}

export default App;
