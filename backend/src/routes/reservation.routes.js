const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const { authenticate } = require('../middleware/auth');

// All routes require authentication
router.use(authenticate);

// POST /api/reservations - Create new reservation
router.post('/', reservationController.createReservation);

// GET /api/reservations - Search/list reservations
router.get('/', reservationController.getReservations);

// GET /api/reservations/:id - Get single reservation
router.get('/:id', reservationController.getReservationById);

// PUT /api/reservations/:id - Update reservation
router.put('/:id', reservationController.updateReservation);

// DELETE /api/reservations/:id - Cancel reservation
router.delete('/:id', reservationController.cancelReservation);

// POST /api/reservations/:id/checkin - Check-in guest
router.post('/:id/checkin', reservationController.checkIn);

// POST /api/reservations/:id/checkout - Check-out guest
router.post('/:id/checkout', reservationController.checkOut);

module.exports = router;