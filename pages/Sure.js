import * as React from 'react';
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
    Button, Platform,
    Alert,

} from 'react-native';
import Dialog from "react-native-dialog";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
// import { big_textcolor,small_textcolor,bottom_color,other_bottom,bottom_textcolor } from './const';
export default class Sure extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>

                    <View style={{
                        justifyContent: "center",
                        marginBottom: 10,

                    }}>






                        <TouchableOpacity style={{ margin: 10, height: 30, width: 30, alignItems: "center", justifyContent: "center" }}
                            onPress={() => {

                            }}


                        >
                            <FontAwesome5 name={"chevron-right"} size={25} color={"#26508E"} />
                        </TouchableOpacity >
                    </View>

                    <View style={{ alignItems: "center" }}>

                        <View style={{
                            flexDirection: "row", height: 50,
                            justifyContent: "center", alignItems: "center",
                            marginTop: 5

                        }}>


                            <Text style={{ color: "#26508E", fontWeight: "bold", fontSize: 30, margin: 10 }}>
                                GivMor
                            </Text>

                            <FontAwesome5 name={"hand-holding-heart"} size={25} color={"#26508E"} />

                        </View>



                        <View style={{ justifyContent: "center", width: "90%", alignItems: "center", marginTop: 40 }}>
                            <Image source={require("../img_chairty/sure8.jpg")} resizeMode={"contain"} style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center", borderRadius: 20 }} />


                        </View>










                        <View>
                            <Text style={{ color: "#26508E", fontSize: 20, fontWeight: "bold", margin: 20 }}>
                                Make sure before you donate that the clothes are clean !
                            </Text>
                        </View>


                        <TouchableOpacity style={{
                            width: 250, height: 50, backgroundColor: "#26508E",
                            borderRadius: 10, marginTop: 40,
                            alignItems: "center", justifyContent: "center"

                        }}>
                            <Text style={{ color: "#fff", fontSize: 15 }} >
                                Donate

                            </Text>
                        </TouchableOpacity>




                    </View>

                </View>
            </>
        )
    }
}
