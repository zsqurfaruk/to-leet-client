// actions.js

export const setPosts = (posts:any) => {
    return {
      type: 'SET_POSTS',
      payload: posts,
    };
  };
  