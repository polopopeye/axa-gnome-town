const reducer = (state, action) => {
  // return state;
  switch (action.type) {
    case 'SET_FAVOURITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVOURITE':
      return {
        ...state,
        myList: [
          ...state.myList.filter((gnome) => gnome.id !== action.payload),
          action.payload,
        ],
      };
    case 'SET_LIMITS':
      return {
        ...state,
        resultsPerPage: parseInt(action.payload),
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: [action.payload],
      };
    case 'SET_DATA':
      return {
        ...state,
        Brastlewark: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
