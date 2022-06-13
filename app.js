import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as React from 'react';
// import Const from './chairtyApp/const';
import Homepage from './chairtyApp/Homepage';
import Profile from './chairtyApp/Profile';

import Searchpage from './chairtyApp/Searchpage';
import Historypage from './chairtyApp/Historypage';

// import Sure from './chairtyApp/Sure';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import VisaPage_1menue from './chairtyApp/VisaPage_1menue';


import {
  View,
  ScrollView,
  SafeAreaView,
 
  Text,
 
  TouchableOpacity,
  Image,
  
} from 'react-native';
import Sure from './chairtyApp/Sure';
import VisaPage_2Menue from './chairtyApp/VisaPage2222';
import VisaPage2222 from './chairtyApp/VisaPage2222';
// import VisaPage_2menue from './chairtyApp/VisaPage_2menue';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
     
//     }
//   }

//   render() {
//     return (
//       <>
//       <VisaPage2222/>
//         </>
//     )
//   }
// }


const taps = createMaterialBottomTabNavigator(
  {

   
    profile_page: {
      screen: Profile
      , navigationOptions: {
        tabBarLabel: "profile",
        // tabBarBadge: 3,

        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="user" size={20} color={tintColor} />
          </View>

        )
        ,
        barStyle: {
          backgroundColor: "#fff"
        },
        activeColor: "#26508E",
        inactiveColor: "#566662"
      }
    },
    history_page: {
      screen:Historypage
      , navigationOptions: {
        tabBarLabel: "history",
        tabBarBadge: 3,

        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="history" size={20} color={tintColor} />
          </View>

        )
        ,
        barStyle: {
          backgroundColor: "#fff"
        },
        activeColor: "#26508E",
        inactiveColor: "#566662"
      }
    },
    search_page: {
      screen: Searchpage
      , navigationOptions: {
        tabBarLabel: "search",
      

        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="search" size={20} color={tintColor} />
          </View>

        )
        ,
        barStyle: {
          backgroundColor: "#fff"
        },
        activeColor: "#26508E",
        inactiveColor: "#566662"
      }
    },
    home: {
      screen: Homepage
      , navigationOptions: {
        tabBarLabel: "Home",

        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="home" size={20} color={tintColor} />
          </View>

        )
        ,
        barStyle: {
          backgroundColor: "#fff"
        },
        activeColor: "#26508E",
        inactiveColor: "#566662",

      }
    },

  }






  ,

  {
    headerMode: "none",
    barStyle: { backgroundColor: "#000" },
    // activeColor: "#fff",
    // inactiveColor: "#4b4a4a",
    initialRouteName: "home"
    ,
  }

)



const CustomDrawerContentComponent = (props) => (
  <ScrollView
  
  
  >
      <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ top: 'always', horizontal: 'never' }}>

          <View
              style={{
                  width: "100%",
                  height: 200,
                  paddingTop: 20,
                  paddingLeft: 20
              }}>
              <Image source={require("./img_chairty/user8.jpg")}
                  style={{
                      height: 130, width: 130, borderRadius: 75
                  }}
              ></Image>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reham Gamal</Text>
              <TouchableOpacity>
                  <Text style={{ color: "#aaa" }}>01280705434</Text></TouchableOpacity>
          </View>
          <DrawerItems {...props
          
          
          
          } />
          <View
              style={{
                  width: "100%",
                  height: 200,
              }}>
              <TouchableOpacity
                  style={{ height: 50, paddingLeft: 13, paddingTop: 25 }}
              >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>log out</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  </ScrollView>
)


const drawer = createDrawerNavigator(
  {
      tap: {
          screen: taps
      },
      search_page: {
        screen: Searchpage
      },
      history_page: {
        screen:Historypage
      }
  }, {

  contentComponent: CustomDrawerContentComponent,

 
},{
  

options:{
  
}
}

)
export default createAppContainer(drawer)











// export default createAppContainer(taps)