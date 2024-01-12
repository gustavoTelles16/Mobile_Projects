import React from 'react';
import { 
     View, 
     Text,
     Image,
     StyleSheet,
     TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable' 

import { useNavigation } from '@react-navigation/native' 

export default function Welcome()
{
     const navigation = useNavigation();

     return (
         <View style={styles.container}>
             
             <View style={styles.containerLogo}>
                 <Animatable.Image 
                     animation="flipInY"
                     source={require('../assets/Image_EasyTech_Logo.png')}
                     style={styles.layoutImage}
                     resizeMode= 'contain' 
                 />
             </View>

             <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                 <Text style={styles.titleForm}>Monitore o andamento de sua manutenção! </Text>
                 <Text style={styles.textForm}> Faça o seu login para começar: </Text>
             
                 <TouchableOpacity style={styles.btnAcessar}
                 onPress={ () => navigation.navigate('Login')}>
                     <Text style={styles.txtBtnAcessar}> Acessar </Text>
                 </TouchableOpacity>
             </Animatable.View>
         
         </View>
     );
}

const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor: '#363636'
     },
     containerLogo:{
         flex:2,
         backgroundColor: '#363636',
         justifyContent: 'center',
         alignItems: 'center'
     },
     layoutImage:{
         width: '80%',
         height: '70%',
         backfaceVisibility: 'visible',
         transform:[
             {
                 perspective: 400,
             },
             {
                 rotateY: '0deg',
             }
          ],
          opacity: 1
     },
     containerForm:{
         flex: 1,
         backgroundColor: '#FFF',
         borderTopLeftRadius: 25,
         borderTopRightRadius: 25,
         paddingStart: '5%',
         paddingEnd: '5%'
     },
     titleForm:{
         fontSize: 24,
         fontWeight:'bold',
         marginTop: 28,
         marginTop: 12,
     },
     textForm:{
         color: '#a1a1a1'
     },
     btnAcessar:{
         position: 'absolute',
         backgroundColor: '#363636',
         borderRadius: 50,
         paddingVertical: 8,
         widht: '80%',
         alignSelf: 'center',
         bottom: '15%',
         AlignItems: 'center',
         justifyContent: 'center'
     },
     txtBtnAcessar:{
         fontSize: 18,
         color: '#FFF',
         fontWeight: 'bold'
     },
});