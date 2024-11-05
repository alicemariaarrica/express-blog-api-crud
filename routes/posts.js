//3.definisco le rotte relative per i post in formato JSON. Il router collegherà le rotte alle funzioni nel controller postsController.


const express = require('express')
const router = express.Router()

const postsController = require('../controllers/postscontroller.js')
router.get('/posts', postsController.getPosts)
router.get('/posts/:slug', postsController.getSlug)
router.get('/:tags', postsController.getPostsByTag)
router.post(`/posts`, postsController.addPost)




module.exports = router

