
 /* Creating a Hook to reuse logic
  1. Declare an Array "data" that holds the requested data in our state. initialized "data" to an empty array
  2. Called useEffect.
    - useEffect WITH NO 2Nd argument = functionality to componentDidUpdate. Runs everytime the component gets new props, or a state change. Would run an infinite loop becuase useEffect does the request, updates the state with setData which then calls useEffect again!
     - UseEffect WITH 2nd arg = functionality to componentDidMount. The request will only be made once.
     - put requested as second argument. When requested changes in value, useEffect will be called. */
import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, [url])
    return data
}
    export default useFetch