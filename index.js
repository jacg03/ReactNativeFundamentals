import { AppRegistry } from 'react-native';
import React from 'react';
import Places from './src/components/Places/Places';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <Places />
    </Provider>
);

AppRegistry.registerComponent('AwesomeProject', () =>RNRedux);
