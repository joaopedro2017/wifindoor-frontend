import React from 'react';
import { View, Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from './styles/styles';

const Feed = () => {

    const route = useRoute();
    const navigation = useNavigation();
    let detailResult = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Text>
                {
                    detailResult ? detailResult.data : 'Navigation'
                }
            </Text>
            <Button
                title='Go to Feed item'
                onPress={() => { navigation.navigate('Detail', { screenName: "My Detail Screen" }) }}
            />
        </View>
    )

}

export default Feed;