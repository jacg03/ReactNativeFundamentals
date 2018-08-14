import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }; 

    render() {
        return (
            <View style={styles.formcontainer}>
                <TextInput
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.Input}
                />
                <Button
                    title="Add"
                    onPress={this.placeSubmitHandler}
                    style={styles.Button}
                />                  
            </View>
        );
    }
}


const styles = StyleSheet.create({
    formcontainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Input: {
        width: '70%'
    },
    Button: {
        width: '30%'
    }
});

export default PlaceInput;