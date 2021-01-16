import React, {Component} from 'react';
import {UserInfo} from "../user-info/UserInfoFromLecture";
import {UserContext} from "../../context/UserContext";
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';

import './MobileHeader.scss';


// todo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export class MobileHeader extends Component {
   state = {
      isSidepanelOpen: false
   }
   sidepanelToggle = () => {
      this.setState({
         isSidepanelOpen: !this.state.isSidepanelOpen
      })
   }
   render() {
      console.log(this.context);
      return (
         <div className={`may-header-mobile`}>
            <img alt="menu" src={HamburgerIcon} onClick={this.sidepanelToggle}/>
            <img src={Logo} className="may-header-mobile-logo" />
            <div className={`side-panel ${this.state.isSidepanelOpen && 'active'}`}>
               <UserInfo/>
            </div>
         </div>
      );
   }
}

MobileHeader.contextType = UserContext;

export default MobileHeader;

