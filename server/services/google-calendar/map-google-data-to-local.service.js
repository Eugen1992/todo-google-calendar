module.exports = function (googleEvent) {
  const { created, start: { dateTime }, summary, description, id } = googleEvent;

  return {
    id,
    summary: todoEventRegexp.exec(summary)[1],
    description,
    createdAt: created,
    startsAt: dateTime,
  };
};

const todoEventRegexp = /^\[TO DO\](.+)$/;