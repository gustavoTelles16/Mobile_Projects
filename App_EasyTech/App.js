import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Screens/Routes'
 
export default function App()
{
   return (
       <NavigationContainer>
           <StatusBar style={styles.background} hidden/>
           <Routes/>
       </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   background:{ 
     backgroundColor: "#363636",
     barStyle: "light-content"
   },
});