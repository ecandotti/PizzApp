import React from 'react'

import { FaIdCardAlt } from 'react-icons/fa'

import client_pdp from '../img/client.png'
import residence_pdp from '../img/residence.png'

const Card = (props) => {
    return(
        <div className="flex-1 flex flex-nowrap flex-row border p-2 mx-2 mt-2 bg-white rounded-xl h-full items-center cursor-pointer hover:bg-gray-100" onClick={() => props.onClick()}>
            <div className="flex-1"><img src={props.isClient ? client_pdp : residence_pdp} alt="descriptive" className="w-1/2"/></div>
            <div className="flex-1">
                <div className="flex flex-row flex-nowrap items-center sm:text-lg"><FaIdCardAlt className="m-2"/> {props.name}</div>
            </div>
        </div>
    )
}

export default Card