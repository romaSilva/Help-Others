export default (state, action) => {
  switch (action.type) {
    case "SET_FEATURED":
      return {
        ...state,
        featured: action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_RESULTS":
      return {
        ...state,
        input: "",
        loading: false,
        results: action.payload,
      };
    default:
      return state;
  }
};
