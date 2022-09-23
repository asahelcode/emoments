import express from 'express';

import { fetchPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', fetchPosts);
router.post('/', createPost);

export default router;
