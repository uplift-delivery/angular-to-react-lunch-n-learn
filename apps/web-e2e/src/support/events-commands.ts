const navigate = () => cy.visit('/events');

const openCreate = () =>
  cy.findByRole('button', { name: /create\sevent/i }).click();

const enterName = (name: string) =>
  cy.findByRole('dialog').findByRole('textbox', { name: /name/i }).type(name);

const enterLocation = (location: string) =>
  cy
    .findByRole('dialog')
    .findByRole('textbox', { name: /location/i })
    .type(location);

const clickSave = () =>
  cy.findByRole('dialog').findByRole('button', { name: /save/i }).click();

const findAllEventRows = () => cy.findAllByRole('row');

const openDelete = (name: string | RegExp) =>
  cy
    .findByRole('row', { name: name })
    .findByRole('button', { name: /delete/i })
    .click();

const clickDelete = () =>
  cy
    .findByRole('dialog')
    .findByRole('button', { name: /delete/i })
    .click();
export const EventsCommands = {
  navigate,
  openCreate,
  enterName,
  enterLocation,
  clickSave,
  findAllEventRows,
  openDelete,
  clickDelete,
};
