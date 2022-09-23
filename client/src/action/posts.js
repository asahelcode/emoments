import * as api from '../api/posts';

export const getPosts = () => async (dispatch) => {
  const { data } = await api.fetchPost();

  dispatch({ type: 'FETCH_ALL', payload: data });
};

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);

  dispatch({ type: 'CREATE', payload: data });
};
