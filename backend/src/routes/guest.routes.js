const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guest.controller');
const { authenticate } = require('../middleware/auth');

router.use(authenticate);

// GET /api/guests - Search/list guests
router.get('/', guestController.getGuests);

// GET /api/guests/:id - Get single guest
router.get('/:id', guestController.getGuestById);

// POST /api/guests - Create guest profile
router.post('/', guestController.createGuest);

// PUT /api/guests/:id - Update guest
router.put('/:id', guestController.updateGuest);

// DELETE /api/guests/:id - Delete guest
router.delete('/:id', guestController.deleteGuest);

module.exports = router;