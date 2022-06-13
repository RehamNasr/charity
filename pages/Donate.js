import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  AsyncStorage,
  PermissionsAndroid,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import * as ImagePicker from "react-native-image-picker";
export default class Donate extends React.Component {
  constructor() {
    super();
    this.state = {
      Image: "",
      Decription: "",
      Pickup: "",
      Phone: "",
      Quantity: "",
      color: true,
      dropDate: "",
      dropTime: "",
    };
  }

  color() {
    let Color = this.state.color;
    Color = !Color;
    this.setState({ color: Color });
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
                marginBottom: 12,
                marginLeft: 60,
              }}
            >
              Donation Organization
            </Text>
          </View>
          <ScrollView>
            <Text
              style={{
                fontSize: 16,

                marginLeft: 18,
                color: "#26508e",
              }}
            >
              Cloth Donathion
            </Text>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 12,
                color: "#757575",
                marginTop: 5,
              }}
            >
              Please fill in neccessery details
            </Text>

            <Text
              style={{
                fontSize: 15,
                marginLeft: 18,
                marginTop: 20,
                color: "#656662",
              }}
            >
              Image
            </Text>
            <View
              style={{
                paddingHorizontal: 15,
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#26508e",
                  paddingHorizontal: 12,
                }}
                placeholder="Upload image of clothes to be donated"
                value={this.state.Image}
                onChangeText={(value) => {
                  this.setState({ Image: value });
                }}
              />
              <Entypo
                name="camera"
                style={{
                  fontSize: 23,
                  color: "#26508e",
                  marginLeft: -40,
                  marginTop: 7,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 18,
                marginTop: 20,
                color: "#656662",
              }}
            >
              Decription
            </Text>
            <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
              <TextInput
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#26508e",
                  paddingHorizontal: 12,
                }}
                placeholder="Decription & care tips"
                value={this.state.Decription}
                onChangeText={(value) => {
                  this.setState({ Decription: value });
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 18,
                marginTop: 20,
                color: "#656662",
              }}
            >
              Quantity
            </Text>
            <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
              <TextInput
                style={{
                  width: "100%",
                  height: 40,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#26508e",
                  paddingHorizontal: 12,
                }}
                placeholder="Quantity"
                value={this.state.Quantity}
                onChangeText={(value) => {
                  this.setState({ Quantity: value });
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 18,
                marginTop: 20,
                color: "#656662",
              }}
            >
              Select mode of donation
            </Text>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,

                  backgroundColor: "#26508e",
                  // borderWidth: 1,
                  //borderColor: '#ccc',
                  marginLeft: 15,
                }}
                onPress={() => {
                  this.setState({ check: true });
                }}
              ></TouchableOpacity>
              <Text style={{ marginLeft: 5, color: "#656662", fontSize: 14 }}>
                Pick up
              </Text>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#ccc",

                  marginLeft: 120,
                }}
                onPress={() => {
                  this.setState({ check: false });
                }}
              ></TouchableOpacity>
              <Text style={{ marginLeft: 5, color: "#656662", fontSize: 14 }}>
                Drop off
              </Text>
            </View>

            {this.state.check ? (
              <>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 18,
                    marginTop: 20,
                    color: "#656662",
                  }}
                >
                  Pick up Address
                </Text>
                <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                  <TextInput
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "#26508e",
                      paddingHorizontal: 12,
                    }}
                    placeholder="Maadi, Egypt"
                    value={this.state.Pickup}
                    onChangeText={(value) => {
                      this.setState({ Pickup: value });
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 18,
                    marginTop: 20,
                    color: "#656662",
                  }}
                >
                  Phone number
                </Text>
                <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                  <TextInput
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "#26508e",
                      paddingHorizontal: 12,
                    }}
                    value={this.state.Phone}
                    placeholder="+20132421165"
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      this.setState({ Phone: value });
                    }}
                  />
                </View>
              </>
            ) : (
              <>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 18,
                    marginTop: 20,
                    color: "#656662",
                  }}
                >
                  Drop off Date
                </Text>
                <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                  <TextInput
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "#26508e",
                      paddingHorizontal: 12,
                    }}
                    placeholder="Date"
                    value={this.state.dropDate}
                    onChangeText={(value) => {
                      this.setState({ dropDate: value });
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 18,
                    marginTop: 20,
                    color: "#656662",
                  }}
                >
                  Drop off Time
                </Text>
                <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                  <TextInput
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "#26508e",
                      paddingHorizontal: 12,
                    }}
                    value={this.state.dropTime}
                    placeholder="Time"
                    //keyboardType="number-pad"
                    onChangeText={(value) => {
                      this.setState({ dropTime: value });
                    }}
                  />
                </View>
              </>
            )}

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Successful");
              }}
              style={{
                width: "90%",
                height: 50,
                borderRadius: 15,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                backgroundColor: "#26508e",
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Donate</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </>
    );
  }
}
