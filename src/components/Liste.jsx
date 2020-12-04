import React from 'react'

import Card from './Card'

const Liste = (props) => {
    const ListClientStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }
    return(
        <div className="flex-1 flex flex-col flex-nowrap" style={ListClientStyle}>
            <div className="flex flex-col flex-nowrap">
                {props.clientArray.map((client) => (<Card key={client._id} name={client.cli_name} address={client.cli_address} />))}
            </div>
        </div>
    )
}

export default Liste