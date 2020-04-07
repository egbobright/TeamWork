const express = require('express');
const db = require('./query');
const router = express.Router();

router.get('/feed', db.getAllFeed);
router.get('/articles/:articleid', db.getSingleArticle);
router.get('/gifs/:gifid', db.getSingleGif);
router.post('/gifs', db.postNewGif);
router.post('/articles', db.createNewArticle);
router.post('/articles/:articleid/comment', db.createArticleComment);
router.post('/gifs/:gifid/comment', db.createGifComment);
router.patch('/articles/:articleid', db.updateASingleArticle);
router.delete('/articles/:articleid', db.deleteASingleArticle);
router.delete('/gifs/:gifid', db.deleteASingleGif);
router.get('/users/user', db.createNewUser);

module.exports = router;
