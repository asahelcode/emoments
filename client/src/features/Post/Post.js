import React, { useEffect } from 'react';
import Posts from './Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../action/posts';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Posts />
      <Posts />
    </div>
  );
};

export default Post;
