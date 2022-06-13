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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

export default class Successful extends React.Component {
  constructor() {
    super();
    this.state = {};
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
                marginLeft: 60,
              }}
            >
              Donation Organization
            </Text>
          </View>

          <View
            style={{
              width: "90%",
              marginLeft: 18,
              height: 330,
              borderWidth: 1.2,
              borderRadius: 5,
              borderColor: "#26508e",
              marginTop: 22,
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "#f0f5fb",
                marginTop: 25,
                alignSelf: "center",
                borderRadius: 75,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather
                name="check"
                style={{ fontSize: 120, color: "#26508e", alignSelf: "center" }}
              />
            </View>

            <Text
              style={{
                marginTop: 20,
                textAlign: "center",
                fontSize: 16,
                color: "#656662",
              }}
            >
              You have successfuly submitted
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#656662",
              }}
            >
              your request to donate clothes.
            </Text>
            <TouchableOpacity 
            
            onPress={()=>{
              this.props.navigation.navigate('Searchpage')
            }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#26508e",
                  textAlign: "center",
                  marginTop: 50,
                }}
              >
                Return back to homepage
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
