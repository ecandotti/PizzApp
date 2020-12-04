import React from 'react'

import { GiOpenTreasureChest } from 'react-icons/gi'

const Main = () => {
    const MainStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }
    return(
        <div className="flex-1 flex flex-col flex-nowrap h-full" style={MainStyle}>
            <h2>Bienvenue, <u>User1</u></h2>
            <p>Nombre de livraisons : 8</p>
            <p>Contributions ajout : 5</p>
            <p>A venir</p>
            <div className="flex flex-row flex-nowrap items-center"><div className="border bg-indigo-900 rounded-full p-2 text-white mx-auto cursor-pointer">Compter sa caisse <GiOpenTreasureChest className="mx-auto"/></div></div>
        </div>
    )
}

export default Main