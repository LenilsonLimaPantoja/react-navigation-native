import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function PreLoading() {
    const navigation = useNavigation();
    useEffect(() => {
        // essa requisição foi feita apenas para gerar uma atraso e aparecer o loadign
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then((result) => {
                // pode direcionar pro login caso não haja token
                navigation.reset({
                    index: 1,
                    routes: [
                        {
                            name: 'DrawerRoutes'
                        }
                    ]
                })
            })

    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='small' color='#174c4f' />
        </View>
    );
}
