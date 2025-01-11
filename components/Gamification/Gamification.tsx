'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/Gamification.module.css';

const Gamification: React.FC = () => {
  // Safely access streak and badges from Redux state
  const streak = useSelector((state: RootState) => state.analytics.streak);
  const badges = useSelector((state: RootState) => state.analytics.badges || []); // Default to an empty array

  return (
    <div className={styles.gamification}>
      <h1>Gamification</h1>
      <p>
        <strong>Current Streak:</strong> {streak} days
      </p>
      <p>
        <strong>Longest Streak:</strong> {streak > 5 ? streak : 5} days (Example)
      </p>
      <div className={styles.badges}>
        <h2>Your Badges:</h2>
        {badges.length > 0 ? (
          <ul>
            {badges.map((badge, index) => (
              <li key={index}>{badge}</li>
            ))}
          </ul>
        ) : (
          <p>No badges yet! Start focusing to earn some badges. 🎖️</p>
        )}
      </div>
    </div>
  );
};

export default Gamification;
