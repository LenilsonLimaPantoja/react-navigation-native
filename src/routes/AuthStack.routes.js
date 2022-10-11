import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from '../components/lista/Lista';
import DrawerRoutes from './Drawer.routes';
import PreLoading from '../components/preLoadign/PreLoading';
const Stack = createNativeStackNavigator();
export default function AuthStackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PreLoading' component={PreLoading} options={{headerShown: false}}/>
            <Stack.Screen name='DrawerRoutes' component={DrawerRoutes} options={{headerShown: false}}/>
            <Stack.Screen name='Lista' component={Lista}/>
        </Stack.Navigator>
    );
}
