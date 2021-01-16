import React, {Component} from 'react';
import {user} from "../../constants";
import {UserContext} from "../../context/UserContext";

export class CurrentUserContext extends Component {
   state = {
      user
   }
   render() {
      const {children} = this.props;
      return (
         <div>
            <UserContext.Provider value={this.state.user}>
               {children}
            </UserContext.Provider>
         </div>
      );
   }
}

export default CurrentUserContext;
