import React from 'react'

import { FaPizzaSlice } from 'react-icons/fa'

const Header = ({title}) => {
    const headerStyle = {
        height: '10vh'
    }
    return(
        <div className="fixed flex-1 w-full bg-gray-800 select-none" style={headerStyle}>
            <div className="flex flex-row flex-nowrap text-white items-center h-full w-full justify-center text-2xl">
                <FaPizzaSlice className="mr-2"/>
            </div>
        </div>
    )
}

export default Header