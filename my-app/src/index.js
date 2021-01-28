import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
// import {addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe} from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={store.addPost.bind(store)}
                            updateNewPostText={store.updateNewPostText.bind(store)}
                            sendMessage={store.sendMessage.bind(store)}
                            updateNewMessageText={store.updateNewMessageText.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

