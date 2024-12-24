import express from 'express';
import { 
  addRestaurant, 
  getRestaurants, 
  getRestaurantById, 
  updateRestaurant, 
  deleteRestaurant 
} from '../controllers/restaurantController.js';
import { authenticateToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Add a new restaurant
router.post('/', authenticateToken, addRestaurant);

// Get all restaurants
router.get('/', authenticateToken, getRestaurants);

// Get a single restaurant by ID
router.get('/:id', authenticateToken, getRestaurantById);

// Update a restaurant by ID
router.put('/:id', authenticateToken, updateRestaurant);

// Delete a restaurant by ID && Restrict `deleteRestaurant` to admin users
router.delete('/:id', authenticateToken, isAdmin, deleteRestaurant);

export default router;

