export default (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        input: action.payload,
      };
    case "ALERT":
      return {
        ...state,
        alert: true,
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        alert: false,
      };
    case "SET_RESULTS":
      return {
        ...state,
        results: action.payload,
        openResults: true,
      };
    case "SET_FEATURED":
      return {
        ...state,
        featured: action.payload,
      };
    default:
      return state;
  }
};
