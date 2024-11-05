//3.definisco le rotte relative per i post in formato JSON. Il router collegherà le rotte alle funzioni nel controller postsController.



const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");


router.get("/posts", postsController.getPosts);


router.get("/posts/:slug", postsController.getPostBySlug);

router.get("/posts/tag/:tag", postsController.getPostsByTag);

module.exports = router;
