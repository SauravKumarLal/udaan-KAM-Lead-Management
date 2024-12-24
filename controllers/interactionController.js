import Interaction from '../models/Interaction.js';
import Lead from '../models/Lead.js';

export const addInteraction = async (req, res) => {
  try {
    const interaction = new Interaction(req.body);
    await interaction.save();

    // Update the lead with the interaction
    const lead = await Lead.findById(req.body.lead);
    if (lead) {
      lead.interactions.push(interaction._id);
      lead.lastCallDate = interaction.date;
      await lead.save();
    }

    res.status(201).json(interaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.find().populate('lead');
    res.json(interactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getInteractionsByLead = async (req, res) => {
  try {
    const interactions = await Interaction.find({ lead: req.params.leadId });
    res.json(interactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
