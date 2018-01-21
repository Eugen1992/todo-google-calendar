const express = require('express');
const router = express.Router();
const authorizatioMiddleware = require('../middleware/authorization.middleware');
const getGoogleEvents = require('../services/google-calendar/get-google-events.service');
const createGoogleEvent = require('../services/google-calendar/create-google-event.service');
const removeGoogleEvent = require('../services/google-calendar/remove-google-event.service');

router.get('/',
  authorizatioMiddleware,
  (req, res) => {
    getGoogleEvents(req.accessToken)
      .then((events) => {
        res.send(events);
      });
});

router.post('/',
  authorizatioMiddleware,
  (req, res) => {
  createGoogleEvent(req.body, req.accessToken)
    .then((event) => {
      res.send(event);
    })
});

router.delete('/:id',
  authorizatioMiddleware,
  (req, res) => {
    removeGoogleEvent(req.params.id, req.accessToken)
      .then(() => {
        res.sendStatus(200);
      })
  });


module.exports = router;
