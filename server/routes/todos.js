const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../middleware/authorization.middleware');
const getGoogleEvents = require('../services/google-calendar/get-google-events.service');
const createGoogleEvent = require('../services/google-calendar/create-google-event.service');
const removeGoogleEvent = require('../services/google-calendar/remove-google-event.service');
const todoModel = require('../models/todo.model');

router.get('/',
  authorizationMiddleware,
  (req, res) => {
    getGoogleEvents(req.accessToken)
      .then((events) => {
        res.send(events);
      });
});

router.post('/',
  authorizationMiddleware,
  (req, res) => {
  createGoogleEvent(req.body, req.accessToken)
    .then((event) => {
      return todoModel.create({ ...req.body, id: event.id, createdAt: event.createdAt })
        .then(() => event);
    })
    .then((event) => {
      res.send(event);
    });
});

router.delete('/:id',
  authorizationMiddleware,
  (req, res) => {
    removeGoogleEvent(req.params.id, req.accessToken)
      .then(() => {
        return todoModel.remove(req.params.id);
      })
      .then(() => {
        res.send(200);
      });
  });


module.exports = router;
