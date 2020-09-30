import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersList from "./containers/users.list";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Les utilisateurs</h1>
        <UsersList />
      </div>
    </Provider>
  );
}
