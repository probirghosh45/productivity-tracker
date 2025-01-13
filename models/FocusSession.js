import mongoose from 'mongoose';

const FocusSessionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  timestamp: { type: Date, default: Date.now }, // Session date/time
});

export default mongoose.models.FocusSession || mongoose.model('FocusSession', FocusSessionSchema);
