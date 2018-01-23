const google = require('googleapis');
const calendar = google.calendar('v3');
const mapGoogleDataToLocal = require('./map-google-data-to-local.service');
const authGoogleUser = require('./auth-google-user.service');

module.exports = function (token) {
  return new Promise((resolve, reject) => {
    const auth = authGoogleUser(token);

    calendar.events.list({
      auth,
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      const user = response.data.summary;
      const events = response.data.items.filter(checkIsEventFromTodo)
        .map(mapGoogleDataToLocal);
      resolve({ events, user });
    });
  });
};

const checkIsEventFromTodo = (event) => {
  return todoEventRegexp.test(event.summary);
};

const todoEventRegexp = /^\[TO DO\](.+)$/;
