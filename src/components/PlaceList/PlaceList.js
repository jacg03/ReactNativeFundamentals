import React from 'react';
import ListItem from '../ListItem/ListItem';
import { FlatList } from 'react-native';

const PlaceList = (props) => {
    // const placesOutput = props.places.map((place, i) => (
    // <ListItem 
    //     key={i} 
    //     placeName={place} 
    //     onItemPressed={()=>props.onItemDeleted(i)}
    // />
    // ));

    return (
        // <View>
        //     {placesOutput}
        // </View>
        <FlatList
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.value}
                    image={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )} 
        />
    );
};

export default PlaceList;
