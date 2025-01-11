import { createSlice} from '@reduxjs/toolkit';

type TimerState = {
  time: number;
  isRunning: boolean;
  isBreak: boolean;
};

const initialState: TimerState = {
  time: 1 * 60, // 25 minutes
  isRunning: false,
  isBreak: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    toggleTimer(state) {
      state.isRunning = !state.isRunning;
    },
    resetTimer(state) {
      state.time = 25 * 60;
      state.isBreak = false;
      state.isRunning = false;
    },
    decrementTime(state) {
      if (state.time > 0) state.time -= 1;
    },
    switchSession(state) {
      state.isBreak = !state.isBreak;
      state.time = state.isBreak ? 5 * 60 : 25 * 60;
    },
  },
});

export const { toggleTimer, resetTimer, decrementTime, switchSession } = timerSlice.actions;
export default timerSlice.reducer;
