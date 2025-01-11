'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../../styles/FocusDashboard.module.css';

const FocusDashboard: React.FC = () => {
  // Fetch weekly focus session data from Redux
  const focusSessions = useSelector((state: RootState) => state.analytics.focusSessions);

  // Prepare data for Recharts
  const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => ({
    day,
    focusTime: focusSessions[i],
  }));

  return (
    <div className={styles.dashboard}>
      <h1>Focus Dashboard</h1>
      <div className={styles.chartContainer}>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="focusTime" fill="#10b981" />
        </BarChart>
      </div>
      <div className={styles.stats}>
        <p>
          <strong>Total Focus Time:</strong>{' '}
          {focusSessions.reduce((total, time) => total + time, 0)} minutes
        </p>
        <p>
          <strong>Average Focus Time:</strong>{' '}
          {Math.round(
            focusSessions.reduce((total, time) => total + time, 0) / focusSessions.length
          )}{' '}
          minutes/day
        </p>
      </div>
    </div>
  );
};

export default FocusDashboard;
