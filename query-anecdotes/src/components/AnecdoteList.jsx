import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { getAnecdotes, updateAnecdote } from '../services/anecdoteService';

const AnecdoteList = () => {
    const queryClient = useQueryClient();

    const { data: anecdotes, error, isLoading, isError } = useQuery({
        queryKey: ['anecdotes'],
        queryFn: getAnecdotes,
        retry: false
    });

    const voteMutation = useMutation({
        mutationFn: updateAnecdote,
        onSuccess: () => {
            queryClient.invalidateQueries(['anecdotes']);
        },
    });

    const handleVote = (anecdote) => {
        const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
        voteMutation.mutate(updatedAnecdote);
      };

    if (isLoading) {
        return <div>Loading anecdotes...</div>;
    }

    if (isError) {
        return <div>Anecdote service not available due to problems in server</div>;
    }

    return (
        <div>
        {anecdotes.map(anecdote => (
            <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
            </div>
        ))}
        </div>
    );
};

AnecdoteList.propTypes = {
    handleVote: PropTypes.func.isRequired
};

export default AnecdoteList;