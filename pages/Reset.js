import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      Password: "",
      confirmPassword: "",
      secure: true,
      secure2: true,
    };
  }
  secutityfun() {
    let security = this.state.secure
    this.setState({ secure: !security })
  }
  secutityfun2() {
    let security = this.state.secure2
    this.setState({ secure2: !security })
  }


  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <AntDesign
                name="arrowleft"
                style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "#000",
                marginTop: 10,
                marginBottom: 25,
                marginLeft: 75,
              }}
            >
              Reset Password
            </Text>
          </View>

          <Text
            style={{
              textAlign: "center",
              fontSize: 15,

              color: "#656662",
            }}
          >
            Enter your new password
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 18,
              marginTop: 50,
              color: "#656662",
            }}
          >
            New Password
          </Text>
          <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <View style={{
              width: "100%",
              height: 40,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: this.state.error_pass ? "#f00" : "#ccc",
              paddingHorizontal: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
            }}>

              <TouchableOpacity onPress={() => {
                this.secutityfun()
              }}>
                <Icon name={this.state.secure == false ? "eye" : "eye-slash"} size={17} color={"#26508e"} />
              </TouchableOpacity>
              <TextInput
                style={{
                  width: "950%",
                  height: 40,

                }}
                placeholder="New Password"
                secureTextEntry={true}
                value={this.state.Password}
                onChangeText={(value) => {
                  this.setState({ Password: value });
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 18,
              marginTop: 20,
              color: "#656662",
            }}
          >
            Confirm Password
          </Text>
          <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <View style={{
              width: "100%",
              height: 40,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: this.state.error_pass ? "#f00" : "#ccc",
              paddingHorizontal: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
            }}>

              <TouchableOpacity onPress={() => {
                this.secutityfun2()
              }}>
                <Icon name={this.state.secure2 == false ? "eye" : "eye-slash"} size={17} color={"#26508e"} />
              </TouchableOpacity>
              <TextInput
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 15,
                  // borderWidth: 1.5,
                  // borderColor: "#ccc",
                  // paddingHorizontal: 12,
                  // fontSize: 17,
                }}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={this.state.confirmPassword}
                onChangeText={(value) => {
                  this.setState({ confirmPassword: value });
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("taps");
            }}
            style={{
              width: "90%",
              height: 50,
              borderRadius: 15,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 95,
              backgroundColor: "#26508e",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
