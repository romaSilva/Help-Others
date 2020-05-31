import React from 'react'
import Search from './Search'
import Alert from './Alert'

const Header = () => {


    return (
        <header className="header">
            <div className="logo">help others</div>
            <Search />
            <Alert />
        </header>
    )
}

export default Header
