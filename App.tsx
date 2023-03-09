import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
// redux persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
