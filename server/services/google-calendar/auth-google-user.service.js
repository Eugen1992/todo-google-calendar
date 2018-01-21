const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;

module.exports = function (token) {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
  oauth2Client.setCredentials({
    access_token: token
  });
  return oauth2Client;
};
