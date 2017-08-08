// a reducer takes in two things:

// 1. The action (info about what happend)
// 2. Copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case "INCREMENT_LIKES":
    // Return the updated state
    const i = action.index;
    return [
      ...state.slice(0, i), // Before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1) // After the onde we are updating
    ]
    default:
    return state;
  }
}

export default posts;
