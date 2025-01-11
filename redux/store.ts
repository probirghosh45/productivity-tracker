import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import analyticsReducer from './analyticsSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
