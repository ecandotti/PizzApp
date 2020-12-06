import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineHome, AiOutlineFileAdd, AiOutlineSearch } from 'react-icons/ai'

class Navigation extends React.Component {
    render(){
        const NavStyle = {
            height: '10vh'
        }
        return(
            <div className="fixed bottom-0 flex-1 flex flex-row flex-nowrap bg-yellow-500 w-full" style={NavStyle}>
                <NavLink to="/" className="flex-1 flex items-center hover:bg-yellow-400 h-full focus:outline-none">
                    <AiOutlineHome className="mx-auto text-2xl"/>
                </NavLink>
                <NavLink to="/adding" className="flex-1 flex items-center hover:bg-yellow-400 h-full focus:outline-none">
                    <AiOutlineFileAdd className="mx-auto text-2xl"/>
                </NavLink>
                <NavLink to="/search" className="flex-1 flex items-center hover:bg-yellow-400 h-full focus:outline-none">
                    <AiOutlineSearch className="mx-auto text-2xl"/>
                </NavLink>
            </div>
        )
    }
}

export default Navigation