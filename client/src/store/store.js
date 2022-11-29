/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { globalReducer } from './reducers/globalReducer';

const reducer = combineReducers({
  globalStore: globalReducer,
});

export const store = configureStore({ reducer });
