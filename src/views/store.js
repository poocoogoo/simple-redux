import React from 'react';
export const storeContext = React.createContext();
export const initialState = {
    user:'poocoogoo',
    age:32
}
export const reducer = (state, action)=>{
    switch (action.type) {
      case 'CHANGENAME':
        return {user:'harhao',age:24}
      default:
        return initialState;
    }
}
