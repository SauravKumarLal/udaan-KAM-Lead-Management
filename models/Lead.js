import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: [{ type: String }],
  status: { type: String, enum: ['New', 'In Progress', 'Converted'], default: 'New' },
  interactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interaction' }],
  lastCallDate: Date,
  callFrequency: Number, // in days
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;  
