import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
const initialState={
    fotos:[],
    big_fotos_id:[],
    big_loaded:false,

}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case `ALBOOM_LOAD_START`:
            return {...state,load_fotos: true}
        case `ALBOOM_LOAD_SUCCESS`:
            return {...state,fotos: action.payload, load_fotos: false}
        case `FOTO_LOAD_SUCCESS`:
            return {...state,big_fotos_id: action.payload, big_loaded:true}
        case `PICTURE_CLICK`:
            return {...state,big_loaded: action.payload}
        default:return state


    }
}
const store=createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


