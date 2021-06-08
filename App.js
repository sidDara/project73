import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: { screen: WriteStoryScreen },
  Read: { screen: ReadStoryScreen },
},
{
  defaultNavigationOptions: ({navigation})=>({
   
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Read"){
        return(
          < Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
          
        />
        )       
      }
      
    }
    
   
  })
}



)

const AppContainer = createAppContainer(TabNavigator);
