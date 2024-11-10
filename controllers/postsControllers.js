const menu = require('../db/arrayPosts.js');

exports.store = (req, res) => {
 
  const { title, content, image } = req.body;


  if (!title || !content) {
    return res.status(400).json({ error: 'Il titolo e il contenuto sono obbligatori.' });
  }

  const newPost = {
    id: posts.length + 1, 
    title: title,         
    content: content,     
    image: image || 'default.jpg'  
  };

 
  posts.push(newPost);

 
  return res.status(201).json({
    message: "Post creato con successo",
    data: posts, 
    count: posts.length 
  });
};
