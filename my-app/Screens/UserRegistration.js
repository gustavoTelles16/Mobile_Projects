import React from 'react';
import {
      View,
      Text,
      StyleSheet,
      TextInput,
      TouchableOpacity,
      ScrollView
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
      userName: yup.string().required("Informe o seu nome completo!"),
      cpfUser: yup.string().min(11, "O CPF deve conter 11 digitos!").required("Informe o seu CPF!"),
      adressUser: yup.string().required("Informe o seu endereço!"),
      emailUser: yup.string().required("Informe o seu e-mail!"),
      emailValidation: yup.string().required("Informe o e-mail novamente!"),
      passwordUser: yup.string().min(8, "A senha deve conter pelo menos 8 digitos!").required("Informe a senha!"),
      passwordValidation: yup.string().min(8, "A senha deve ser a mesma digitada acima!").required("Informe a senha novamente!")
})

export default function UserRegistration()
{
      const {control, handleSubmit, formState: { errors } } = useForm({
           resolver: yupResolver(schema)
      }) 

      const navigation = useNavigation();
     
      const registrationValidation = async (data) =>
      {
          try 
          {
                await schema.validate(data);
                navigation.navigate("Login");       
          }
          catch (errors) 
           {
                console.log(errors);
           }        
      }

      return (
           <View style={styles.container}>
               <ScrollView>
               
                     <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                         <Text style={styles.titleRegistration}> Preencha os campos com seus dados: </Text>
                     </Animatable.View>

                     <Animatable.View animation = "fadeInUp" style={styles.containerForm}>
                          <Text style={styles.titlesInputs}> Nome completo: </Text>
                               <Controller
                                    control={control}
                                    name = "userName"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Digite seu nome completo..."
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.userName && 1,
                                                        borderColor: errors.userName && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.userName && <Text style={styles.lblError}> {errors.userName.message} </Text>}
               
                          <Text style={styles.titlesInputs}> CPF: </Text>
                               <Controller
                                    control={control}
                                    name = "cpfUser"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Digite seu CPF..."
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.cpfUser && 1,
                                                        borderColor: errors.cpfUser && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.cpfUser && <Text style={styles.lblError}> {errors.cpfUser.message} </Text>}

                          <Text style={styles.titlesInputs}> Endereço: </Text>
                               <Controller
                                    control={control}
                                    name = "adressUser"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Digite seu endereço..."
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.adressUser && 1,
                                                        borderColor: errors.adressUser && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.adressUser && <Text style={styles.lblError}> {errors.adressUser.message} </Text>}
                                                        
                          <Text style={styles.titlesInputs}> E-mail: </Text>
                               <Controller
                                    control={control}
                                    name = "emailUser"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Digite seu e-mail..."
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.emailUser && 1,
                                                        borderColor: errors.emailUser && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.emailUser && <Text style={styles.lblError}> {errors.emailUser.message} </Text>}
                                    
                          <Text style={styles.titlesInputs}> Confirme seu e-mail: </Text>
                               <Controller
                                    control={control}
                                    name = "emailValidation"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Digite seu e-mail novamente..."
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.emailValidation && 1,
                                                        borderColor: errors.emailValidation && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.emailValidation && <Text style={styles.lblError}> {errors.emailValidation.message} </Text>}
                               
                          <Text style={styles.titlesInputs}> Senha: </Text>
                               <Controller
                                    control={control}
                                    name = "passwordUser"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Insira uma senha..."
                                              secureTextEntry={true}
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.passwordUser && 1,
                                                        borderColor: errors.passwordUser && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.passwordUser && <Text style={styles.lblError}> {errors.passwordUser.message} </Text>}
                               
                          <Text style={styles.titlesInputs}> Confirme sua senha: </Text>
                               <Controller
                                    control={control}
                                    name = "passwordValidation"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                         <TextInput
                                              onChangeText={onChange}
                                              onBlur={onBlur}
                                              value={value}
                                              placeholder="Insira a senha novamente..."
                                              secureTextEntry={true}
                                              style=
                                                   {[styles.txtsInputs, {
                                                        borderWidht: errors.passwordValidation && 1,
                                                        borderColor: errors.passwordValidation && '#FF375B'
                                                   }]}
                                         />
                                    )}
                               />

                               {errors.passwordValidation && <Text style={styles.lblError}> {errors.passwordValidation.message} </Text>}
                                                              
                          <TouchableOpacity style={styles.btnConfirmar}
                          onPress={handleSubmit(registrationValidation)}>
                               <Text style={styles.txtBtnCadastrar}> Confirmar </Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.btnVoltar}
                          onPress={ () => navigation.navigate('Login')}>
                               <Text style={styles.txtBtnVoltar}> Voltar </Text>
                          </TouchableOpacity>
                     </Animatable.View>
           
                </ScrollView>
           </View>
      );
}

const styles = StyleSheet.create({
      container:{
           flex: 1, 
           backgroundColor: '#363636' 
      },
      titleRegistration:{
           fontSize: 28,
           fontWeight: 'bold',
           color: '#FFF',
           marginTop: '14%',
           marginBottom: '8%',
           paddingStart: '5%',
           paddingHorizontal: '5%',
      },
      containerForm:{
           backgroundColor: '#FFF',
           flex: 1,
           borderTopLeftRadius: 25,
           borderTopRightRadius: 25,
           paddingStart: '5%',
           paddingEnd: '5%' 
      }, 
      titlesInputs:{
           fontSize: 28,
           marginTop: 28
      },
      txtsInputs:{
           borderBottomWidth: 1,
           height: 40,
           marginBottom: 12,
           fontSize: 16,
           borderWidht: 1,
           borderColor: '#FF375B'
      }, 
      lblError:{
           alignSelf: 'flex-start',
           color: '#FF375B',
           marginBottom: 8
      },
      btnConfirmar:{
           backgroundColor: '#363636', 
           width: '100%', 
           borderRadius: 4, 
           paddingVertical: 8, 
           marginTop: 14, 
           justifyContent: 'center', 
           alignItems: 'center' 
      }, 
      txtBtnCadastrar:{
           color: '#FFF', 
           fontSize: 18, 
           fontWeight: 'bold' 
      }, 
      btnVoltar:{ 
           backgroundColor: '#363636', 
           width: '100%', 
           borderRadius: 4, 
           paddingVertical: 8,
           marginVertical: 10,
           marginTop: 14, 
           justifyContent: 'center', 
           alignItems: 'center' 
      }, 
      txtBtnVoltar:{
           color: '#FFF', 
           fontSize: 18, 
           fontWeight: 'bold' 
      } 
});