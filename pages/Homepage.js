import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  AsyncStorage,
  FlatList,
  PermissionsAndroid,
  StatusBar,
  Button,
  Platform,
  Alert,
} from "react-native";
// import Dialog from "react-native-dialog";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import Entypo from "react-native-vector-icons/Entypo";
// import { big_textcolor,small_textcolor,bottom_color,other_bottom,bottom_textcolor } from './const';
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chairty: [
        {
          id: 1,
          name: "Happy kids",
          image: require("../img_chairty/chairty1.jpg"),
          location: "tanta"
      },
      {
          id: 2,
          name: "Happy kids",
          image: require("../img_chairty/chairty3.jpg"),
          location: "tanta"
      },
      {
          id: 3,
          name: "Happy kids",
          image: require("../img_chairty/chairty4.jpg"),
          location: "tanta"
      },
      {
          id: 4,
          name: "Happy kids",
          image: require("../img_chairty/chairty5.jpg"),
          location: "tanta"
      },
      ],
    };
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{ height: 100, justifyContent: "center", width: "90%" }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "#26508E" }}
              >
                Hello Precious !
              </Text>
              <Text style={{ color: "#656662" }}>
                Time to put a smile on people face
              </Text>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                justifyContent: "center",
                width: "90%",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../img_chairty/chairty2.jpg")}
                resizeMode={"cover"}
                style={{
                  width: "100%",
                  height: 200,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  // alignSelf: 'center',
                  marginLeft: 35,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "space-between",
                width: "100%",
                height: 90,
                // backgroundColor: '#fff',
                padding: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  //fontWeight: 'bold',
                  color: "#26508E",
                }}
              >
                suggested
              </Text>
              <Text style={{ color: "#656662" }}>Based on your location</Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              {this.state.chairty.map((item, index) => (
                <View
                  style={{
                    width: 160,
                    height: 210,
                    margin: 10,
                    borderRadius: 20,
                    justifyContent: "space-around",
                    backgroundColor: "#EEF1F6",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 120,
                      height: 90,
                      borderRadius: 40,
                    }}
                    resizeMode="center"
                  />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",

                        color: "#26508E",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Entypo
                        name="location-pin"
                        size={20}
                        color={"#656662"}
                        style={{ marginTop: 5 }}
                      />
                      <Text
                        style={{
                          margin: 5,
                          color: "#656662",
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 130,
                      height: 40,
                      backgroundColor: "#26508E",
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>View</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate('Searchpage')
            }}
              style={{
                justifyContent: "center",
                marginHorizontal: 20,
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "#26508E" }}>View All</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </>
    );
  }
}
