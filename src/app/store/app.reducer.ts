import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { MenuState, menuReducer } from './menu/menu.reducer';

export interface AppState {
  router: RouterReducerState;
  menu: MenuState
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  menu: menuReducer
};
