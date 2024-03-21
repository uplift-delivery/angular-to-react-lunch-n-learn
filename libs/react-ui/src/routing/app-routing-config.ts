export type RoutingConfig = {
  route: string;
  includeInDrawer?: boolean;
  text?: string;
};

export type AppRoutingConfig = Record<string, RoutingConfig>;
