import { EventsCommands } from '../support/events-commands';
import { ApiCommands } from '../support/api-commands';

describe('Events', () => {
  beforeEach(() => {
    ApiCommands.deleteAllEvents();
  });

  it('should allow user to add events', () => {
    EventsCommands.navigate();

    EventsCommands.openCreate();
    EventsCommands.enterName('The Big Bash');
    EventsCommands.enterLocation('Des Moines, IA');
    EventsCommands.clickSave();

    EventsCommands.findAllEventRows().should('have.length.at.least', 1);

    EventsCommands.openDelete(/The\sBig\sBash/gi);
    EventsCommands.clickDelete();
  });
});
