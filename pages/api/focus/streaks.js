// import dbConnect from '../../../utils/dbconnect';
import FocusSession from '../../../models/FocusSession';
import { authenticateToken } from '../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await dbConnect();

  authenticateToken(req, res, async () => {
    const userId = req.user.id;

    try {
      
      const sessions = await FocusSession.find({ user_id: userId }).sort({ timestamp: 1 });

      if (sessions.length === 0) {
        return res.status(200).json({ currentStreak: 0, longestStreak: 0 });
      }

  
      const streaks = calculateStreaks(sessions);
      return res.status(200).json(streaks);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  });
}

function calculateStreaks(sessions) {
  let currentStreak = 0;
  let longestStreak = 0;

  let prevDate = null;
  let tempStreak = 0;

  sessions.forEach((session) => {
    const sessionDate = new Date(session.timestamp).setHours(0, 0, 0, 0);

    if (prevDate === null) {
      
      prevDate = sessionDate;
      tempStreak = 1;
    } else if (sessionDate - prevDate === 24 * 60 * 60 * 1000) {
      // If the session is on the next consecutive day
      tempStreak += 1;
      prevDate = sessionDate;
    } else if (sessionDate !== prevDate) {
      // Break in streak
      longestStreak = Math.max(longestStreak, tempStreak);
      tempStreak = 1;
      prevDate = sessionDate;
    }
  });

  // Update longest streak after the last iteration
  longestStreak = Math.max(longestStreak, tempStreak);

  // Determine the current streak
  const today = new Date().setHours(0, 0, 0, 0);
  if (prevDate === today || prevDate === today - 24 * 60 * 60 * 1000) {
    currentStreak = tempStreak;
  }

  return { currentStreak, longestStreak };
}
