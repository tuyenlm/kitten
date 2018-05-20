import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Detail extends Component {
  render() {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Detail</Text>
        <Text>{this.props.navigation.state.params.thamso}</Text>
      </View>;
  }
}
