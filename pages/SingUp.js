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
import Feather from "react-native-vector-icons/Feather";
export default class SingUp extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      error_frist: "",
      error_last: "",
      LastName: "",
      email: "",
      pass: "",
      error_email: "",
      error_pass: "",
      counter: 0,
      check: false,
      secure:true,
     
    };
  }
 
secutityfun() {
  let security = this.state.secure
  this.setState({ secure: !security })
}

  check() {
    let Check = this.state.check;
    Check = !Check;
    this.setState({ check: Check });
  }

  singup() {
    let emailAccount = this.state.email;
    let passAccount = this.state.pass;
    let errorEmail = this.state.error_email;
    let errorPass = this.state.error_pass;
    let firstName = this.state.FirstName;
    let errorFirst = this.state.error_frist;
    let lastName = this.state.LastName;
    let errorLast = this.state.error_last;
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

    if (firstName == "") {
      errorFirst = "you should enter the first name ";
      count++;
    } else {
      errorFirst = "";
    }
    if (lastName == "") {
      errorLast = "you should enter the last name ";
      count++;
    } else {
      errorLast = "";
    }
    if (count == 0) {
      this.props.navigation.navigate("taps");
    }
    this.setState({
      error_email: errorEmail,
      error_pass: errorPass,
      error_frist: errorFirst,
      error_last: errorLast,
      email: "",
      pass: "",
      LastName: "",
      FirstName: "",
    });
    this.props.navigation.navigate("HomeStack");
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "#000",
              marginTop: 15,
              marginBottom: 25,
            }}
          >
            Create Account
          </Text>

          <Text
            style={{
              fontSize: 17,
              paddingHorizontal: 18,
              paddingVertical: 10,
              color: "#656662",
             
            }}
          >
            Frist Name
          </Text>
          <View style={{ paddingHorizontal: 15 }}>
            <TextInput
              style={{
                width: "100%",
                height: 40,
                borderRadius: 15,
                borderWidth: 1.5,
                borderColor: this.state.error_frist ? "#f00" : "#ccc",
                paddingHorizontal: 12,
              }}
              placeholder="First Name"
              keyboardType="default"
              value={this.state.FirstName}
              onChangeText={(value) => {
                this.setState({ FirstName: value });
              }}
            />
            <Text
              style={{
                //marginTop: 5,
                paddingLeft: 12,
                color: "#f00",
              }}
            >
              {this.state.error_frist}
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
            Last Name
          </Text>
          <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
            <TextInput
              style={{
                width: "100%",
                height: 40,
                borderRadius: 15,
                borderWidth: 1.5,
                borderColor: this.state.error_last ? "#f00" : "#ccc",
                paddingHorizontal: 12,
              }}
              placeholder="Last Name"
              keyboardType="default"
              value={this.state.LastName}
              onChangeText={(value) => {
                this.setState({ LastName: value });
              }}
            />
            <Text
              style={{
                // marginTop: 5,
                paddingLeft: 12,
                color: "#f00",
              }}
            >
              {this.state.error_last}
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
              value={this.state.Email}
              onChangeText={(value) => {
                this.setState({ Email: value });
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
              // fontSize: 17,
              // paddingHorizontal: 18,
              // paddingVertical: 10,
              // color: "#656662",
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
          <View style={{ flexDirection: "row", marginTop: 38 }}>
            <TouchableOpacity
              onPress={() => this.check()}
              style={{
                width: 23,
                height: 23,
                marginLeft: 17,
                borderWidth: 1.5,
                borderColor: "#ccc",
              }}
            >
              {this.state.check ? (
                <Feather
                  name="check"
                  style={{
                    fontSize: 20,
                    alignSelf: "center",
                    color: "#26508e",
                  }}
                />
              ) : null}
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  paddingHorizontal: 13,
                  color: "#656662",
                }}
              >
                By clicking Create account, I agree that I have read and
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  paddingHorizontal: 13,
                  color: "#656662",
                }}
              >
                accepted the Tearms of use ans Privacy policy.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.singup()
             
            }
            style={{
              width: "90%",
              height: 50,
              borderRadius: 15,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 45,
              backgroundColor: "#26508e",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
            style={{ flexDirection: "row", marginTop: 5 }}
          >
            <Text
              style={{
                color: "#656662",
                fontSize: 14,

                marginLeft: 76,
              }}
            >
              Already have an account?
            </Text>
            <Text style={{ fontSize: 15, color: "#26508e", marginLeft: 3 }}>
              Sing in
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
