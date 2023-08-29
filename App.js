import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "./components/Info";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import formReducer from "./reducers/formReducer";
import Select from "./components/Select";
import Addons from "./components/Addons";
import Finish from "./components/Finish";

const store = legacy_createStore(formReducer);
const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Addons" component={Addons} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}

export default App;