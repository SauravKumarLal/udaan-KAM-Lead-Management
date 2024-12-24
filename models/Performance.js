import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  ordersPlaced: Number,
  orderFrequency: Number, // in days
});

const Performance = mongoose.model('Performance', performanceSchema);

export default Performance;
