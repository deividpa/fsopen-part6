import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../services/anecdoteService';
import { useNotification } from '../NotificationContext';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const [, dispatchNotification] = useNotification();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote));

      dispatchNotification({
        type: 'SHOW',
        payload: `Anecdote '${newAnecdote.content}' created successfully!`,
      });

      setTimeout(() => {
        dispatchNotification({ type: 'HIDE' });
      }, 5000);
    },
    onError: (error) => {
      dispatchNotification({
        type: 'SHOW',
        payload: 'Error: Anecdote content must be at least 5 characters long.',
      });

      setTimeout(() => {
        dispatchNotification({ type: 'HIDE' });
      }, 5000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    if (content.length < 5) {
      dispatchNotification({ type: 'SHOW', payload: 'Anecdote must be at least 5 characters long' });
      return;
    }

    newAnecdoteMutation.mutate({ content, votes: 0 });
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
