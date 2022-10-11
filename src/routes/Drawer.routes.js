import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/home/Home';
import Menu from '../components/menu/Menu';
const Drawer = createDrawerNavigator();
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator drawerContent={(props) => <Menu {...props}/>}>
            <Drawer.Screen name='Home' component={Home}/>
        </Drawer.Navigator>
    );
}
