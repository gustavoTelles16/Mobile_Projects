import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewStack()
{
     return(
         <View style={styles.container}>
             <Text style={styles.titleHeader}> Tela de Criação </Text>
         </View>
     );
}

const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor: '#FFF',
         alignItems: 'center',
         justifyContent: 'center'
     },
     titleHeader:{
         fontSize: 25,
         fontWeight: 'bold'
     }
});