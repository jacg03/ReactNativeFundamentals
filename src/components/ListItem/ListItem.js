import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listitem}>
                <Image
                    source={props.image}
                    style={styles.image}
                />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listitem: {
        width: '100%',
        padding: 10,
        margin: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 20,
        width: 30,
        marginRight: 10
    }
});
export default ListItem;