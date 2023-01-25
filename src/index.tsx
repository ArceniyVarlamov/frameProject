import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/indexReducer"
import "./firebase"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
