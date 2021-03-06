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
    case "SET_ALERT":
      return {
        ...state,
        input: "",
        loading: false,
        alert: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
