const menu = require('../db/arrayPosts.js');
exports.store = (req, res) => {
  const { title, content, image } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Scrivi il titolo e il content' });
  }

  const newPost = {
    id: menu.length + 1,
    title: title,
    content: content,

  };


  menu.push(newPost);


  return res.status(201).json({
    message: "Post creato con successo",
    data: menu,
    count: menu.length
  });
};

exports.delete = (req, res) => {
  const postId = parseInt(req.params.id);


  const postIndex = menu.findIndex(post => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post nonn trovato' });
  }

  const updatedPosts = menu.filter(post => post.id !== postId);

  return res.json(updatedPosts);
};
