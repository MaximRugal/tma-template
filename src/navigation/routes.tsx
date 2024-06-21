import type { ComponentType, JSX } from 'react';

import { IndexPage } from '../pages/IndexPage/IndexPage';
import { CardActionsPage } from '../pages/CardActionsPage/CardActionsPage';
interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage, title: 'Index Page' },
  { path: '/cardActions', Component: CardActionsPage, title: 'Card Actions' },
];
