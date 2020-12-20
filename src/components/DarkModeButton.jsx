import React, { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const DarkModeButton = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    function changeMode(){
        if(darkTheme) {
            document.querySelector('html').classList.remove('dark')
            setDarkTheme(false)
        } else {
            document.querySelector('html').classList.add('dark')
            setDarkTheme(true)
        }
    }
    return(
        <>
            {
            darkTheme   ? <FiSun onClick={() => changeMode()} className="absolute top-2 right-2 z-10"/> 
                        : <FiMoon onClick={() => changeMode()} className="absolute top-2 right-2 z-10"/>
            }
        </>
    )
}

export default DarkModeButton