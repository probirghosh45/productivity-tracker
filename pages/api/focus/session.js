import dbConnect from '../../../utils/dbconnect';
import FocusSession from '../../../models/FocusSession';
import { authenticateToken } from '../../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  await dbConnect();

  authenticateToken(req, res, async () => {
    const { duration } = req.body;
    const user_id = req.user.id;

    try {
      const session = await FocusSession.create({ user_id, duration });
      res.status(201).json(session);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
}
