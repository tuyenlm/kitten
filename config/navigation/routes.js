import React, { Component } from "react";
import * as Screens from "../../screens";
import _ from "lodash";

// export const MainRoutes = {
//   id: "HomeMenu",
//   title: "Home",
//   icon: "",
//   screen: Screens.Home
// };

export const SideMenuRoutes = [
  { id: "HomeMenu", title: "Home", icon: "", screen: Screens.Home },
  { id: "Detail", title: "Detail", icon: "", screen: Screens.Detail },
  { id: "Detail", title: "Detail", icon: "", screen: Screens.Detail }
];

// let menuRoutes = _.cloneDeep(SideMenuRoutes);
// menuRoutes.unshift({
//   id: "HomeMenu",
//   title: "Home v",
//   icon: "",
//   screen: Screens.Home
// });
// console.log('====================================');
// console.log(menuRoutes);
// console.log('====================================');
export const MenuRoutes = SideMenuRoutes;