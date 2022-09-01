import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./store/indexReduser"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// b5d3153 - "work one HookError"
