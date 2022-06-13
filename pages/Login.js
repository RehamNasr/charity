import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error_email: "",
      error_pass: "",
      counter: 0,
      secure:true,
      
    };
  }
  login() {
    let emailAccount = this.state.email;
    let passAccount = this.state.password;
    let errorEmail = this.state.error_email;
    let errorPass = this.state.error_pass;
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

    if (passAccount == "") {
      errorPass = "you should enter password";
      count++;
    } else if (passAccount.length < 6) {
      errorPass = "invalid password! your password is very weak";
      count++;
    } else {
      errorPass = "";
    }
    if (count == 0) {
      this.props.navigation.navigate("taps");
    }

    this.setState({
      error_email: errorEmail,
      error_pass: errorPass,

      email: "",
      pass: "",
    });
    this.props.navigation.navigate("HomeStack");
  }


  secutityfun() {
    let security = this.state.secure
    this.setState({ secure: !security })
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "#000",
              marginTop: 15,
              marginBottom: 25,
            }}
          >
            Welcome Back
          </Text>
          <Text style={{ fontSize: 14, textAlign: "center", color: "#656662" }}>
            sing in with
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 100,
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                name="google"
                style={{ fontSize: 40, color: "#e34133" }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo
                name="facebook-with-circle"
                style={{ fontSize: 40, color: "#1773ea" }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="twitter-with-circle"
                style={{ fontSize: 40, color: "#29a4d9" }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              paddingHorizontal: 18,
            }}
          >
            <View
              style={{
                height: 1,
                backgroundColor: "#ccc",
                width: 140,
                marginTop: 7,
              }}
            ></View>
            <Text
              style={{
                fontSize: 18,
                color: "#656662",
                marginLeft: 7,
                marginRight: 12,
                marginTop: -5,
              }}
            >
              Or
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#ccc",
                width: 145,
                marginTop: 7,
              }}
            ></View>
          </View>

          <Text
            style={{
              // fontSize: 17,
              // marginLeft: 18,
              // marginTop: 62,
              // color: "#656662",
              fontSize: 17,
              marginHorizontal: 18,
              marginTop:50,
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
             
              fontSize: 17,
              marginHorizontal: 18,
              marginTop: 3,
              color: "#656662",
            }}
          >
            Password
          </Text>
          <View style={{paddingHorizontal: 15, marginTop: 10,}}>

<View style={{  width: "100%",
      height: 40,
      borderRadius: 15,
      borderWidth: 1.5,
      borderColor: this.state.error_pass ? "#f00" : "#ccc",
      paddingHorizontal: 12 ,flexDirection: "row",justifyContent: "space-between",alignItems:"center"}}>
 
<TouchableOpacity onPress={() => {
                      this.secutityfun()
                  }}>
                      <Icon name={this.state.secure== false ? "eye" : "eye-slash"} size={17} color={"#26508e"} />
                  </TouchableOpacity>

  <TextInput
    style={{
      width: "95%",
      height: 40,
      // paddingHorizontal: 12,
    }}
    placeholder="Password"
    secureTextEntry={this.state.secure}
    // secureTextEntry={true}
    value={this.state.Password}
    onChangeText={(value) => {
      this.setState({ Password: value });
    }}
  />
  </View>
  <Text
    style={{
      //marginTop: 5,
      paddingLeft: 12,
      color: "#f00",
    }}
  >
    {this.state.error_pass}
  </Text>

</View>
  <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ForgetPasword");
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                color: "#656662",
                marginRight: 20,
                marginTop: 8,
              }}
            >
              Forget password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.login()}
            style={{
              width: "90%",
              height: 50,
              borderRadius: 15,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 75,
              backgroundColor: "#26508e",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SingUp");
            }}
            style={{ flexDirection: "row", marginTop: 5 }}
          >
            <Text
              style={{
                color: "#656662",
                fontSize: 14,

                marginLeft: 56,
              }}
            >
              Don't have an account?
            </Text>
            <Text style={{ fontSize: 15, color: "#26508e", marginLeft: 3 }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
