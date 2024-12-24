import Performance from '../models/Performance.js';

export const getPerformanceMetrics = async (req, res) => {
  try {
    const metrics = await Performance.find().populate('lead');
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePerformanceMetrics = async (req, res) => {
  try {
    const performance = await Performance.findOneAndUpdate(
      { lead: req.params.leadId },
      req.body,
      { new: true, upsert: true } // Create if doesn't exist
    );
    res.json(performance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Underperforming Accounts
export const getUnderperformingAccounts = async (req, res) => {
  try {
    const metrics = await Performance.find({ ordersPlaced: { $lt: 5 } }).populate('lead');
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
