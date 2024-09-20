import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome to the Anecdote app!',
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification() {
      return 'Welcome to the Anecdote app!';
    }
  }
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const showNotification = (message, timeInSeconds) => {
    return dispatch => {
      dispatch(setNotification(message))
      setTimeout(() => {
        dispatch(clearNotification())
      }, timeInSeconds * 1000)
    }
  }

export default notificationSlice.reducer;