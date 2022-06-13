import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import StyledText from "react-native-styled-text";
// import * as constant from "./const/constant"
export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    let choice = 0;
    let login =0
    setTimeout(() => {
      if (choice == 1) {
        this.props.navigation.navigate("IntroSlider");
      } else if (login==0) {
        this.props.navigation.navigate("SingUp");
      } else if (login==1){
        this.props.navigation.navigate("Login");
      }
      
      else{
        this.props.navigation.navigate("HomeStack");
      }
    }, 3000);
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "#26508e",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="hand-holding-heart"
            style={{
              color: "#fff",
              fontSize: 40,
            }}
          ></Icon>
          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              marginTop: -3,
            }}
          >
            GivMor
          </Text>
          {/* <StyledText
                    style={{
                        fontSize: 40,
                        color: '#fff', 
                    }}
                >
                    {"<i>Givmor</i> "}
                </StyledText> */}
        </View>
      </>
    );
  }
}
