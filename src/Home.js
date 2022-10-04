import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blog,setBlog]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
      const deleteBlog=(id)=>{
        const newBlog=blog.filter((blog)=>
            blog.id!==id
        )
        setBlog(newBlog)
      }
    
    return (  <div>
        {blog && <Bloglist blog={blog} title='All Blogs!!!' handleDelete={deleteBlog}/>}
    </div>);
}
 
export default Home;