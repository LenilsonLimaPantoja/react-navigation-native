import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
                <Text>Listar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
