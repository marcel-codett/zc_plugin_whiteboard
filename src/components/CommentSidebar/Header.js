import React from 'react'

const Header = ({onAdd}) => {
    return (
        <header>
               <h3 onClick={onAdd} className="comment">Comment</h3>
        </header>
    )
}

export default Header
