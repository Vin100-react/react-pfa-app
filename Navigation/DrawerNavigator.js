import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';

import Home from '../Components/Home';
import Settings from '../Components/Settings';
//import Index from '../Components/Index';
import Mail from '../Components/Mails/Mail.js';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Accueil"
        component={Home}/>
      <Drawer.Screen
        name="Emploi du Temps"
        component={Settings}
      />  
      <Drawer.Screen
        name="Agenda"
        component={Settings}
      />
      <Drawer.Screen
        name="Mails"
        component={Mail}
      />
      <Drawer.Screen
        name="Carte"
        component={Settings}
      />
      <Drawer.Screen
        name="Messagerie"
        component={Settings}
      />
      <Drawer.Screen
        name="Scolarité"
        component={Settings}
      />
      <Drawer.Screen
        name="Associatif"
        component={Settings}
      />
      <Drawer.Screen
        name="Paramètres"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}
