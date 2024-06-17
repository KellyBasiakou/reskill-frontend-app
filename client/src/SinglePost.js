import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/post/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-details">
      <div className="post-content">
        <h1>{post.title}</h1>
        <div className='subheading'>
        <p>subheading for description or instructions</p>
        </div>
        
        <p>{post.body}</p>
      </div>
      <div className="post-photo">
        {post.photoUrl && <img src={post.photoUrl} alt={post.title} />}
      </div>
    </div>
  );
}

export default SinglePost;
