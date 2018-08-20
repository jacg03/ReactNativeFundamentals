import { createStore, combineReducers } from "redux";
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};

export default configureStore;
