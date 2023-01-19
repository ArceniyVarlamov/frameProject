import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/indexReducer"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// b5d3153 - "work one HookError"
// cd870de - "work app with hook rools"