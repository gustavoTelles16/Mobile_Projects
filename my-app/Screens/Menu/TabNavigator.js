import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import NewStack from './NewStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator()
{
     return(
         <Tab.Navigator
             screenOptions={{
                 tabBarStyle:{
                     backgroundColor: '#363636',
                     borderTopColor: 'transparent',
                     paddingEnd: 8,
                 },
                 tabBarActiveTintColor: 'yellow',
                 tabBarInactiveTintColor: '#FFF'
             }}
         >
             <Tab.Screen name = "Menu" component={HomeStack}/>
             <Tab.Screen name = "Procurar" component={SearchStack}/>
             <Tab.Screen name = "Criar" component={NewStack}/>
             <Tab.Screen name = "Notificações" component={NotificationStack}/>
             <Tab.Screen name = "Perfil" component={ProfileStack}/>
         </Tab.Navigator>
     );
}