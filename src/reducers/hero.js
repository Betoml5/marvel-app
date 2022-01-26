function heros(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case "SET_ALL_HEROS":
      return { ...state, state: action.payload };

    default:
      return state;
  }
}

export default heros;
