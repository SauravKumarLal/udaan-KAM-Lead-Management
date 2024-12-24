import express from 'express';
import { 
  addLead, 
  getLeads, 
  getLeadById, 
  updateLead, 
  deleteLead,
  getLeadsRequiringCalls
} from '../controllers/leadController.js';
import { authenticateToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// New endpoint for leads requiring calls today
router.get('/calls-today', authenticateToken, getLeadsRequiringCalls);

// Add a new lead
router.post('/', authenticateToken, addLead);

// Get all leads
router.get('/', authenticateToken, getLeads);

// Get a single lead by ID
router.get('/:id', authenticateToken, getLeadById);

// Update a lead by ID
router.put('/:id', authenticateToken, updateLead);

// Delete a lead by ID, and also Restrict `deleteLead` to admin users
router.delete('/:id', authenticateToken, isAdmin, deleteLead);


export default router;
