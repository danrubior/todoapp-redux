import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[Todo] Crea todo',
  props<{ text: string }>()
);
