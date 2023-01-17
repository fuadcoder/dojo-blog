import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')





    /*const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ]);*/
    // const [blogs, setBlogs] = useState(null);
    // const [isPending,setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const [name, setName] = useState('mario');

    /* useEffect(() => {
        //console.log('use effect ran');
        //console.log(blogs); 
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs')
            .then(res => {
                //console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        }, 1000);   
    }, []); */

    return (
        <div className="home">
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/*<button onClick={() => setName('luigi')}>change name</button>*/}
            { /* <p>{ name }</p>*/}
        </div>
    );
}

export default Home;