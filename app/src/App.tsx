import "./App.css";
import { BankTransactionsList } from "./scenes/BankTransactionsList/BankTransactionList";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BankTransactionsList />
      </div>
    </Provider>
  );
}

export default App;
