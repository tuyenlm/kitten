import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Manhinh_Detail",{thamso:'le minh tuyen'});
          }}
        >
          <Text>Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
