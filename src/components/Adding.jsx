import React from 'react'

class Adding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            address: '',
            info: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const name = this.state.nom
        const address = this.state.address
        const info = this.state.info

        const client = { 'cli_name': name, 'cli_address': address, 'cli_info': info + ' ' }

        fetch('https://cors-anywhere.herokuapp.com/http://176.189.0.162:8181/clients/add', {
            method: 'POST',
            body: JSON.stringify(client),
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
            //this.props.updateData()
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
                <form method="POST" className="flex flex-col flex-nowrap items-center w-full p-4" onSubmit={this.handleSubmit}>
                    <div className="my-4">
                        Nom :<br/>
                        <input name="nom" type="text" className="rounded focus:outline-none pl-1" value={this.state.nom} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-4">
                        Adresse :<br/>
                        <input name="address" type="text" className="rounded focus:outline-none pl-1" value={this.state.address} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-4">
                        Info :<br/>
                        <input name="info" type="text" className="rounded focus:outline-none pl-1" value={this.state.info} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-4 flex flex-row flex-nowrap items-center">
                        <button type="submit" className="border bg-green-400 rounded-full py-2 px-4 text-white select-none">+ Ajouter</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Adding