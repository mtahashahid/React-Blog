// import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

  const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs");
  // const [blogs, setBlogs] = useState([
  //   {
  //     name: "University Life",
  //     body: "Lorem, ipsum dolor sit amet cons",
  //     author: "Taha",
  //     id: 1,
  //   },
  //   {
  //     name: "College Life",
  //     body: "Lorem, ipsum dolor sit amet cons",
  //     author: "Bilal",
  //     id: 2,
  //   },
  //   {
  //     name: "Birthday Party",
  //     body: "Lorem, ipsum dolor sit amet cons",
  //     author: "Taha",
  //     id: 4,
  //   },
  //   {
  //     name: "Birthday Party",
  //     body: "Lorem, ipsum dolor sit amet cons",
  //     author: "Taha",
  //     id: 5,
  //   },
  //   {
  //     name: "Birthday Party",
  //     body: "Lorem, ipsum dolor sit amet cons",
  //     author: "Taha",
  //     id: 6,
  //   },
  // ]);

  

  // const deleteBlog = (id) =>{
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs);
  // }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog}/>} */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Taha")} title="All Blogs" /> */}
    </div>
  );
};

export default Home;
