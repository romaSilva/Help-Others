import React, { useReducer } from "react";
import axios from "axios";
import GlobalContext from "./globalContext";
import Reducer from "./globalReducer";

//the api key
const publicKey = "537afd48-ee22-4040-a7fa-eb858180ad34";

const GlobalState = (props) => {
  //Initial state declaration
  const initialState = {
    featured: [],
    input: "",
    loading: false,
    results: [],
    alert: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  //Get featured organization to display on home page
  const getFeatured = async () => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${publicKey}`
    );
    const resArr = res.data.projects.project;
    resArr.pop();
    console.log(resArr);
    dispatch({
      type: "SET_FEATURED",
      payload: resArr,
    });
  };

  //Handles the typing and sets input
  const handleChange = (e) => {
    dispatch({
      type: "SET_INPUT",
      payload: e.target.value,
    });
  };

  //makes the api call and sets results
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.input) {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/services/search/projects?api_key=${publicKey}&q=${state.input}`
      );
      console.log(res);
      if (res.data.search.response.numberFound) {
        const resArr = res.data.search.response.projects.project;
        resArr.length === 10 && resArr.pop();
        dispatch({
          type: "SET_RESULTS",
          payload: resArr,
        });
      } else {
        console.log("alert");
      }
    } else {
      console.log("alert");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        featured: state.featured,
        input: state.input,
        loading: state.loading,
        results: state.results,
        alert: state.alert,
        getFeatured,
        handleChange,
        handleSubmit,
        publicKey,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
