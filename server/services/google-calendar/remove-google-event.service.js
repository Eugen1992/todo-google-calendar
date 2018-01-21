const google = require('googleapis');
const calendar = google.calendar('v3');
const mapGoogleDataToLocal = require('./map-google-data-to-local.service');
const authGoogleUser = require('./auth-google-user.service');

module.exports = function (eventId, token) {
  return new Promise((resolve) => {
    const auth = authGoogleUser(token);

    calendar.events.delete({
      auth,
      calendarId: 'primary',
      eventId,
    }, (err, event) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      console.log('The API returned dataa');
      resolve(event.data);
    })
  });
};
