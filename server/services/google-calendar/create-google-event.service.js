const google = require('googleapis');
const calendar = google.calendar('v3');
const moment = require('moment');
const mapGoogleDataToLocal = require('./map-google-data-to-local.service');
const authGoogleUser = require('./auth-google-user.service');

module.exports = function (data, token) {
  const { startDate, description, summary } = data;
  const endDate = moment(startDate).add(1, 'h').format();
  const event = {
    description,
    summary: `[TO DO]${summary}`,
    start: {
      'dateTime': startDate,
    },
    end: {
      'dateTime': endDate,
    },
  };
  return new Promise((resolve, reject) => {
    const auth = authGoogleUser(token);

    calendar.events.insert({
      auth,
      calendarId: 'primary',
      resource: event,
    }, (err, event) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      console.log('The API returned dataa');
      resolve(event.data);
    })
  }).then((event) => {
    return mapGoogleDataToLocal(event);
  });
};
