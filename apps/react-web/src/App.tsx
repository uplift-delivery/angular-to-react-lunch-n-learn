import { Route, Routes, Navigate } from 'react-router-dom';
import {
  AppDrawer,
  AppLayout,
  AppMenubar,
  createDrawerLinksFromRouting,
} from '@uplift-lunch-n-learn/react-ui';
import { EventsPage } from './events/EventsPage';
import { WelcomePage } from './welcome/WelcomePage';
import { AppRouting } from './app-routing';
import { useCallback, useMemo, useState } from 'react';
import { EventDetailsPage } from './events/EventDetailsPage';

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(
    () => setIsDrawerOpen(!isDrawerOpen),
    [isDrawerOpen, setIsDrawerOpen]
  );
  const closeDrawer = useCallback(
    () => setIsDrawerOpen(false),
    [setIsDrawerOpen]
  );
  const drawerLinks = useMemo(
    () => createDrawerLinksFromRouting(AppRouting),
    []
  );

  return (
    <AppLayout>
      <AppMenubar onMenuClick={toggleDrawer}></AppMenubar>
      <AppDrawer open={isDrawerOpen} onClose={closeDrawer}>
        {drawerLinks}
      </AppDrawer>

      <Routes>
        <Route path={AppRouting.events.route} element={<EventsPage />} />
        <Route
          path={AppRouting.eventDetail.route}
          element={<EventDetailsPage />}
        />
        <Route path={AppRouting.welcome.route} element={<WelcomePage />} />
        <Route
          path={'*'}
          element={<Navigate to={AppRouting.default.route} />}
        />
      </Routes>
    </AppLayout>
  );
}
