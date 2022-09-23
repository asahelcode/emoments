import postMessage from '../models/postMessage.js';

export const fetchPosts = async (req, res) => {
  try {
    const posts = await postMessage.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createPost = async (req, res) => {
  let body = req.body;

  try {
    const newPost = new postMessage(body);

    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
