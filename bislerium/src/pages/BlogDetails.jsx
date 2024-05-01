import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details based on the ID
    // You should replace this with your actual API call
    fetch(`https://your-api.com/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id]);

  //   if (!blog) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h1>{blog.title} Hello</h1>
      <p>{blog.description}</p>
      {/* Render other details of the blog as needed */}
    </div>
  );
};

export default BlogDetails;
