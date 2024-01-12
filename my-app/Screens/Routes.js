import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome'
import Login from './Login'
import UserRegistration from './UserRegistration'

import TabNavigator from './Menu/TabNavigator'

const Stack = createStackNavigator();

export default function Routes()
{
     return (
         <Stack.Navigator>
             <Stack.Screen
                 name = "Welcome"
                 component = { Welcome }
                 options = {{ headerShown: false }}
             />
             
             <Stack.Screen
                 name = "Login"
                 component = { Login }
                 option = {{ headerShown: false }}
             />

             <Stack.Screen
                 name = "Cadastro de Login"
                 component = { UserRegistration }
                 option = {{ headerShown: false }}
             />

             <Stack.Screen 
                 name = "Início"
                 component = { TabNavigator }
                 options = {{ headeShown: false }}
             />

             <Stack.Screen
                 name = "Procurar"
                 component = { TabNavigator }
                 options = {{ headerShown: false }}
             />

             <Stack.Screen
                 name = "Criar"
                 component = { TabNavigator }
                 options = {{ headerShown: false }}
             />

             <Stack.Screen
                 name = "Notificações"
                 component = { TabNavigator }
                 options = {{ headerShown: false }}
             />

             <Stack.Screen
                 name = "Perfil"
                 component = { TabNavigator }
                 options = {{ headerShown: false }}
             />
         </Stack.Navigator>
     );
}