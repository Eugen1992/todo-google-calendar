module.exports = function (googleEvent) {
  const { created, start: { dateTime }, summary, description, id, creator: { email } } = googleEvent;

  return {
    id,
    summary: todoEventRegexp.exec(summary)[1],
    description,
    createdAt: created,
    startsAt: dateTime,
    user: email,
  };
};

const todoEventRegexp = /^\[TO DO\](.+)$/;