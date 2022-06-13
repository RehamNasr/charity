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
    BackHandler,
    ToastAndroid,

} from 'react-native';
import Dialog from "react-native-dialog";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import DialogInput from 'react-native-dialog-input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ActionSheet } from 'react-native-cross-actionsheet'
import ActionSheet from "react-native-actions-sheet";
import { Menu, Divider, Provider } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";







import { createRef } from "react";







const actionSheetRef = createRef();

const App = () => {
    let actionSheet;
}







export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "nada",
            email: "nadaaboelkheir5@gmail.com"
            , phone: "01068678095",
            photo_uri:
                // require('../img_chairty/user8.jpg')
                ""
            ,
            photo_data: "",
            Visable: false,
            title: "",
            hint: "",


            visableMenu: true,
            visableModal: false,
            animatedModal: false,
        }
    }

    componentDidMount() {
        this.requestCameraPermission()


    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    selectFromGallery = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            // console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri,
                },
                    ToastAndroid.showWithGravityAndOffset(
                        "Photo is updated",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER,
                        25,
                        50
                    )


                );

            }
        });

    }


    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri
                }
                    ,
                    ToastAndroid.showWithGravityAndOffset(
                        "Photo is updated",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER,
                        25,
                        50
                    )

                );

            }
        });

    }







    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: "center" }}>


                        <View style={{
                            height: 60,
                            width: "90%",
                            alignItems: "center",

                            flexDirection: "row",

                            justifyContent: "space-between",
                            marginBottom: 20
                            // , backgroundColor: "#eee"

                        }}>


                            {/* <TouchableOpacity style={{
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                                onPress={() => {

                                }}
                            >
                                <FontAwesome5 name={"angle-right"} size={25} color={"#26508E"} />
                            </TouchableOpacity> */}
                            <View style={{ alignItems: "center", justifyContent: "center" }}>


                                <Text
                                    style={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        color: "#26508e",


                                    }}
                                > My Profile </Text>
                            </View>

                            <TouchableOpacity style={{
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                                onPress={() => {

                                }}
                            >
                                <FontAwesome5 name={"angle-right"} size={25} color={"#26508E"} />
                            </TouchableOpacity>
                        </View>
                    </View>





                    <View
                        style={{ height: 220, alignItems: "center", justifyContent: "space-around", marginBottom: 15 }}


                    >

                        {this.state.photo_uri == '' || this.state.photo_uri == null ?
                            (
                                <Image source={
                                    require('../img_chairty/user8.jpg')}
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 75

                                    }} resizeMode="center" />

                            )
                            :
                            (
                                <Image source={{
                                    uri:
                                        this.state.photo_uri


                                }}
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 75

                                    }} resizeMode="contain" />
                            )}
                        <TouchableOpacity style={{
                            width: 130, height: 50, backgroundColor: "#26508E", alignItems: "center"
                            , justifyContent: "center", borderRadius: 15
                            , flexDirection: "row"
                        }}
                            onPress={() => {
                                // actionSheetRef.current?.setModalVisible();
                                actionSheetRef.current?.show();
                            }}


                        >
                            <Text style={{ color: "#fff", marginRight: 10 }}>
                                Edite photo
                            </Text>
                            <FontAwesome5 name={"camera"} size={25} color={"#EEF1F6"} />
                        </TouchableOpacity>

                        <ActionSheet ref={actionSheetRef}>
                            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: "#EEF1F6", borderRadius: 20, alignItems: "center", justifyContent: "center", margin: 20 }}
                                    onPress={() => {
                                        // alert("1")
                                        actionSheetRef.current?.hide()


                                        this.launchCamera()


                                    }}
                                >
                                    <FontAwesome5 name={"camera"} size={25} color={"#26508E"} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: "#EEF1F6", borderRadius: 20, alignItems: "center", justifyContent: "center", margin: 20 }}
                                    onPress={() => {
                                        // alert("2")
                                        actionSheetRef.current?.hide();
                                        this.selectFromGallery()
                                    }}
                                >
                                    <FontAwesome5 name={"photo-video"} size={25} color={"#26508E"} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: "#EEF1F6", borderRadius: 20, alignItems: "center", justifyContent: "center", margin: 20 }}
                                    onPress={() => {
                                        // alert("2")
                                        actionSheetRef.current?.hide();
                                        this.setState({
                                            photo_uri: ""
                                        }
                                            ,
                                            ToastAndroid.showWithGravityAndOffset(
                                                "Photo is deleted",
                                                ToastAndroid.LONG,
                                                ToastAndroid.CENTER,
                                                25,
                                                50
                                            )

                                        )
                                    }}
                                >
                                    <FontAwesome5 name={"trash"} size={25} color={"#26508E"} />
                                </TouchableOpacity>
                            </View>
                        </ActionSheet>











                    </View>


                    <View style={{
                        justifyContent: "space-between", width: "100%",
                        height: 80, backgroundColor: "#EEF1F6", padding: 15, marginBottom: 15
                    }}
                    >
                        <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal: 10, alignItems: "center" }}>

                            <TouchableOpacity style={{ width: 30, height: 30, alignItems: "center", justifyContent: "center" }}
                                onPress={() => {

                                    this.setState({ Visable: true, title: "name", hint: this.state.name })


                                }}











                            >
                                <FontAwesome5 name={"edit"} size={20} color={"#26508E"} />
                            </TouchableOpacity>



                            <DialogInput isDialogVisible={this.state.Visable}
                                title={this.state.title}
                                hintInput={this.state.hint}
                                // textInputProps={ {maxLength:this.state.title=="phone"?11:50,keyboardType:this.state.title=="phone"?'phone-pad':"default"} }
                                submitInput={(inputText) => {

                                    if (this.state.title == "name") {
                                        this.setState({ name: inputText })
                                    } else if (this.state.title == "E-mail") {
                                        this.setState({ email: inputText })
                                    }
                                    else {

                                        this.setState({ phone: inputText })

                                    }
                                    this.setState({ Visable: false })
                                }

                                }
                                submitText='Done'
                                closeDialog={() => {
                                    this.setState({ Visable: false })


                                }



                                }
                                cancelText='cancel'
                            // textInputProps={{autoCorrect:true}}

                            >
                            </DialogInput>




                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#26508E", marginRight: 10 }}>
                                    User Name
                                </Text>
                                <FontAwesome5 name={"user-alt"} size={20} color={"#26508E"} />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ color: "#26508E", marginHorizontal: 35 }}>
                                {this.state.name}
                            </Text>
                        </View>
                    </View>






                    <View style={{
                        justifyContent: "space-between", width: "100%",
                        height: 80, backgroundColor: "#EEF1F6", padding: 15, marginBottom: 15
                    }}
                    >
                        <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal: 10, alignItems: "center" }}>

                            <TouchableOpacity style={{ width: 30, height: 30, alignItems: "center", justifyContent: "center" }}

                                onPress={() => {

                                    this.setState({ Visable: true, title: "E-mail", hint: this.state.email })


                                }}

                            >
                                <FontAwesome5 name={"edit"} size={20} color={"#26508E"} />
                            </TouchableOpacity>






                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#26508E", marginRight: 10 }}>
                                    E-mail
                                </Text>
                                <MaterialCommunityIcons name={"email"} size={20} color={"#26508E"} />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ color: "#26508E", marginHorizontal: 35 }}>
                                {this.state.email}
                            </Text>
                        </View>
                    </View>





                    <View style={{
                        justifyContent: "space-between", width: "100%",
                        height: 80, backgroundColor: "#EEF1F6", padding: 15, marginBottom: 15
                    }}
                    >
                        <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal: 10, alignItems: "center" }}>

                            <TouchableOpacity style={{ width: 30, height: 30, alignItems: "center", justifyContent: "center" }}
                                onPress={() => {

                                    this.setState({ Visable: true, title: "Phone", hint: this.state.phone })


                                }}


                            >
                                <FontAwesome5 name={"edit"} size={20} color={"#26508E"} />
                            </TouchableOpacity>


                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#26508E", marginRight: 10 }}>
                                    Phone
                                </Text>
                                <FontAwesome5 name={"phone"} size={20} color={"#26508E"} />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ color: "#26508E", marginHorizontal: 35 }}>
                                {this.state.phone}
                            </Text>
                        </View>
                    </View>





































                </View>







            </>
        )
    }
}
