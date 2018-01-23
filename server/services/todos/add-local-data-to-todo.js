const todoModel = require('../../models/todo.model');

module.exports = function getLocalTodosData (events, user) {
  return todoModel.getByEmail(user)
    .then((localEvents) => {
      return events.map((event) => {
        const localEvent = localEvents.find(({ id}) => event.id === id);
        if (!localEvent) return localEvent;
        const { status, dueDate } = localEvent;
        return Object.assign(event, { status, dueDate });
      })
        .filter((event) => event);
    });
};
