import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import AnecdoteForm from './components/anecdoteForm'

const App = () => {
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