import Lead from '../models/Lead.js';

export const addLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate('interactions');
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id).populate('interactions');
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Display Leads Requiring Calls Today
export const getLeadsRequiringCalls = async (req, res) => {
  try {
    const today = new Date();
    const leads = await Lead.find({
      $expr: {
        $lte: [
          { $add: ['$lastCallDate', { $multiply: ['$callFrequency', 24 * 60 * 60 * 1000] }] },
          today
        ]
      }
    });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
