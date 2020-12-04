import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineHome, AiOutlineFileAdd, AiOutlineSearch } from 'react-icons/ai'

class Navigation extends React.Component {
    render(){
        const NavStyle = {
            height: '10vh'
        }
        return(
            <div className="fixed bottom-0 flex-1 flex flex-row flex-nowrap bg-blue-300 w-full" style={NavStyle}>
                <NavLink to="/" className="flex-1 flex items-center hover:bg-blue-100 h-full" onClick={() => {this.props.changeTitle("Accueil")}}><AiOutlineHome className="mx-auto text-2xl"/></NavLink>
                <NavLink to="/adding" className="flex-1 flex items-center hover:bg-blue-100 h-full" onClick={() => {this.props.changeTitle("Ajout")}}><AiOutlineFileAdd className="mx-auto text-2xl"/></NavLink>
                <NavLink to="/search" className="flex-1 flex items-center hover:bg-blue-100 h-full" onClick={() => {this.props.changeTitle("Recherche")}}><AiOutlineSearch className="mx-auto text-2xl"/></NavLink>
            </div>
        )
    }
}

export default Navigation