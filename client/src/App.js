import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SinglePost from './SinglePost';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const firstThreePosts = backendData.slice(0, 3);
  const relatedPosts = backendData.slice(3);

  return (
    
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/post/:id" element={<SinglePost />} />
          <Route 
            path="/" 
            element={
              
              <div className="container">
                
                
                <div className="top-three-posts">
                  {firstThreePosts.length === 0 ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <div className="big-post">
                        <h1>Posts List</h1> 
                        {/* <h1>{firstThreePosts[0].title}</h1> */}
                        <p4 style={{ color: 'lightgray' }}>subheading</p4>
                        <div></div>
                        {firstThreePosts[0].photoUrl && <img src={firstThreePosts[0].photoUrl} alt={firstThreePosts[0].title} className="rounded-photo" />}
                        <h3>{firstThreePosts[0].title}</h3>
                        <p>{firstThreePosts[0].body}</p>
                      </div>
                      <div className="small-posts">
                        {firstThreePosts.slice(1).map((post) => (
                          <div key={post.id} className="small-post">
                            
                            {post.photoUrl && <img src={post.photoUrl} alt={post.title} className="rounded-photo"/>}
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h2>Related Posts/Photos</h2>
                <div className="related-posts">
                  {relatedPosts.length === 0 ? (
                    <p>No related posts available.</p>
                  ) : (
                    relatedPosts.map((post) => (
                      <div key={post.id} className="related-post">
                        <Link to={`/post/${post.id}`}className="link">
                          {post.photoUrl && <img src={post.photoUrl} alt={post.title} className="rounded-photo" />}
                          <h4 style={{color:'black'}}>{post.title}</h4>
                          <p style={{color:'black'}}>Author: {post.userId}</p>
                        </Link>
                      </div>
                    ))
                  )}
                </div>
                
              </div>
            } 
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
