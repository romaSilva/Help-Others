import React, { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'


const Search = () => {

    const { handleChange, input, handleSubmit, alert } = useContext(GlobalContext)

    return (
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    placeholder="Find an organization..."
                    value={input}
                    onChange={handleChange}
                />
            </form>
        
    )
}

export default Search
