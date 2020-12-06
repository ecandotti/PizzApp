import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { AiOutlineSearch } from 'react-icons/ai'

import Card from './Card'

const Search = (props) => {

    const [query, updateQuery] = useState('')

    const fuse = new Fuse(props.mainArr, {
        keys: [
          'name',
          'address'
        ],
        includeScore: true
      })
    let results = fuse.search(query)

    function onSearch({ currentTarget }) {
        updateQuery(currentTarget.value)
        results = fuse.search(query)
        console.log(results)
    }

    const searchStyle = {
        marginTop: '10vh',
        marginBottom: '10vh'
    }

    if(results.length > 0){
        return(
            <div className="flex-1 flex flex-col flex-nowrap" style={searchStyle}>
                <div className="flex flex-row flex-nowrap mt-8 mx-2">
                    {/* Search Bar */}
                    <div className="flex-1 w-full text-center mb-4">
                        <AiOutlineSearch className="mx-auto"/>
                        <input 
                            onChange={onSearch}
                            type="text"
                            value={query}
                            className="rounded-full w-full mt-2 text-center focus:outline-none bg-gray-600" />
                    </div>
                </div>

                <div className="flex flex-col flex-nowrap">
                    {
                        results.map((req) => (
                                        <Card 
                                            key={req.item._id}
                                            name={req.item.name}
                                            address={req.address}
                                            code={req.code}
                                            isClient={req.item.isClient} 
                                            onClick={() => {window.location.replace(`/profile/${req.item._id}`)}}/>
                                        )
                                    )
                    }
                </div>
            </div>
        )
    } else {
        return(
            // NO RESULT
            <div className="flex-1 flex flex-col flex-nowrap" style={searchStyle}>

                <div className="flex flex-row flex-nowrap mt-8 mx-2">
                    <div className="flex-1 w-full text-center mb-4">
                        <AiOutlineSearch className="mx-auto"/>
                        <input
                            onChange={onSearch} 
                            type="text"
                            value={query}
                            className="rounded-full w-full mt-2 text-center focus:outline-none bg-gray-600" />
                    </div>
                </div>

                <div className="flex flex-col flex-nowrap">
                    {
                        props.mainArr.map((main) => (
                                                <Card
                                                    key={main._id}
                                                    name={main.name}
                                                    address={main.address}
                                                    code={main.code}
                                                    isClient={main.isClient} 
                                                    onClick={() => {window.location.replace(`/profile/${main._id}`)}}/>
                                                )
                                            )
                    }
                </div>
            </div>
        )
    }
}

export default Search