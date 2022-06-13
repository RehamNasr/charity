// import * as React from 'react';
// import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import * as ImagePicker  from 'react-native-image-picker';
// import * as Constants from '../Donating/Constants'

// import { TabView ,SceneMap,TabBar} from 'react-native-tab-view';
// import { FlatList } from 'react-navigation';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';

// const initialLayout= {width:Dimensions.get('window').width}

// var inform_modal=false

// const track=[
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"8:15AM"
//     },
//     {
//         date:"05/09",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"9:30PM"
//     },
//     {
//         date:"05/09",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"7:35PM"
//     },
//     {
//         date:"05/08",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15AM"
//     },
//     {
//         date:"05/08",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/08",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },

 
// ]




// const data=[
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
//     {
//         date:"05/11",
//         message:" you donated 35 pieces of cloting to Happy ORG",
//         time:"2:15PM"
//     },
// ]


// const FirstRoute = () => (
//     <View style={ {flex:1}} >
//         <ScrollView>
// <View style={{
//     backgroundColor:"white",
//     marginTop:10,
//     height:40
// }}>
// <Text style={{fontSize:20,
// marginTop:5,marginLeft:10,color:Constants.date_color }}>
//             May 2021
//         </Text>
// </View>
// <View>
// {
//     data.map((items,index)=>(
// <TouchableOpacity
// onPress={()=>{
//     {inform_modal!=inform_modal}
// }} style={{height:100,  borderWidth:1,borderColor:'#000'}}>
//         <View  style={{flexDirection:'row',width:"97%",alignSelf:'center',
//       }}>
// <Text style={{color:Constants.date_color,fontSize:Constants.titels_size,fontWeight:'bold',marginTop:10,marginLeft:4}}>
// {items.date}
// </Text>
// <View style={{width:220,flexDirection:'column'}}>
// <Text style={{color:Constants.titelhome_color,fontSize:Constants.titels_size,marginLeft:15,fontWeight:'bold',marginTop:10}}>
// {items.message}
// </Text>
// </View>
// <Text style={{color:Constants.invalid_color,fontSize:Constants.titels_size,marginLeft:5,fontWeight:'bold',marginTop:10}}>
// {items.time}
// </Text>
//             </View>

//             <View style={{
//                 flexDirection:'row',
// marginLeft:55,marginTop:30
//             }}>
// <Icon name="check-square" size={20} color={Constants.date_color}  />
// <Text style={{color:Constants.date_color}}> send </Text>
//                 </View>
//             </TouchableOpacity>
//     ))
// }
// </View>
//     </ScrollView>
//     </View>
// );
// const SecondRoute = () => (
//     <View style={{flex:1 }}>
//                  <ScrollView>
// <View style={{
//     backgroundColor:"white",
//     marginTop:10,
//     height:40
// }}>
// <Text style={{fontSize:20,
// marginTop:5,marginLeft:10,color:Constants.date_color }}>
//             May 2021
//         </Text>
// </View>
// <View>
// {
//     track.map((items,index)=>(
// <TouchableOpacity style={{height:100,  borderWidth:1,borderColor:'#000'}}>
//         <View  style={{flexDirection:'row',width:"97%",alignSelf:'center',
//       }}>
// <Text style={{color:Constants.date_color,fontSize:Constants.titels_size,fontWeight:'bold',marginTop:10,marginLeft:4}}>
// {items.date}
// </Text>
// <View style={{width:220,flexDirection:'column'}}>
// <Text style={{color:Constants.titelhome_color,fontSize:Constants.titels_size,marginLeft:15,fontWeight:'bold',marginTop:10}}>
// {items.message}
// </Text>
// </View>
// <Text style={{color:Constants.invalid_color,fontSize:Constants.titels_size,marginLeft:5,fontWeight:'bold',marginTop:10}}>
// {items.time}
// </Text>
//             </View>

//             <View style={{
//                 flexDirection:'row',marginTop:30,justifyContent:'space-around'
//             }}>
//                 <View style={{flexDirection:'row'}}>
// <Icon name="history" size={20} color={Constants.date_color}  />
// <Text style={{color:Constants.invalid_color,marginLeft:10}}> Pending.... </Text>
// </View>
// <TouchableOpacity>
// <Text style={{color:Constants.date_color}}> Track </Text>
// </TouchableOpacity>
//                 </View>
//             </TouchableOpacity>
//     ))
// }
// </View>
//     </ScrollView>
//     </View>
// );


// export default class History extends React.Component{




// constructor(props){
//     super(props)
//     this.state={
// index:0,
// routes:[
//     { key: 'first', title: 'Donation History' },
//     { key: 'second', title: 'Track Donation' },
// ],



//     }
// }


// renderTabBar = props => (
//     <TabBar
//         {...props}
//         style={{marginTop:10,backgroundColor:"white"}}
//         activeColor={Constants.date_color}
//         inactiveColor={Constants.invalid_color}
//         indicatorStyle={{ backgroundColor:Constants.date_color}}
        
//     />
// );


// render(){
//     const {
//       index,
//       routes  
//     } =  this.state
//     return(
// <>

// <View style={{flex:1,backgroundColor:"white"}}>
// <View
// style={{
//     flexDirection:'row',
//     justifyContent:'space-around',
//     width:"100%",
//     height:40,
//     alignItems:'center',
//     marginTop:20
// }}>
// <Icon name="bars" color={Constants.titelhome_color} size={20}  />
// <View style={{flexDirection:'row',alignItems:'center'}}>
// <Icon  name="toggle-off" color={Constants.titelhome_color} size={15}  />

// <Text style={{
//     fontSize:Constants.titelhome_size,
//     color:Constants.titelhome_color,
//     letterSpacing:1,
//     marginLeft:5,
//     fontWeight:'bold'
// }}>
// DonatingOrg
// </Text>
// </View>
// <Icon name="bell" color={Constants.titelhome_color} size={20}  />
// </View>

// <View style={{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     width:'90%',
//     height:40,
//     alignItems:'center',
//     alignSelf:'center',
//     marginTop:10
// }}>
// <Text style={{
//     fontSize:20,
//     color:Constants.titelhome_color,
//     fontWeight:'bold'
// }}>
// History
// </Text>
// <Icon name="times" size={20} color={Constants.invalid_color} />
// </View>

// <TabView
//       navigationState={{ index:index, routes:routes }}
//       renderScene= {SceneMap({
//         first: FirstRoute,
//         second: SecondRoute,
//     })}
//       onIndexChange={index => this.setState({index})}
//       initialLayout={initialLayout}
//       renderTabBar={this.renderTabBar}
    
//     />

// </View>




// </>
//     )
// }



// }












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
