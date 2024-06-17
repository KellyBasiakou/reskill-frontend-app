const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());

// Fetch data from posts and photos APIs
app.get('/posts', async (req, res) => {
  try {
    const [postsResponse, photosResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/photos')
    ]);

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    // Combine posts and photos
    const combinedData = posts.map(post => {
      const photo = photos.find(photo => photo.id === post.id);
      return { ...post, photoUrl: photo ? photo.url : null };
    });

    res.json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the APIs' });
  }
});

// Fetch a specific post by ID
app.get('/post/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = postResponse.data;

    const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = photoResponse.data;

    const combinedData = { ...post, photoUrl: photo.url };

    res.json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the APIs' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});










// const express = require('express')
// const app= express()
// const https = require('https');
// const axios = require('axios');

// // app.get("/api",(req,res)=>{
// //     res.json({"users":["userOne","userTwo","userThree"]})
// // })
// app.get('/api', async (req, res) => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       res.json(response.data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to fetch data from the API' });
//     }
//   });

// app.listen(5000,()=>{console.log("Server started on port 5000")})