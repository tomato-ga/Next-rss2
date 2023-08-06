import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice
  }
});

export function initializeStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      data: dataSlice
    },
    preloadedState
  });
}
