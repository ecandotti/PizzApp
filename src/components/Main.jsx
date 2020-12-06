import React from 'react'

import { GiOpenTreasureChest } from 'react-icons/gi'

import logo from '../img/pizza.png'

const Main = () => {

    const MainStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }
    return(
        <div className="flex-1 flex flex-col flex-nowrap h-full mx-auto p-8 space-y-8" style={MainStyle}>
            <img src={logo} alt="Logo"/>
            <h2>Bienvenue, <u>User1</u></h2>
            <div className="flex flex-row flex-nowrap items-center"><div className="border bg-indigo-900 rounded-full p-2 text-white mx-auto cursor-not-allowed">Compter sa caisse <GiOpenTreasureChest className="mx-auto"/></div></div>
        </div>
    )
}

export default Main