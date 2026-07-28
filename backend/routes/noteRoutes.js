const express = require("express");
const router = express.Router();
const { createNote,getAllNotes, getNoteById } = require('../controllers/noteController');
router.post('/',createNote);
router.get('/',getAllNotes);
router.get('/:id',getNoteById);
module.exports = router;