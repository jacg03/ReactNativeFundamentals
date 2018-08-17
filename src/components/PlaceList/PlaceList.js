import React from 'react';
import ListItem from '../ListItem/ListItem';
import { FlatList } from 'react-native';

const PlaceList = props => {
    return (
        <FlatList
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
};

export default PlaceList;
