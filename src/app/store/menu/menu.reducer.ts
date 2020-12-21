import { Action, createReducer, on } from '@ngrx/store';
import { CurrentModule, defineOpenModule, toggleMenu } from './menu.actions';

export interface MenuState {
  isOpen: boolean;
  currentModule: CurrentModule;
}

const initialState: MenuState = {
  isOpen: true,
  currentModule: 'unknown_module'
};

export const menuReducer = createReducer(
  initialState,
  on(toggleMenu, (state) => ({
    ...state,
    isOpen: !state.isOpen
  })),
  on(defineOpenModule, (state, { currentModule }) => ({
    ...state,
    defineOpenModule: currentModule
  }))
);

export function reducer(
  state: MenuState | undefined,
  action: Action
): MenuState {
  return menuReducer(state, action);
}
