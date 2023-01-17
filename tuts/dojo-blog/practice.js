/*import './App.css';

function App() {
  const title = "Welcome to my new blog";
  const likes = "50";
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{10}</p>
        <p>{ "hello, everyone" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() *10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}*/

/*export default App;

const Home = () => {

  const handleClick = (e) => {
   console.log('hello, ninjas', e);
  } 
  const handleClickAgain = (name, e) => {
   console.log('hello ' + name, e.target);
  }
   
   
   return (
       <div className="home">
           <h2>HomePage</h2>
           <button onClick={handleClick}>Click me</button>
           <button onClick={(e) =>handleClickAgain('olamide', e)}>Click me again</button>
       </div>
     );
}

export default Home;*/


/*USING STATE(useState hook):

import { useState } from "react";

const Home = () => {
    //let name = 'mario';
const [name, setName] = useState('mario');
const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;*/