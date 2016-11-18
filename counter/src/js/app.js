import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import App from './containers/App';
import counter from './reducers/counter';

const store = createStore(counter);

const render = () => ReactDOM.render(
    <App counter={store.getState()}
        onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
        onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('main')
)

render();
store.subscribe(render);