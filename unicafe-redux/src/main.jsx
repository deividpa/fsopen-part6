import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// Reducer to manage the state of the application
const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1 }
    case 'OK':
      return { ...state, ok: state.ok + 1 }
    case 'BAD':
      return { ...state, bad: state.bad + 1 }
    case 'ZERO':
      return initialState
    default:
      return state
  }
}

// Create the store
const store = createStore(counterReducer)

const App = () => {
  // Handlers for the buttons
  const handleGood = () => store.dispatch({ type: 'GOOD' })
  const handleOk = () => store.dispatch({ type: 'OK' })
  const handleBad = () => store.dispatch({ type: 'BAD' })
  const handleReset = () => store.dispatch({ type: 'ZERO' })

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleOk}>ok</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleReset}>reset stats</button>

      <h2>Statistics</h2>
      <p>good: {store.getState().good}</p>
      <p>ok: {store.getState().ok}</p>
      <p>bad: {store.getState().bad}</p>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

// Suscribe to the store to render the app when the state changes
store.subscribe(renderApp)

// Initial render
renderApp()
