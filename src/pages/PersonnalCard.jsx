import React, { useState } from 'react'

import { FaIdCardAlt } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { GiPadlock } from 'react-icons/gi'

import client_pdp from '../img/client.png'
import residence_pdp from '../img/residence.png'
import { useHistory } from 'react-router-dom'

const PersonnalCard = (props) => {

    const history = useHistory()

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const [info, setInfo] = useState('')
    const [picture, setPicture] = useState(true)

    // Recup ID in URL (string)
    const pathSplit = window.location.pathname.split('/')[2]
    
    let test = []
    fetch(`https://pizzapifire.herokuapp.com/contacts/${pathSplit}`)
        .then(response => response.json())
        .then(req => test.push(req))
        .then(() => {
            test.forEach(element => {
                setName(element.name)
                setAddress(element.address)
                element.code ? setCode(element.code) : setCode('none')
                setInfo(element.info)
                setPicture(element.isClient)
            })
        })
        .catch(err => console.log(err))

    console.log(props.mainArr)

    const PersonnalCardStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }
    return(
        <div className="flex-1 flex flex-nowrap flex-col p-4 bg-gray-500 items-center"  style={PersonnalCardStyle}>
            <div className="text-left m-4 space-y-8">
                <img src={picture ? client_pdp : residence_pdp} alt="descriptive" className="1/3 mx-auto"/>
                <div className="flex flex-row flex-nowrap items-center sm:text-lg"><FaIdCardAlt className="m-2"/> {name}</div>
                <div className="flex flex-row flex-nowrap items-center sm:text-lg"><HiLocationMarker className="m-2"/> {address}</div>
                <div className="flex flex-row flex-nowrap items-center sm:text-lg"><AiFillInfoCircle className="m-2"/> {info}</div>
                <div className="flex flex-row flex-nowrap items-center sm:text-lg"><GiPadlock className="m-2"/> {code}</div>
                <div className="flex flex-row flex-nowrap"><span className="mx-auto border bg-green-600 rounded-full sm:text-lg cursor-pointer hover:bg-green-500 px-8 py-3" onClick={() => history.push("/")}>Merci</span></div>
            </div>
        </div>
    )
}

export default PersonnalCard