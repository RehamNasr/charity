// import * as React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     ScrollView,
//     TextInput,

//     TouchableOpacity,
//     Image,
//     ImageBackground,
//     Modal,
//     AsyncStorage,
//     FlatList,
//     PermissionsAndroid,
//     StatusBar,
//     Button, Platform,
//     Alert,

// } from 'react-native';
// import Dialog from "react-native-dialog";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import * as ImagePicker from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
// // import { big_textcolor,small_textcolor,bottom_color,other_bottom,bottom_textcolor } from './const';
// import LocationView from "react-native-location-view";
// import MapView from 'react-native-maps';  
// import { Marker } from 'react-native-maps';  
// export default class Googlemap extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <>
//                 {/* <View style={{ flex: 1 }}> */}
// {/* 
//                 <LocationView
//           apiKey={"MY_GOOGLE_API_KEY"}
//           initialLocation={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//           }}
//         /> */}
// {/* </View> */}




// <View style={styles.MainContainer}>  
  
//   <MapView  
//     style={styles.mapStyle}  
//     showsUserLocation={false}  
//     zoomEnabled={true}  
//     zoomControlEnabled={true}  
//     initialRegion={{  
//       latitude: 28.579660,   
//       longitude: 77.321110,  
//       latitudeDelta: 0.0922,  
//       longitudeDelta: 0.0421,  
//     }}>  

//     <Marker  
//       coordinate={{ latitude: 28.579660, longitude: 77.321110 }}  
//       title={"JavaTpoint"}  
//       description={"Java Training Institute"}  
//     />  
//   </MapView>  
    
// </View>  
//             </>
//         )
//     }
// }



// const styles = StyleSheet.create({  
//     MainContainer: {  
//       position: 'absolute',  
//       top: 0,  
//       left: 0,  
//       right: 0,  
//       bottom: 0,  
//       alignItems: 'center',  
//       justifyContent: 'flex-end',  
//     },  
//     mapStyle: {  
//       position: 'absolute',  
//       top: 0,  
//       left: 0,  
//       right: 0,  
//       bottom: 0,  
//     },  
//   });  