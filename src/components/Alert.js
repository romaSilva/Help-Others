import React, { useContext } from 'react'
import { FaExclamationCircle } from 'react-icons/fa'
import GlobalContext from '../contexts/globalContext'

const Alert = () => {

    const { alert } = useContext(GlobalContext)

    return (

        alert ? 
        <div className="alert"><FaExclamationCircle /></div> :
        <div className="alert" style={{color: 'transparent'}}><FaExclamationCircle /></div>

    )

}

export default Alert
