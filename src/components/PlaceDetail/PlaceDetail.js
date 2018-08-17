import React from 'react';
import { View, Image, Text, Button, Modal } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View style={{ flexDirection: 'column', alignItems: 'center'}}>
                <Image
                    source={props.selectedPlace.image}
                    style={{ height: 250, width: '100%' }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide" onRequestClose={props.onModalClosed}>
            <View>
                {modalContent}
                <View>
                    <Button
                        title='Delete'
                        onPress={props.onItemDeleted}
                    />
                    <Button
                        title='Close'
                        onPress={props.onModalClosed}
                    /> 
                </View>
            </View>
        </Modal>
    );
};

export default placeDetail;  