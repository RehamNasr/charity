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
import AntDesign from "react-native-vector-icons/AntDesign";

import Dialog from "react-native-dialog";
//import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
// import moment from 'moment';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
//import * as ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/FontAwesome5";
//import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
// import { big_textcolor,small_textcolor,bottom_color,other_bottom,bottom_textcolor } from './const';
export default class Searchpage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chairty: [
        {
          id: 1,
          name: "Happy kids org",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Happy kids org Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 2,
          name: "Resala",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Resala Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 3,
          name: "El kheir",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "El kheir Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 4,
          name: "Ghaith",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Ghaith Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 5,
          name: "Help",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Resala Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 6,
          name: " I Care",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Resala Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
        {
          id: 7,
          name: "Elorman",
          image: require("../img_chairty/chairty3.jpg"),
          location: "Cairo",
          discrip:
            "Resala Make A Difference Today not only do you make a charitable donation, but you make a difference for the environment-by extending the life of unwanted items to individuals in need",
        },
      ],
      search: "",
      showmodal: false,
      index: 0,
      setVisible: false,
    };
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#26508E",
                fontWeight: "bold",
                fontSize: 25,
                margin: 10,
              }}
            >
              GivMor
            </Text>

            <FontAwesome5
              name={"hand-holding-heart"}
              size={25}
              color={"#26508E"}
            />
          </View>

          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 15,
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => { }}
              >
                <FontAwesome5 name={"bell"} size={20} color={"#26508E"} />
              </TouchableOpacity>

              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: "80%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderRadius: 15,
                    backgroundColor: "#EEF1F6",
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F9F7F6",
                      borderRadius: 20,
                    }}
                  >
                    <FontAwesome5 name={"search"} size={15} color={"#26508E"} />
                  </View>
                  <TextInput
                    style={{
                      width: "80%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    placeholder="search"
                    value={this.state.search}
                    onChangeText={(value) => {
                      this.setState({ search: value });
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  margin: 10,
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => { }}
              >
                <FontAwesome5 name={"align-left"} size={20} color={"#26508E"} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                width: "100%",
                height: 80,
                //backgroundColor: '#EEF1F6',
                padding: 15,
                marginBottom: 5,
                // borderRadius: 20,
                //alignSelf: 'center',
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#26508E" }}
              >
                Results
              </Text>
              <Text style={{ color: "#656662" }}>
                Total of 70 Orgs found based on search
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#EEF1F6",
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  height: 50,
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: "#26508E",
                    //fontWeight: 'bold',
                    fontSize: 20,
                    marginLeft: 15,
                  }}
                >
                  All Organization
                </Text>
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
                {this.state.chairty.map((item, index) =>
                  item.name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()) ? (
                    <View
                      style={{
                        width: 160,
                        height: 210,
                        margin: 10,
                        borderRadius: 20,
                        justifyContent: "space-around",
                        backgroundColor: "#FFF",
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
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
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
                            style={{ marginTop: 3 }}
                          />
                          <Text
                            style={{
                              margin: 5,
                              color: "#566662",
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
                        onPress={() => {
                          this.setState({ showmodal: true, index: index });
                        }}
                      >
                        <Text style={{ color: "#fff" }}>View</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null
                )}
              </View>
            </View>
          </ScrollView>

          <Modal
            visible={this.state.showmodal}
            onRequestClose={() => {
              this.setState({ showmodal: false });
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
              }}
            >
              <View
                style={{
                  height: 45,
                  width: "100%",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexDirection: "row",
                  marginTop: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "15%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    this.setState({ showmodal: false });
                  }}
                >
                  <AntDesign
                    name="arrowleft"
                    style={{
                      fontSize: 25,
                      marginLeft: 10,
                      marginTop: 10,
                      color: "#26508E",
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                    marginLeft: 65,
                  }}
                >
                  <Text
                    style={{
                      color: "#26508E",
                      fontWeight: "bold",
                      fontSize: 25,
                      margin: 10,
                    }}
                  >
                    GivMor
                  </Text>

                  <FontAwesome5
                    name={"hand-holding-heart"}
                    size={25}
                    color={"#26508E"}
                  />
                </View>
              </View>
              <ScrollView>
                <View
                  style={{
                    height: 385,
                    marginTop: 4,
                    width: "100%",
                    backgroundColor: "#eef1f6",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                  }}
                >
                  <Image
                    source={this.state.chairty[this.state.index].image}
                    style={{
                      height: 315,
                      width: 330,
                      borderRadius: 15,
                      marginHorizontal: 15,
                      marginTop: 47,
                    }}
                  ></Image>
                  <TouchableOpacity
                    style={{
                      height: 35,
                      width: 30,
                      backgroundColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "81%",
                      marginTop: "-84%",
                      borderRadius: 5,
                    }}
                  >
                    <FontAwesome
                      name="bookmark-o"
                      style={{ fontSize: 25 }}
                    ></FontAwesome>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 40,
                    width: "86%",
                    alignSelf: "center",
                    marginTop: 12,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1.2,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      {this.state.chairty[this.state.index].name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="phone"
                      style={{ fontSize: 16, color: "#26508e" }}
                    />
                    <TouchableOpacity>
                      <Text style={{ color: "#656662" }}> +234 1234567890</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    height: 26,
                    width: "86%",
                    alignSelf: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="location-pin" color={"#26508e"} size={14} />
                  <Text
                    style={{
                      color: "#656662",
                      fontSize: 16,
                    }}
                  >
                    {" "}
                    House 44b, ikeja road, Lagos
                  </Text>
                </View>

                <View
                  style={{
                    height: 110,
                    marginTop: 5,
                    width: "86%",
                    alignSelf: "center",
                  }}
                >
                  <Text style={{ fontSize: 16 }}>Description</Text>
                  <Text style={{ color: "#656662" }}>
                    {this.state.chairty[this.state.index].discrip}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "90%",
                    height: 50,
                    borderRadius: 15,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    backgroundColor: "#26508e",
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    this.setState({ setVisible: true });
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#fff" }}>Donate</Text>
                </TouchableOpacity>

                <Dialog.Container visible={this.state.setVisible}>
                  <Dialog.Title
                    style={{
                      color: "#26508E",
                      fontWeight: "bold",
                    }}
                  >
                    Choose the way to Donate .{" "}
                  </Dialog.Title>
                  <View
                    style={{
                      height: 100,
                      width: "100%",
                      marginTop: 10,

                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("VisaPage_1");
                      }}
                      style={{
                        backgroundColor: "#26508E",
                        height: "90%",
                        width: 140,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "space-around",
                        // flexDirection: "row"
                      }}
                    >
                      <Icon
                        name="coins"
                        style={{
                          fontSize: 35,
                          color: "#fff",
                          marginTop: 10,
                        }}
                      />
                      <Dialog.Button
                        label="Money"
                        color={"#fff"}
                        onPress={() => {
                          this.props.navigation.navigate("VisaPage_1");
                          this.setState({ setVisible: false });
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Donate");
                      }}
                      style={{
                        backgroundColor: "#26508E",
                        height: "90%",
                        width: 140,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "space-around",

                        // flexDirection: "row"
                      }}
                    >
                      <Icon
                        name="tshirt"
                        style={{
                          fontSize: 35,
                          color: "#fff",
                          marginTop: 10,
                        }}
                      />
                      <Dialog.Button
                        label="cloth"
                        color={"#fff"}
                        onPress={() => {
                          this.props.navigation.navigate("Sure");
                          this.setState({ setVisible: false });
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </Dialog.Container>
              </ScrollView>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}
