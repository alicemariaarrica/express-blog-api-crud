

const posts = require("../db");

exports.index = (req, res) => {

  let html = "<html><body><ul>";
  posts.forEach(post => {
    html += `<li>${post.title}</li>`;
  });
  html += "</ul></body></html>";
  res.send(html);
};

exports.show = (req, res) => {
  const slug = req.params.slug;
  const post = posts.find(post => post.slug === slug);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post non trovato" });
  }
};

exports.store = (req, res) => {
    const { title, slug, content, image, tags } = req.body;
  
   

    //esercizio 2
    
    const newPost = {
      title,
      slug,
      content,
      image,
      tags
    };
  
  
    posts.push(newPost);
  
  
    res.json(posts);
  };