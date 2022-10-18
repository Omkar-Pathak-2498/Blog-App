import Recat from "react";
import ReactDOM from "react-dom/client";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

const store = createStore(reducers, applyMiddleware(thunk));

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

root.render(<Index />);
