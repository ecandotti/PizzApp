import React from 'react'

//import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
/*
    <div className="flex-1 flex flex-row flex-nowrap w-full">
        <AiFillDelete className="border h-full bg-red-500 text-white rounded"/>
        <AiFillEdit className="border h-full bg-yellow-500 text-white rounded"/>
    </div> 
*/

import client_pdp from '../img/client.png'
import residence_pdp from '../img/residence.png'

const Card = (props) => {
    return(
        <div className="flex-1 flex flex-nowrap flex-row border p-2 mx-2 mt-2 bg-white rounded h-full">
            <div className="flex-1"><img src={props.isClient ? client_pdp : residence_pdp} alt="descriptive"/></div>
            <div className="flex-1">
                {props.name}<br/>
                {props.address}
            </div>
            <div className="flex-1">
                {props.info}TEST
            </div>
        </div>
    )
}

export default Card