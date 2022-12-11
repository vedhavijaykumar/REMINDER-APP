import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Create from "../screens/Create";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
     <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
          <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Tasks" component={Tasks} />

    </Stack.Navigator>
  );
}

export { MainStackNavigator };