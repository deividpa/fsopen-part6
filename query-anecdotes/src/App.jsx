import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import { NotificationProvider } from './NotificationContext'

const App = () => {

  return (
    <NotificationProvider>
      <div>
        <h3>Anecdote app</h3>
        <Notification />
        <AnecdoteForm />
        <AnecdoteList />
      </div>
    </NotificationProvider>
  )
}

export default App
