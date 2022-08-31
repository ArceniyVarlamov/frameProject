import { IFramesReducer } from './../interface';

const ADD_ID = "ADD_ID"
const SET_ID = "SET_ID"
const NEW_ID = "NEW_ID"
export const framesReducer = (
  state: IFramesReducer = { frames: [], id: 1 },
  action: { type: string; id: string }
) => {
  switch (action.type) {
    case ADD_ID:
      return {...state, frames: [...state.frames, action.id]}
    case SET_ID:
      return {...state, id: (state.id % 6 === 0) ? state.id : state.id + 1}
    case NEW_ID:
      return {...state, id: state.id + 1}
    default:
      return state;
  }
};

export const addIdAction = (id: string) => ({type: ADD_ID, id})
export const setIdAction = () => ({type: SET_ID})
export const newIdAction = () => ({type: NEW_ID})