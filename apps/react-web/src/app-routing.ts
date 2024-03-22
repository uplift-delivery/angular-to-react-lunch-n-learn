import { EventModel } from '@uplift-lunch-n-learn/models';

export const AppRouting = {
  basics: {
    route: '/basics',
    text: 'Basics',
    includeInDrawer: true,
  },
  events: {
    route: '/events',
    text: 'Events',
    includeInDrawer: true,
  },
  eventDetail: {
    route: '/events/:eventId',
    to: (event: EventModel) => `/events/${event.id}`,
  },
  welcome: {
    route: '/welcome',
    text: 'Welcome',
    includeInDrawer: true,
  },
  default: {
    route: '/welcome',
  },
};
