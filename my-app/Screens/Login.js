import React from 'react';
import { 
     View, 
     Text,
     StyleSheet,
     TextInput,
     TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
     email: yup.string().email("E-mail inválido!").required("Informe seu e-mail!"),
     password: yup.string().min(8,"A senha deve conter pelo menos 8 digitos!").required("Informe sua senha!")
})

export default function Login()
{
     const {control, handleSubmit, formState: { errors } } = useForm({
         resolver: yupResolver(schema)
     })
     
     const navigation = useNavigation();  

     const UserLogin = async (data) =>
     {
         try
         {
             await schema.validate(data);
             navigation.navigate("Início");
         }
         catch (errors)
         {
             console.log(errors);   
         }
     }

     return (
         <View style={styles.container}>
             
             <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >
                 <Text style={styles.txtWelcome}> Bem-vindo(a) </Text>
             </Animatable.View>

             <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                 <Text style={styles.titlesForm}> E-mail: </Text>
                     <Controller
                         control={control}
                         name = "email"
                         render={({ field: { onChange, onBlur, value } }) => (
                             <TextInput
                                 onChangeText={onChange}
                                 onBlur={onBlur}
                                 value={value}
                                 placeholder="Digite seu e-mail..."
                                 style=
                                     {[styles.txtsInput, {
                                         borderWidth: errors.email && 1,
                                         borderColor: errors.email && '#FF375B'
                                     }]}
                             />
                         )}
                     />
                 
                     {errors.email && <Text style={styles.lblError}> {errors.email.message} </Text>}

                 <Text style={styles.titlesForm}> Senha: </Text>
                     <Controller
                         control={control}
                         name = "password"
                         render={({ field: {onChange, onBlur, value}}) => (
                             <TextInput
                                 onChangeText={onChange}
                                 onBlur={onBlur}
                                 value={value}
                                 placeholder="Digite sua senha..."
                                 style={[
                                     styles.txtsInput, {
                                         borderWidth: errors.password && 1,
                                         borderColor: errors.password && '#FF375B'
                                     }]}
                                 secureTextEntry={true}
                             />
                         )}
                     />

                     {errors.password && <Text style={styles.lblError}> {errors.password.message} </Text>}

                 <TouchableOpacity style={styles.btnEntrar}
                 onPress={handleSubmit(UserLogin)}>
                         <Text style={styles.txtBtnEntrar}> Entrar </Text>
                 </TouchableOpacity>

                 <Text style={styles.txtCadastrar}> Não possui cadastro? Clique no botão abaixo: </Text>
                 
                 <TouchableOpacity style={styles.btnCadastrar}
                 onPress={ () => navigation.navigate('Cadastro de Login')}>
                     <Text style={styles.txtBtnCadastrar}> Cadastrar </Text>
                 </TouchableOpacity>
             </Animatable.View>

         </View>
     );
}

const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor: '#363636'
     },
     containerHeader:{
         marginTop: '14%',
         marginBottom: '8%',
         paddingStart: '5%'
     },
     txtWelcome:{
         fontSize: 28,
         fontWeight: 'bold',
         color: '#FFF'
     },
     containerForm:{
         backgroundColor: '#FFF',
         flex: 1,
         borderTopLeftRadius: 25,
         borderTopRightRadius: 25,
         paddingStart: '5%',
         paddingEnd: '5%'
     },
     titlesForm:{
         fontSize: 28,
         marginTop: 28
     },
     txtsInput:{
         borderBottomWidth: 1,
         height: 40,
         marginBottom: 12,
         fontSize: 16
     },
     lblError:{
          alignSelf: 'flex-start',
          color: '#FF375B',
          marginBottom: 8
     },
     btnEntrar:{
         backgroundColor: '#363636',
         widht: '100%',
         borderRadius: 4,
         paddingVertical: 8,
         marginTop: 14,
         justifyContent: 'center',
         alignItems: 'center'
     },
     txtBtnEntrar:{
         color: '#FFF',
         fontSize: 18,
         fontWeight: 'bold'
     },
     txtCadastrar:{
         color: '#A1A1A1',
         marginTop: 14,
         alignSelf: 'center'
     },
     btnCadastrar:{
         backgroundColor: '#363636',
         widht: '100%',
         borderRadius: 4,
         paddingVertical: 8,
         marginTop: 14,
         justifyContent: 'center',
         alignItems: 'center'
     },
     txtBtnCadastrar:{
         color: '#FFF',
         fontSize: 18,
         fontWeight: 'bold',
     }
});