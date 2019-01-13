import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { CounterApp } from "./components";
import counter from "./reducers";
import { Provider } from "react-redux";
//import { incrementFunc, DECREMENT, CLEAR } from "./actions";

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Provider store = {store}>
      <CounterApp/>
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
