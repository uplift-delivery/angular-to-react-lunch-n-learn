const deleteAllEvents = () =>
  cy.request('DELETE', 'http://localhost:5001/events');
export const ApiCommands = {
  deleteAllEvents,
};
