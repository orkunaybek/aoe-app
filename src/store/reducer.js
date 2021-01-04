const initState = {
  unitList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_UNIT_LIST':
      return { ...state, unitList: action.list };
    default:
  }
  return state;
};

export default reducer;
