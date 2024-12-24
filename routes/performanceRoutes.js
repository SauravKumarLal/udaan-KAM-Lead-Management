import express from 'express';
import { 
  getPerformanceMetrics, 
  getUnderperformingAccounts, 
  updatePerformanceMetrics 
} from '../controllers/performanceController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

// Get performance metrics for all leads
router.get('/', authenticateToken, getPerformanceMetrics);

// Update performance metrics for a lead
router.put('/:leadId', authenticateToken, updatePerformanceMetrics);

// New endpoint for underperforming accounts
router.get('/underperforming', authenticateToken, getUnderperformingAccounts);

export default router;
