import mongoose from 'mongoose';

const interactionSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  date: { type: Date, default: Date.now },
  details: String,
});

const Interaction = mongoose.model('Interaction', interactionSchema);

export default Interaction;
