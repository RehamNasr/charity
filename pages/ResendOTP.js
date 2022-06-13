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
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "react-native-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import SMSVerifyCode from "react-native-sms-verifycode";

export default class ResendOTP extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.verifycode = null;
  }

  onInputCompleted = (text) => {
    this.sendcodeFun(text);
  };

  sendcodeFun() {
    // alert("hello");
    this.props.navigation.navigate('Reset')
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <AntDesign
              name="arrowleft"
              style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "#000",
                marginTop: 10,
                marginBottom: 25,
                marginLeft: 85,
              }}
            >
              Verify OTP
            </Text>
          </View>
          <Text
            style={{
              paddingLeft: 30,
              fontSize: 16,
              marginTop: 10,
              color: "#656662",
            }}
          >
            We have sent you an OTP with a 4 digits
          </Text>
          <Text
            style={{
              //paddingHorizontal: 10,
              fontSize: 16,
              textAlign: "center",
              color: "#656662",
              marginTop: 5,
            }}
          >
            verify OTP
          </Text>

          <SMSVerifyCode
            ref={(ref) => (this.verifycode = ref)}
            verifyCodeLength={4}
            containerPaddingVertical={10}
            containerPaddingHorizontal={50}
            containerBackgroundColor="#f9f9f9"
            codeViewBorderColor="#ddd"
            onInputCompleted={this.onInputCompleted}
            focusedCodeViewBorderColor="#26508e"
            codeFontSize={22}
            codeColor={"#26508e"}
            autoFocus={true}
          />
          <Text
            style={{
              //paddingHorizontal: 10,
              fontSize: 16,
              textAlign: "center",
              color: "#656662",
              marginTop: 20,
            }}
          >
            Resend OTP
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
