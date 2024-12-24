import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  poc: [
    {
      name: String,
      role: String,
      contact: String,
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
