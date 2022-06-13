import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
import Icon from "react-native-vector-icons/Ionicons";

const slides = [
  {
    key: 1,
    title: "Let's Help\nEach Others",
    text: "one of the most important reasons to donate clothes is how many people it helps",
    image: require("../img_chairty/chairty2.jpg"),
    margimage: 10,
    margetext: 20,
    height: "100%",
    width: "100%",
  },
  {
    key: 2,
    title: "We Can Help\nPoor People",
    image: require("../img_chairty/chairty2.jpg"),
    text: "it helps those who can't afford clothes and disater vicims",
    margimage: 10,
    margetext: 20,
    height: "100%",
    width: "100%",
  },
  {
    key: 3,
    title: "Everyone Can\n Help Someone",
    image: require("../img_chairty/chairty2.jpg"),
    margimage: 0,
    margetext: 30,
    height: "102%",
    width: "100%",
  },
];
export default class IntroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      
    };
  }

  _renderItem = ({ item }) => {
    const { height, width } = Dimensions.get("screen");
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
              width: "100%",
              height: height * 0.5,
              flexDirection: "row",
              marginTop: item.margimage,
            }}
          >
            <Image
              style={{
                height: item.height,
                width: item.width,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: "#fff",
              }}
              source={item.image}
            ></Image>
          </View>
          <View
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: item.margetext,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
                fontWeight: "bold",
                color: "#26508e",
              }}
            >
              {item.title}
            </Text>
          </View>
          <View
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 35,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "#A6ABBD",
                fontWeight: "bold",
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </>
    );
  };
  _renderNextButton = () => {
    return (
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#26508e",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Icon name="chevron-forward-outline" color={"#eef1f6"} size={24} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("SignUp");
        }}
        style={{
          width: "98%",
          height: 55,
          backgroundColor: "#26508e",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Get start</Text>
      </TouchableOpacity>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <>{this.props.navigation.navigate("loginOrSignup")}</>
        // <View
        //   style={{
        //     flex: 1,
        //     paddingTop: Platform.OS === 'ios' ? 20 : 0,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     padding: 20,
        //   }}>
        //   <Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>
        //     welcome to my app.
        //   </Text>
        // </View>
      );
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          bottomButton
          dotStyle={{
            backgroundColor: "#eef1f6",
            height: 5,
            width: 20,
          }}
          activeDotStyle={{
            backgroundColor: "#26508e",
            height: 5,
            width: 20,
          }}
        />
      );
    }
  }
}
