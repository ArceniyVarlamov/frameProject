import { configureStore } from '@reduxjs/toolkit';
import framesReducer from './framesSlice';

export default configureStore({
  reducer: {
    frames: framesReducer
  }
})