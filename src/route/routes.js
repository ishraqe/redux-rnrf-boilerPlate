import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import INScreen from "../screens/InitialScreen";

const routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Stack key="first">
          <Scene key="initial_screen" hideNavBar={true} component={INScreen} />
        </Stack>
      </Stack>
    </Router>
  );
};

export default routes;
