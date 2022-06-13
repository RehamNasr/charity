import * as React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-navigation";
export default class VisaPage_2 extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal_1: "",
      inputVal_2: "",
    };
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              width: 110,
              height: 40,
              marginLeft: 10,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <Icon name="chevron-left" size={17} color="#26508E" />
            </TouchableOpacity>
            <Text style={{ fontSize: 17, color: "#26508E" }}>Payments</Text>
          </View>

          <View
            style={{
              width: "100%",
              height: 470,
              marginTop: 50,
              borderRadius: 30,
              backgroundColor: "#f0f5fb",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{
                width: 280,
                height: 170,
                alignSelf: "center",
                marginTop: 20,
              }}
            />
            <View></View>
            <TextInput
              style={{
                width: "80%",
                height: 40,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#26508e",
                paddingHorizontal: 10,
                marginTop: 70,
              }}
              placeholder="Amount"
              value={this.state.inputVal_1}
              onChangeText={(value) => {
                this.setState({ inputVal_1: value });
              }}
            />

            <View
              style={{
                width: "80%",
                height: 40,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#26508e",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                marginTop: 15,
              }}
            >
              <TextInput
                style={{
                  width: "80%",
                  height: 40,
                }}
                placeholder="Select Orgnization"
                value={this.state.inputVal_2}
                onChangeText={(value) => {
                  this.setState({ inputVal_2: value });
                }}
              />
              <TouchableOpacity onPress={() => {}}>
                <Icon name="caret-down" size={20} color="#26508E" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: "80%",
                height: 50,
                borderRadius: 15,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
                backgroundColor: "#26508e",
              }}
              onPress={() => {
                this.props.navigation.navigate('Successful')
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Donate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
