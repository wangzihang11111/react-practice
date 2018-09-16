import React,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import SearchResult from './containers/searchResult';

const store = configureStore();

render((
    <Provider store={store}>
        <SearchResult />
    </Provider>
), document.getElementById('app'));