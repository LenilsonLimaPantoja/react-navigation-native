import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => navigation.navigate('Lista')}>Ir para listagem</Text>
        </View>
    );
}