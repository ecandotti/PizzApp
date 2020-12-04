import React from 'react'

import { FaPizzaSlice } from 'react-icons/fa'

const Header = ({title}) => {
    const headerStyle = {
        height: '10vh'
    }
    return(
        <div className="fixed flex-1 w-full bg-blue-300 select-none" style={headerStyle}>
            <div className="flex flex-row flex-nowrap text-gray-800 items-center h-full w-full justify-center text-2xl"><FaPizzaSlice className="mr-2"/> {title}</div>
        </div>
    )
}

export default Header