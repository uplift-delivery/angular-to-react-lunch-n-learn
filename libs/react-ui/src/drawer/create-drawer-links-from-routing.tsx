import { AppRoutingConfig } from '../routing/app-routing-config';
import { AppDrawerLink } from './AppDrawerLink';

export function createDrawerLinksFromRouting(options: AppRoutingConfig) {
  return Object.keys(options)
    .map((key) => ({ key, config: options[key] }))
    .filter(({ config }) => config.includeInDrawer)
    .map(({ key, config }) => (
      <AppDrawerLink to={config.route} key={key}>
        {config.text}
      </AppDrawerLink>
    ));
}
