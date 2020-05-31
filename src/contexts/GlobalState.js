import React, { useReducer } from 'react'
import axios from 'axios'
import GlobalContext from './globalContext'
import Reducer from './globalReducer'

const publicKey = '537afd48-ee22-4040-a7fa-eb858180ad34'

const GlobalState = props => {

    const initialState = {
        input: "",
        results: [],
        alert: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState)


    const handleChange = e => {
        dispatch({
            type: 'INPUT',
            payload: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if(state.input) {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.globalgiving.org/api/public/services/search/projects?api_key=${publicKey}&q=${state.input}`)
            if(res.data.search.response.numberFound){
                const resArr = res.data.search.response.projects.project
                console.log(resArr)
            }else {
                alert()
            }
        }else {
            alert()
        }
    }

    const alert = () => {
        dispatch({
            type: 'ALERT',
            payload: null
        })

        setTimeout(() => 
        dispatch({
            type: 'NOT_ALERT',
            payload: null
        }), 2000)
    }


    return (
        <GlobalContext.Provider
        value={{
            handleChange,
            input: state.input,
            handleSubmit,
            alert: state.alert,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
