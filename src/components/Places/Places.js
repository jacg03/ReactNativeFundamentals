import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from '../PlaceInput/PlaceInput';
import PlaceList from '../PlaceList/PlaceList';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../../store/actions/index';


class Places extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onModalClosed={this.modalClosedHandler}
          onItemDeleted={this.placeDeletedHandler}
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  }
});


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
