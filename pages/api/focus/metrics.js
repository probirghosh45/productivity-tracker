import dbConnect from '../../../utils/dbconnect';
import FocusSession from '../../../models/FocusSession';
import { authenticateToken } from '../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).send('Method not allowed');
  await dbConnect();

  authenticateToken(req, res, async () => {
    const user_id = req.user.id;

    try {
      const sessions = await FocusSession.find({ user_id });
      res.status(200).json(sessions);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
}
