const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;

module.exports = function (token) {
  const oauth2Client = new OAuth2(
    "561976334891-r7elktn0f64jefp8c95q99jdoli6pgmu.apps.googleusercontent.com",
    "BttgvgfUlojED-A-aTdU6kBz"
  );
  oauth2Client.setCredentials({
    access_token: token
  });
  return oauth2Client;
};
