import React from 'react'

function NameKey() {
    const names = ['Bruce', 'Clark', 'David', 'Bruce']
    const nameList = names.map((names, index) => <h2 key = {index}>{index} {names}</h2>)
    return <div>{nameList}</div>

}

export default NameKey

