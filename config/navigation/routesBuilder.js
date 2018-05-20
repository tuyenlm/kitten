import React from "react";
import _ from "lodash";
import { withRkTheme } from "react-native-ui-kitten";
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { MenuRoutes } from "./routes";

let main = {};
let flatRoutes = {};


const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  let stack_name = name;
  routes[stack_name] = {
    name: stack_name,
    screen: StackNavigator(flatRoutes, {
      initialRouteName: name,
      headerMode: "screen",
      cardStyle: { backgroundColor: "transparent" },
      transitionConfig: transition,
      navigationOptions: ({ navigation, screenProps }) => ({
        gesturesEnabled: false,
        header: headerProps => {
          return (
            // <ThemedNavigationBar
            //   navigation={navigation}
            //   headerProps={headerProps}
            // />
            <View>
              <Text>{navigation}</Text>
              <Text>{headerProps}</Text>
            </View>
          );
        }
      })
    })
  };
  return routes;
}, {});

export const AppRoutes = DrawerRoutes;

// export const HomeStack = createStackNavigator({
//   Manhinh_Home: {
//     screen: Screens.Home,
//     navigationOptions: {
//       title: "Home"
//     }
//   },
//   Manhinh_Detail: {
//     screen: Screens.Detail,
//     navigationOptions: {
//       title: "Detail"
//     }
//   }
// });
// export const SideMenu = createDrawerNavigator({
//   Tabbar: {
//     screen: HomeStack
//   }
// });
