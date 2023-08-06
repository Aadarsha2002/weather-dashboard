import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
}

export default App;
