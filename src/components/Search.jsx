import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { AiOutlineSearch } from 'react-icons/ai'

import Card from './Card'

const Search = (props) => {
    const [query, updateQuery] = useState('')

    const fuse = new Fuse(props.clientArray, {
        keys: [
            "cli_name"
        ],
        includeScore: true
    })

    function onSearch({ currentTarget }) {
        updateQuery(currentTarget.value)
        console.log(fuse.search(currentTarget.value))
    }
    const results = fuse.search(query)

    const searchStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }

    if(results.length === 0) {
        return(
            <div className="flex-1 flex flex-col flex-nowrap" style={searchStyle}>
                <div className="flex flex-row flex-nowrap mt-8 mx-2">
                    {/* Search Bar */}
                    <div className="flex-1 w-full text-center mb-4"><AiOutlineSearch className="mx-auto"/><input onChange={onSearch} type="text" value={query} className="rounded-full w-full mt-2 text-center focus:outline-none"/></div>
                </div>
                <div className="flex flex-col flex-nowrap">
                    {props.clientArray.map((client) => (<Card key={client._id} name={client.cli_name} address={client.cli_address} isClient={true}/>))}
                </div>
            </div>
        )
    } else {
        return(
            <div className="flex-1 flex flex-col flex-nowrap" style={searchStyle}>
                <div className="flex flex-row flex-nowrap mt-8 mx-6">
                    {/* Search Bar */}
                    <div className="flex-1 w-full text-center mb-4"><AiOutlineSearch className="mx-auto"/><input onChange={onSearch} type="text" value={query} className="rounded-full w-full mt-2 text-center focus:outline-none"/></div>
                </div>
                <div className="flex flex-col flex-nowrap">
                    {results.map((req) => (<Card key={req.item._id} name={req.item.cli_name} address={req.item.cli_address} isClient={true}/>))}
                </div>
            </div>
        )
    }
}

export default Search