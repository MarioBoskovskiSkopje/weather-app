import { Provider } from "react-redux";
import Main from "./components/Main/index";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
