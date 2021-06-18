import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      name: "University Life",
      body: "Lorem, ipsum dolor sit amet cons",
      author: "Taha",
      id: 1,
    },
    {
      name: "College Life",
      body: "Lorem, ipsum dolor sit amet cons",
      author: "Bilal",
      id: 2,
    },
    {
      name: "Birthday Party",
      body: "Lorem, ipsum dolor sit amet cons",
      author: "Taha",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog)=>blog.author === "Taha")} title="All Blogs"/>
    </div>
  );
};

export default Home;
