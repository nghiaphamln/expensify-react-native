import {configureStore} from '@reduxjs/toolkit';
import global from './globalSlice';

const rootReducer = {
  global,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default store;
