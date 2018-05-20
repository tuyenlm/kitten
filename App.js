import React from "react";
import { YellowBox, StyleSheet, Text, View } from "react-native";
import { AppRoutes } from "./config/navigation/routesBuilder";
// import { SideMenu } from "./config/navigation/routesBuilder";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const KittenApp = StackNavigator(
  {
    // First: {
    //   screen: Screens.SplashScreen
    // },
    Home: {
      screen: DrawerNavigator(
        {
          ...AppRoutes
        },
        {
          drawerOpenRoute: "DrawerOpen",
          drawerCloseRoute: "DrawerClose",
          drawerToggleRoute: "DrawerToggle",
          contentComponent: props => <SideMenu {...props} />
        }
      )
    }
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
   YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);
  }

  render() {
    return <SideMenu />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
