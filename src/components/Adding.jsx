import React from 'react'

import { FaUserAlt, FaBuilding } from 'react-icons/fa'

class Adding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            address: '',
            code: '',
            info: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    switchContact(mode){
        if(mode === 'client'){
            this.setState({
                isClient: true
            })
            document.getElementById("residenceID").classList.remove("bg-yellow-700")
            document.getElementById("clientID").classList.add("bg-blue-700")
        } else if(mode === 'residence'){
            this.setState({
                isClient: false
            })
            document.getElementById("clientID").classList.remove("bg-blue-700")
            document.getElementById("residenceID").classList.add("bg-yellow-700")
        } else {
            console.log('Pas de mode transmis')
        }
    }

    onSubmit = (event) => {
        event.preventDefault()

        const name = this.state.nom
        const address = this.state.address
        const code = this.state.code
        const info = this.state.info
        const isClient = this.state.isClient

        const contact = {'isClient': isClient, 'name': name, 'address': address, 'code': code, 'info': info + ' ' }

        fetch('https://pizzapifire.herokuapp.com/contacts/add', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(() => {
            console.log("done")
            this.setState({
                    name: '',
                    address: '',
                    info: ''
            })
            window.location.replace("/search")
        })
        .catch(err => console.log(err))
    }

    render(){
        const AddingStyle = {
            marginTop: '10vh',
            marginBottom: '10vh'
        }
        return(
            <div className="flex-1 flex flex-col flex-nowrap w-full" style={AddingStyle}>
                <div className="mx-auto flex flex-row flex-nowrap m-4">
                    <div className="cursor-pointer m-4 hover:bg-blue-700 p-4 rounded"  onClick={() => this.switchContact('client')} id="clientID">
                        <FaUserAlt className="text-2xl"/>
                    </div>
                    <div className="cursor-pointer m-4 hover:bg-yellow-700 p-4 rounded"  onClick={() => this.switchContact('residence')} id="residenceID">
                        <FaBuilding className="text-2xl"/>
                    </div>
                </div>
                <form method="POST" className="flex flex-col flex-nowrap items-center w-full px-4" onSubmit={this.onSubmit}>
                    <div>Fiche {this.state.isClient ? 'Client' : 'Résidence'}</div>
                    <div className="my-4">
                        Nom :<br/>
                        <input name="nom" type="text" className="rounded focus:outline-none pl-1 text-black" value={this.state.nom} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-4">
                        Adresse :<br/>
                        <input name="address" type="text" className="rounded focus:outline-none pl-1 text-black" value={this.state.address} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-4">
                        Code :<br/>
                        <input name="code" type="text" className="rounded focus:outline-none pl-1 text-black" value={this.state.code} onChange={this.handleChange}/>
                    </div>
                    <div className="my-4">
                        Informations :<br/>
                        <input name="info" type="text" className="rounded focus:outline-none pl-1 text-black" value={this.state.info} onChange={this.handleChange}/>
                    </div>
                    <div className="my-4 flex flex-row flex-nowrap items-center">
                        <button type="submit" className="border bg-green-600 hover:bg-green-500 rounded-full py-2 px-4 select-none">+ Ajouter</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Adding