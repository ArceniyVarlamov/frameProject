import { IFramesReducer } from './../interface';

const ADD_FRAMES = "ADD_FRAMES"
const ADD_ID = "ADD_ID"
const ADD_COL = "ADD_COL"

export const framesReducer = (
  state: IFramesReducer = { frames: [], id: 1, col: 1 },
  action: { type: string; frames: any[] }
) => {
  switch (action.type) {
    case ADD_FRAMES:
      return {...state, frames: [...state.frames, ...action.frames]}
    case ADD_ID:
      return {...state, id: state.id + 6}
    case ADD_COL:
      return {...state, col: state.col + 1}
    default:
      return state;
  }
};

export const addId = () => ({type: ADD_ID})