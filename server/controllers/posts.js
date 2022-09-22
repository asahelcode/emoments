export const fetchPosts = (req, res) => {
  try {
    res.status(200).json('I would rule the world');
  } catch {
    (error) => console.log(error.message);
  }
};
