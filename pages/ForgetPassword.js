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
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
export default class ForgetPasword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      error_email: "",
      counter: 0,
    };
  }

  forgetPassword() {
    let emailAccount = this.state.email;
    let errorEmail = this.state.error_email;
    let count = this.state.counter;

    if (emailAccount.trim() === "") {
      errorEmail = "you should enter an email ";
      count++;
    } else if (!emailAccount.includes("@") || !emailAccount.includes(".")) {
      errorEmail = "invalid email";

      count++;
    } else if (
      emailAccount.indexOf("@") + 1 == emailAccount.lastIndexOf(".") ||
      emailAccount.lastIndexOf(".") < emailAccount.indexOf("@")
    ) {
      errorEmail = "invalid email";
      count++;
    } else if (
      !emailAccount.includes("gmail.com") &&
      !emailAccount.includes("yahoo.com") &&
      !emailAccount.includes("facebook.com")
    ) {
      errorEmail = "invalid email";
      count++;
    } else {
      errorEmail = "";
    }
    if (count == 0) {
      this.props.navigation.navigate("ResendOTP");
    }
    this.setState({ error_email: errorEmail, email: "" });
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
                marginLeft: 70,
              }}
            >
              Forget Password
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 14,
              fontSize: 14,
              marginTop: 10,
              color: "#656662",
            }}
          >
            Enter your email addresses and we will email with
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 14,
              textAlign: "center",
              color: "#656662",
            }}
          >
            OTP to reset password
          </Text>

          {/* <Image
            source={{
              uri:
                'https://www.sor.org/getmedia/9645f8bf-67b2-4089-8a9f-040f1946c45d/register.jpg?width=626&height=626&ext=.jpg&width=1200&resizemode=force',
            }}
            style={{
              width: '100%',
              height: 290,
              alignSelf: 'center',
              marginTop: 10,
            }}
          /> */}

          <Text
            style={{
              // fontSize: 16,
              // marginLeft: 18,
              // marginTop: 70,
              // color: "#656662",

              fontSize: 17,
              marginHorizontal: 18,
              marginTop: 70,
              color: "#656662",
            }}
          >
            Email Address
          </Text>
          <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <TextInput
              style={{
                width: "100%",
                height: 40,
                borderRadius: 15,
                borderWidth: 1.5,
                borderColor: this.state.error_email ? "#f00" : "#ccc",
                paddingHorizontal: 12,
                fontSize: 17,
              }}
              placeholder="yourname@gmail.com"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(value) => {
                this.setState({ email: value });
              }}
            />
            <Text
              style={{
                // marginTop: 5,
                paddingLeft: 12,
                color: "#f00",
              }}
            >
              {this.state.error_email}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: "right",
              color: "#656662",
              marginRight: 18,
              marginTop: 10,
            }}
          >
            Recieve via SMS instead
          </Text>
          <TouchableOpacity
            onPress={() => this.forgetPassword()}
            style={{
              width: "90%",
              height: 50,
              borderRadius: 15,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#26508e",
              marginTop: 75,
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
