import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Places from './src/components/Places/Places';

export default class App extends Component {
  // render() {
  //   const store = configureStore();

  //   return (
  //     <Provider store={store} >
  //       <Places />
  //     </Provider>
  //   );
  // }
}