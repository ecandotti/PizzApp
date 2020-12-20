import React, { useState } from 'react'

import { FaUserAlt, FaBuilding } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Adding = (props) => {

    const history = useHistory()

    const [isClient, setClient] = useState(true)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const [info, setInfo] = useState('')

    const switchContact = (mode) => {
        if(mode === 'client'){
            setClient(true)
            document.getElementById("residenceID").classList.remove("bg-yellow-700")
            document.getElementById("clientID").classList.add("bg-blue-700")
        } else if(mode === 'residence'){
            setClient(false)
            document.getElementById("clientID").classList.remove("bg-blue-700")
            document.getElementById("residenceID").classList.add("bg-yellow-700")
        } else {
            console.log('Pas de mode transmis')
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()

        const contact = {'isClient': isClient, 'name': name, 'address': address, 'code': code, 'info': info + ' ' }

        fetch('https://pizzapifire.herokuapp.com/contacts/add', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(() => {
            console.log("done")
            props.updateData()
            history.push("/search")
        })
        .catch(err => console.log(err))
    }

    const AddingStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }
    return(
        <div className="flex-1 flex flex-col flex-nowrap w-full" style={AddingStyle}>
            <div className="mx-auto flex flex-row flex-nowrap m-4">
                <div className="cursor-pointer m-4 hover:bg-blue-700 p-4 rounded"  onClick={() => switchContact('client')} id="clientID">
                    <FaUserAlt className="text-2xl"/>
                </div>
                <div className="cursor-pointer m-4 hover:bg-yellow-700 p-4 rounded"  onClick={() => switchContact('residence')} id="residenceID">
                    <FaBuilding className="text-2xl"/>
                </div>
            </div>
            <form method="POST" className="flex flex-col flex-nowrap items-center w-full px-4" onSubmit={onSubmit}>
                <div>Fiche {isClient ? 'Client' : 'Résidence'}</div>
                <div className="my-4">
                    Nom :<br/>
                    <input name="name" type="text" className="rounded focus:outline-none pl-1 text-black" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="my-4">
                    Adresse :<br/>
                    <input name="address" type="text" className="rounded focus:outline-none pl-1 text-black" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                </div>
                <div className="my-4">
                    Code :<br/>
                    <input name="code" type="text" className="rounded focus:outline-none pl-1 text-black" value={code} onChange={(e) => setCode(e.target.value)}/>
                </div>
                <div className="my-4">
                    Informations :<br/>
                    <input name="info" type="text" className="rounded focus:outline-none pl-1 text-black" value={info} onChange={(e) => setInfo(e.target.value)}/>
                </div>
                <div className="my-4 flex flex-row flex-nowrap items-center">
                    <button type="submit" className="border bg-green-600 hover:bg-green-500 rounded-full py-2 px-4 select-none">+ Ajouter</button>
                </div>
            </form>
        </div>
    )
}

export default Adding