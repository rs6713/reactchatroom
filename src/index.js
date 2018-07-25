import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
//put things that don't start with period first, local files
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {addUser} from "./actions/index.js"
import setupSocket from "./sockets/index.js"
import handleNewMessage from "./sagas"
import username from "./utils/name"

//need to handle side effects into code
//handle creating websocket event when user types a message
//use redux saga, handle side effect
//side effect as whenever receive messsage from server unsure whats going to happen
//could be an error, get the right info, server could have changed
//redux want things to happen right away, 
//redux saga allows things happen asynch, allow sideeffects where function changes something outside the function
//normally in redux functions pure, dont change things outside function
//when interacting server by nature outside function

//redux-saga is redux middleware so need to init during store creation

import reducers from './reducers'

const sagaMiddleware= createSagaMiddleware()

//init middleware with applyMiddleware and store creation
const store=createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
//now create users through web sockets
//store.dispatch(addUser('Me'))
//passed dispatch function
//init socket so can reference inside the saga
const socket= setupSocket(store.dispatch, username)


//pass socket that has dispatch function and username
//pass handle new message saga
sagaMiddleware.run(handleNewMessage, {socket, username})
//once handled server message from redux

//want different username, could have user enter it,
//will be using random username generator

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

/*
need to create actions, change state through action, store is read only
*/
