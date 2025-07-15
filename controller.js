// server/routes/notes.js
const router = require('express').Router();
const Note = require('../models/Note');

router.get('/:userId', async (req, res) => {
  const notes = await Note.find({ userId: req.params.userId });
  res.json(notes);
});

router.post('/', async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

router.put('/:id', async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
