import React, { useReducer } from "react";
import axios from "axios";
import GlobalContext from "./globalContext";
import Reducer from "./globalReducer";

//the api key
const publicKey = "537afd48-ee22-4040-a7fa-eb858180ad34";

const GlobalState = (props) => {
  const initialState = {
    featured: [],
    input: "",
    results: [],
    alert: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.input) {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/services/search/projects?api_key=${publicKey}&q=${state.input}`
      );
      if (res.data.search.response.numberFound) {
        const resArr = res.data.search.response.projects.project;
        console.log(resArr);
        dispatch({
          type: "SET_RESULTS",
          payload: resArr,
        });
      } else {
        alert();
      }
    } else {
      alert();
    }
  };

  const alert = () => {
    dispatch({
      type: "ALERT",
      payload: null,
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
          payload: null,
        }),
      2000
    );
  };

  //Get featured organization to display on home page
  const getFeatured = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${publicKey}`
    );
    const resArr = res.data.projects.project;
    console.log(resArr);
    dispatch({
      type: "SET_FEATURED",
      payload: resArr,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        featured: state.featured,
        input: state.input,
        results: state.results,
        alert: state.alert,
        handleChange,
        handleSubmit,
        getFeatured,
        publicKey,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
