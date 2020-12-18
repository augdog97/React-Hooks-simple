/* Users Component 
1. Reused useFetch hook. Did not have to write a single link of code around making a request inside of Users component. Simply just put the url as the argument.  */

import React from 'react';
import useFetch from './useFetch';

const Users = () => {
    const users = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <ul> 
            {users.map(el => (
                <li key={el.id}> {el.name} </li>
            ))} 
        </ul>
    )
}
    export default Users