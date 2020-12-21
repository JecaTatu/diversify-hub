import { createAction, props } from '@ngrx/store';

const PREFIX = '[MENU]';

export type CurrentModule =
  | 'unknown_module';

export const toggleMenu = createAction(`${PREFIX} TOGGLE MENU`);
export const defineOpenModule = createAction(
  `${PREFIX} DEFINE OPEN MODULE`,
  props<{ currentModule: CurrentModule }>()
);
