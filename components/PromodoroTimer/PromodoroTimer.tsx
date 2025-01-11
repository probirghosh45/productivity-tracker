'use client'; 

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleTimer, resetTimer, decrementTime, switchSession } from '../../redux/timerSlice';
import styles from '../../styles/PomodoroTimer.module.css';
const PomodoroTimer: React.FC = () => {
  const { time, isRunning, isBreak } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);

      if (time === 0) dispatch(switchSession());

      return () => clearInterval(interval);
    }
  }, [isRunning, time, dispatch]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.timer}>
      <h1>{isBreak ? 'Break Time' : 'Focus Time'}</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={() => dispatch(toggleTimer())}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
