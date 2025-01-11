import { createSlice } from '@reduxjs/toolkit';

type AnalyticsState = {
  badges: any;
  streak: any;
  focusSessions: number[];
};

const initialState: AnalyticsState = {
  focusSessions: [120, 150, 200, 180, 90, 60, 0], 
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
});

export default analyticsSlice.reducer;
