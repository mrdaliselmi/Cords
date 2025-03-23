import { ComponentType } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  component: ComponentType;
  public: boolean;
} 