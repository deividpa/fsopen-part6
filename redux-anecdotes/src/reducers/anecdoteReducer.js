import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdoteService'

const getId = () => (100000 * Math.random()).toFixed(0)


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(anecdote => anecdote.id === id);
      
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1;
      }

      state.sort((a, b) => b.votes - a.votes);
    },
    createAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      });
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
});

export const { voteAnecdote, createAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer;