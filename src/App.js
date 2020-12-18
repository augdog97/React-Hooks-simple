
/**
 * 1. Import useState from React Library to use with hooks.
 * 2. Function declaration of App 
 * 3. useState provides state to a functional component." const [requested, setRequested] = useState(postsUrl);" is saying that the requested variable is in our state, and we set its inital value to postsUrl.
 *  - setRequested is the setter method to update the value of this piece of state.
 *  - each time a setter "setRequested" is called, the functional component will be re-rendered. 
 * 4. Rendering the requested data with a map function.
 * 5. Importing our Hook useFetch. The logic is encapsulated in its functions and other components can reuse it. useFetch is not tied to any one component. 
 */


import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

import Users from './Users';
import useFetch from './useFetch';

 const App = () => { 

  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";

  const [requested, setRequested] = useState(postsUrl);
  const data = useFetch(requested);


   return (
     <div> 
       <Users />
       <Button variant="link" onClick={() => setRequested([postsUrl])}>
         Posts
       </Button>
       <Button variant="link" onClick={() => setRequested([todosUrl])}>
         Todos
       </Button>
       <br />
        Requested: {requested}
        <ul>
          {data.map(el => (
            <li key={el.id}> {el.title} </li>
          ))}
        </ul>
     </div>
   );

 }


export default App;
