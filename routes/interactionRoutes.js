import express from 'express';
import { 
  addInteraction, 
  getInteractions, 
  getInteractionsByLead 
} from '../controllers/interactionController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();   

// Add a new interaction
router.post('/', authenticateToken, addInteraction);

// Get all interactions
router.get('/', authenticateToken, getInteractions);

// Get interactions for a specific lead
router.get('/:leadId', authenticateToken, getInteractionsByLead);

export default router;
