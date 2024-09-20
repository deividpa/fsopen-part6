import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import AnecdoteForm from './components/anecdoteForm'
import { useDispatch } from 'react-redux'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdoteService'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>{}
      <h2>Annecdotes APP</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App