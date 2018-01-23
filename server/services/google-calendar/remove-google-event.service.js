const google = require('googleapis');
const calendar = google.calendar('v3');
const authGoogleUser = require('./auth-google-user.service');

module.exports = function (eventId, token) {
  return new Promise((resolve) => {
    const auth = authGoogleUser(token);

    calendar.events.delete({
      auth,
      calendarId: 'primary',
      eventId,
    }, (err) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      resolve();
    })
  });
};
