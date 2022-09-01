import { IFramesReducer } from './../interface';

const ADD_ID = "ADD_ID"

export const framesReducer = (
  state: IFramesReducer = { frames: [], id: 1 },
  action: { type: string; id: string }
) => {
  switch (action.type) {
    case ADD_ID:
      return {...state, frames: [...state.frames, action.id]}
    default:
      return state;
  }
};
