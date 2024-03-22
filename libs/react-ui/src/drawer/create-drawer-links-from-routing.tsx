import { AppRoutingConfig } from '../routing/app-routing-config';
import { AppDrawerLink, AppDrawerLinkProps } from './AppDrawerLink';

export function createDrawerLinksFromRouting(
  options: AppRoutingConfig,
  props?: Omit<AppDrawerLinkProps, 'to'>
) {
  return Object.keys(options)
    .map((key) => ({ key, config: options[key] }))
    .filter(({ config }) => config.includeInDrawer)
    .map(({ key, config }) => (
      <AppDrawerLink {...props} to={config.route} key={key}>
        {config.text}
      </AppDrawerLink>
    ));
}
